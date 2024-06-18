<div align="center">

# Node Shop

[![License: MIT](https://img.shields.io/badge/License-MIT-FFFF00.svg)](https://opensource.org/licenses/MIT)
![JavaScript Badge](https://img.shields.io/badge/js-FF0000?logo=javascript&logoColor=fff&style=flat)
![JSON Badge](https://img.shields.io/badge/json-0000FF?logo=json&logoColor=fff&style=flat)
![Node.JS Badge](https://img.shields.io/badge/node-008000?logo=node.js&logoColor=fff&style=flat)
![npm Badge](https://img.shields.io/badge/npm-800080?logo=npm&logoColor=fff&style=flat)

</div>

## Description

Node Shop is a powerful and flexible backend solution for e-commerce platforms, designed to streamline and enhance online retail operations. Built on top of Express.js and utilizing Sequelize for object-relational mapping, Node Shop connects seamlessly to a PostgreSQL database, allowing for efficient data handling and manipulation. This solution is crafted to provide developers with the tools needed to build a competitive e-commerce backend that supports a wide range of retail activities from inventory management to customer engagement through advanced tagging systems.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

To set up Node Shop locally, follow these steps:

### Prerequisites

- Node.js
- PostgreSQL
- npm (Node Package Manager)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/haartmuhn/node-shop.git
cd node-shop
```

2. Install dependencies:

```bash
npm install
```

3. Set up PostgreSQL database:

- Ensure PostgreSQL is installed and running.
- Rename `.env.EXAMPLE` to `.env` and fill in your PostgreSQL credentials.

4. Run migrations and seed the database:

```bash
npm run seed
```

5. Start the server:

```bash
node server.js
```

## Usage

Once installed, the Node Shop backend can be accessed via API endpoints through tools like Insomnia or Postman. Here are a few examples of operations you can perform:

- **Retrieve all products:** GET /api/products
- **Create a new category:** POST /api/categories
- **Update a tag:** PUT /api/tags/{id}
- **Delete a product:** DELETE /api/products/{id}

Utilize these endpoints to manage the inventory, categories, tags, and product associations of your e-commerce platform. To gain a better understanding of how Node Shop operates, below is a demonstration of the application's functionality:

<div align="center">

[node-shop.webm](https://github.com/haartmuhn/node-shop/assets/164945655/f5db6c5a-019b-499e-b50b-a83cce52371b)

</div>

## Features

- **CRUD Operations:** Complete Create, Read, Update, and Delete operations for products, categories, and tags.
- **Data Validation:** Ensures that all user inputs are validated before database insertion.
- **Sequelize ORM:** Efficiently manage relationships between data models.
- **Secure Environment Variables:** Use .env files to securely configure database credentials.

## Contributing

Contributions to Node Shop are welcome! Here’s how you can contribute:

1. **Fork the repository** on GitHub.
2. **Create a branch** for your feature `git checkout -b new-feature`.
3. **Make changes** and commit them `git commit -m "Add some feature"`.
4. **Push to the branch** `git push origin new-feature`.
5. **Create a new Pull Request** against the main.

Please ensure your code adheres to the existing style of the project to make your changes easy to understand and integrate!

## Tests

To run tests, execute the following command:

```bash
npm test
```

(Note: You will need to write the tests based on the endpoints and operations your application performs, as this is not set up by default.)

## License

Node Shop is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this application according to the terms of the license.