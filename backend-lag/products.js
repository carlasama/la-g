const { getDatabase } = require('./db');

// Função para obter a coleção de produtos
function getProductsCollection() {
  const db = getDatabase();
  return db.collection('products');
}

// Exemplo de função para obter todos os produtos
async function getAllProducts() {
  const productsCollection = getProductsCollection();
  const product = await productsCollection.find().toArray();
  return product;
}

// Exemplo de função para cadastrar um novo produto
async function addProduct(product) {
  const productsCollection = getProductsCollection();
  await productsCollection.insertOne(product);
}

module.exports = {
  getAllProducts,
  addProduct
};