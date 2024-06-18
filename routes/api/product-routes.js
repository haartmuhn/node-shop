const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// GET all products with associated Category and Tag data
router.get('/', async (req, res) => {
  try {
    const productsData = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.status(200).json(productsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one product by id with associated Category and Tag data
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    // If there are associated tagIds, create ProductTag entries
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: newProduct.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a product by id
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // If there are associated tagIds, update ProductTag entries
    if (req.body.tagIds && req.body.tagIds.length) {
      // Get current ProductTag entries for the product
      const currentProductTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });

      // Map current tag_ids
      const currentTagIds = currentProductTags.map(({ tag_id }) => tag_id);

      // Filter new tag_ids to add
      const newTagIds = req.body.tagIds.filter((tag_id) => !currentTagIds.includes(tag_id));

      // Filter current tag_ids to remove
      const tagIdsToRemove = currentProductTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // Create new ProductTag entries to add
      const newProductTags = newTagIds.map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        };
      });

      // Update ProductTag entries
      await Promise.all([
        ProductTag.destroy({ where: { id: tagIdsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    res.status(200).json({ message: 'Product updated successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a product by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedProduct) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;