<template>
  <div class="container">
    <h2>Cadastro de Produtos</h2>
    <form class="container w-50" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="exampleInputEmail1">Nome do Produto</label>
        <input
          type="text"
          class="form-control"
          id="product-name"
          v-model="productName"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Código</label>
        <input
          type="text"
          class="form-control"
          id="code"
          v-model="code"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Quantidade</label>
        <input
          type="number"
          class="form-control"
          id="quantity"
          v-model.number="quantity"
          required
        />
      </div>
      <div class="form-group">
        <label class="form-label mt-2" for="typeNumber">Valor</label>
        <input
          step="0.01"
          value="15.25"
          type="number"
          id="price"
          v-model.number="price"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-outline-secondary mt-2">
        Adicionar produto
      </button>
      <button class="btn btn-outline-secondary mt-2" @click="goToHomePage">
        Voltar
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
    axios
  },
  data() {
    return {
      productName: "",
      quantity: 0,
      price: 0,
      code: ""
    };
  },
  methods: {
    goToHomePage() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    submitForm() {
      const productData = {
        name: this.productName,
        quantity: this.quantity,
        price: this.price,
        code: this.code
      };

      axios
        .post("http://localhost:3000/api/products", productData)
        .then(response => {
          console.log("Produto cadastrado com sucesso:", response.data);
        })
        .catch(error => {
          console.error("Erro ao cadastrar o produto:", error);
        });
    }
  }
};
</script>
