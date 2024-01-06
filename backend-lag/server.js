const express = require("express");

const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3000;

const objectId = new ObjectId();

const uri = "mongodb://localhost:27017"; // URI de conexão do MongoDB
const dbName = "lagfashion"; // Nome do seu banco de dados

let db; // Variável para armazenar a referência ao banco de dados

// Função para conectar ao banco de dados
async function connectToDatabase() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    db = client.db(dbName);
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

connectToDatabase();

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  const productsCollection = db.collection("products");

  productsCollection
    .find()
    .toArray()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error("Erro ao obter os produtos:", error);
      res.status(500).send("Erro ao obter os produtos");
    });
});

app.post("/api/products", (req, res) => {
  const product = req.body;
  const productsCollection = db.collection("products");

  productsCollection
    .insertOne(product)
    .then(() => {
      console.log("Produto cadastrado com sucesso:", product);
      res.send("Produto cadastrado com sucesso");
    })
    .catch((error) => {
      console.error("Erro ao cadastrar o produto:", error);
      res.status(500).send("Erro ao cadastrar o produto");
    });
});

app.delete("/api/products/:productId", (req, res) => {
  const productId = req.params.productId;
  const productsCollection = db.collection("products");

  productsCollection
    .deleteOne({ _id: new ObjectId(productId) }) // Usando 'new' antes de ObjectId
    .then(() => {
      console.log("Produto excluído com sucesso");
      res.send("Produto excluído com sucesso");
    })
    .catch((error) => {
      console.error("Erro ao excluir o produto:", error);
      res.status(500).send("Erro ao excluir o produto");
    });
});

// CLIENTE //

app.get("/api/customers", (req, res) => {
  const customersCollection = db.collection("customers");

  customersCollection
    .find()
    .toArray()
    .then((customers) => {
      res.json(customers);
    })
    .catch((error) => {
      console.error("Erro ao obter os clientes:", error);
      res.status(500).send("Erro ao obter os clientes");
    });
});

app.post("/api/customers", (req, res) => {
  const customer = req.body;
  const customersCollection = db.collection("customers");

  customersCollection
    .insertOne(customer)
    .then(() => {
      console.log("Cliente cadastrado com sucesso:", customer);
      res.send("Cliente cadastrado com sucesso");
    })
    .catch((error) => {
      console.error("Erro ao cadastrar o cliente:", error);
      res.status(500).send("Erro ao cadastrar o cliente");
    });
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
