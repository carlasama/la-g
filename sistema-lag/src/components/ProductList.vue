<template>
  <div class="container">
    <h2>Lista de Produtos</h2>
    <table>
      <thead>
        <tr>
          <th>Nome do produto</th>
          <th>Código</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th>Ações</th>
          <!-- Nova coluna para os botões de exclusão -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>
            <b>{{ product.code }}</b>
          </td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button
              class="btn btn-outline-secondary"
              @click="showConfirmationModal(product._id)"
            >
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
            <p>Deseja realmente excluir o produto?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="hideConfirmationModal"
            >
              Cancelar
            </button>
            <button type="button" class="btn btn-danger" @click="deleteProduct">
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
  name: "ProductList",
  data() {
    return {
      products: [],
      selectedProductId: null,
      isConfirmationModalVisible: false
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    goToHomePage() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    showConfirmationModal(productId) {
      this.selectedProductId = productId;
      this.isConfirmationModalVisible = true;
    },
    hideConfirmationModal() {
      this.selectedProductId = null;
      this.isConfirmationModalVisible = false;
    },
    getProducts() {
      axios
        .get("http://localhost:3000/api/products")
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error("Erro ao obter os produtos:", error);
        });
    },
    deleteProduct() {
      const productId = this.selectedProductId;
      if (!productId) {
        return;
      }

      axios
        .delete(`http://localhost:3000/api/products/${productId}`)
        .then(response => {
          this.getProducts();
          this.hideConfirmationModal();
        })
        .catch(error => {
          console.error("Erro ao excluir o produto:", error);
        });
    }
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
