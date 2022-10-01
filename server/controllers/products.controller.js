const db = require("../db");

class ProductsControllers {
  async getproducts(req, res) {
    try {
      const products = await db.query(`SELECT * FROM products`);
      res.json(products.rows);
    } catch (error) {
      res.json("Server faled");
    }
  }

  async createProduct(req, res) {
    try {
      const { title, count, distance } = req.body;
      const newProduct = await db.query(
        `INSERT INTO products (title, count, distance) values ($1, $2, $3) RETURNING *`,
        [title, count, distance]
      );
      if (newProduct) {
        res.json(newProduct.rows[0]);
      }
    } catch (error) {
      res.json("Server faled");
    }
  }
}

module.exports = new ProductsControllers();
