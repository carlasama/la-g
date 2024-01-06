<template>
  <div>
    <h2>Cadastro de Cliente</h2>
    <form
      class="container needs-validation"
      @submit.prevent="submitForm"
      novalidate
    >
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="customer-name">Nome da Cliente:</label>
            <input
              type="text"
              id="customer-name"
              v-model="customerName"
              class="form-control"
              required
            />
            <div class="invalid-feedback">Por favor digite o CPF.</div>
          </div>
          <div class="form-group">
            <label for="email">CPF:</label>
            <input type="cpf" id="cpf" v-model="cpf" class="form-control" />
            <div class="invalid-feedback">Por favor digite um CPF válido.</div>
          </div>
          <div class="form-group">
            <label for="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              v-model="endereco"
              class="form-control"
            />
            <!-- <div class="invalid-feedback">Por favor digite um e-mail válido.</div> -->
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="endereco">Bairro:</label>
            <input
              type="text"
              id="bairro"
              v-model="bairro"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="numero">Número:</label>
            <input
              type="number"
              id="numero"
              v-model="numero"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="numero">CEP:</label>
            <input type="number" id="cep" v-model="cep" class="form-control" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="phone">Telefone:</label>
            <input
              type="text"
              id="phone"
              v-model="phone"
              class="form-control"
              required
            />
            <div class="invalid-feedback">
              Por favor digite um telefone válido.
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-outline-secondary">
        Adicionar cliente
      </button>
      <button class="btn btn-outline-secondary" @click="goToHomePage">
        Voltar
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      customerName: "",
      cpf: 0,
      phone: "",
      endereco: "",
      bairro: "",
      cep: 0,
      numero: 0
    };
  },
  methods: {
    goToHomePage() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    submitForm() {
      const customerData = {
        name: this.customerName,
        cpf: this.cpf,
        phone: this.phone,
        endereco: this.endereco,
        bairro: this.bairro,
        cep: this.cep,
        numero: this.numero
      };

      axios
        .post("http://localhost:3000/api/customers", customerData)
        .then(response => {
          console.log("Cliente cadastrado com sucesso:", response.data);
        })
        .catch(error => {
          console.error("Erro ao cadastrar cliente:", error);
        });
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
.invalid-feedback {
  display: none;
  color: red;
}
.invalid-feedback.is-visible {
  display: block;
}
</style>
