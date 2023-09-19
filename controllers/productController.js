const db = require('../db');

// Return all product names from the database
async function getAllProducts() {
  const client = await db.connect(); // Get a connection from the pool

  try {
    const result = await client.query('SELECT * FROM products ORDER BY product_id ASC;');
    return result.rows;
  } finally {
    client.release(); // Release the connection back to the pool
  }
}

// Return a specific product via product_id
async function getProductById(product_id) {
  const client = await db.connect()

  try {
    const result = await client.query('SELECT * FROM products WHERE product_id = $1', [product_id]);
    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      return null;
    }
  } finally {
    client.release();
  }
}

// Return products within a price range
async function getProductsByPrice(minPrice, maxPrice) {
  const client = await db.connect();

  try {
    const result = await client.query(
      'SELECT * FROM products WHERE price >= $1 AND price <= $2',
      [minPrice, maxPrice]
    );

    return result.rows;
  } finally {
    client.release();
  }
}

// Return products based on category
async function getProductsByCategory(category) {
  const client = await db.connect()

  try {
    const result = await client.query('SELECT * FROM products WHERE category = $1', [category])
    return result.rows
  } finally {
    client.release();
  }
}

// Return products based on make
async function getProductsByMake(make) {
  const client = await db.connect()

  try {
    const result = await client.query('SELECT * FROM products WHERE make = $1', [make])
    return result.rows
  } finally {
    client.release();
  }
}


module.exports = {
  getAllProducts,
  getProductById,
  getProductsByPrice,
  getProductsByCategory,
  getProductsByMake
};
