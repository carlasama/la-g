<template>
  <div class="content">
    <div class="container">
      <h1 class="display-4">Sistema La G Fashion</h1>
      <h5>{{ msg }}</h5>
    </div>
    <div class="">
      <router-link to="/products-form">
        <button class="btn btn-outline-secondary mr-3">
          Cadastrar produto
        </button>
      </router-link>
      <router-link to="/customer-form">
        <button class="btn btn-outline-secondary">Cadastrar cliente</button>
      </router-link>
      <router-link to="/product-list">
        <button class="btn btn-outline-secondary">Ver lista de produtos</button>
      </router-link>
            <router-link to="/customer-list">
        <button class="btn btn-outline-secondary">Ver lista de clientes</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductsForm from "./ProductsForm.vue";

export default {
  name: "HelloWorld",
  components: {
    ProductsForm
  },
  data() {
    return {
      msg: "Cadastro de Produtos e Clientes"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
* {
  font-family: 'Lora', serif;
}

h1,
h2 {
  font-weight: normal;
}

.btn {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.mb-6 {
  margin-bottom: 3rem;
}

.content {
  line-height: 70px;
}
</style>
