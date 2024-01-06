<template>
  <div class="container">
    <h2>Lista de Clientes</h2>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Endereço</th>
          <th>Bairro</th>
          <th>Número</th>
          <th>CEP</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer._id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.cpf }}</td>
          <td>{{ customer.endereco }}</td>
          <td>{{ customer.bairro }}</td>
          <td>{{ customer.numero }}</td>
          <td>{{ customer.cep }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <button class="btn btn-outline-secondary">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-outline-secondary mt-2" @click="goToHomePage">
      Voltar
    </button>

    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      :class="{ 'd-block': isConfirmationModalVisible }"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirmação de exclusão</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="hideConfirmationModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Deseja realmente excluir o cliente?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="hideConfirmationModal"
            >
              Cancelar
            </button>
            <button type="button" class="btn btn-danger">
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CustomerList",
  data() {
    return {
      customers: [],
      selectedCustomerId: null,
      isConfirmationModalVisible: false
    };
  },
  mounted() {
    this.getCustomers();
  },
  methods: {
    goToHomePage() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    showConfirmationModal(customerId) {
      this.selectedCustomerId = customerId;
      this.isConfirmationModalVisible = true;
    },
    hideConfirmationModal() {
      this.selectedCustomerId = null;
      this.isConfirmationModalVisible = false;
    },
    getCustomers() {
      axios
        .get("http://localhost:3000/api/customers")
        .then(response => {
          this.customers = response.data;
        })
        .catch(error => {
          console.error("Erro ao obter os clientes:", error);
        });
    }
    // deleteCustomer() {
    //   const customerId = this.selectedCustomerId;
    //   if (!customerId) {
    //     return;
    //   }

    //   axios
    //     .delete(`http://localhost:3000/api/customers/${customerId}`)
    //     .then(response => {
    //       this.getCustomers();
    //       this.hideConfirmationModal();
    //     })
    //     .catch(error => {
    //       console.error("Erro ao excluir o cliente:", error);
    //     });
    // }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
  text-align-last: center;
}

th {
  border: 1px solid ghostwhite;
}
</style>
