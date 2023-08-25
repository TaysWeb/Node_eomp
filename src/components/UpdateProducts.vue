<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="edit"
        @click="openEditModal(product.product_id)"
        data-bs-toggle="modal"
        :data-bs-target="'#eexampleModal' + product.product_id"
      >
        edit
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        :id="'eexampleModal' + product.product_id"
        tabindex="-1"
        :aria-labelledby="'eexampleModalLabel' + product.product_id"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="eexampleModalLabel">
                Update Products
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                placeholder="product Name"
                type="text"
                v-model="editingProduct.product_name"
                required
              />
              <input
                placeholder="amount"
                type="number"
                v-model="editingProduct.product_price"
                required
              />
              <input
                placeholder="category"
                type="text"
                v-model="editingProduct.product_category"
                required
              />
              <input
                placeholder="product image"
                type="text"
                v-model="editingProduct.product_image"
                required
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updateProduct(product.product_id)"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["product"],
    data() {
      return {
          editingProduct:{
            product_name: "",
            product_price: 0,
            product_category: "",
            product_image: "",
          },
        };
    },
    computed: {
      thisProduct() {
        return this.$store.state.product;
      },
    },
    methods: {
      openEditModal(product_id) {
        this.editingProductID = product_id;
        this.editingProduct = {
          ...this.$store.state.products.find(
            (product) => product.product_id === product_id
          ),
        };
      },
      updateProduct(product_id) {
        this.$store.dispatch("updateProduct", {
            product_id: product_id,
            ...this.editingProduct,
          })
          console.log(this.editingProduct)
      },
    },
  };
  </script>
  
  <style scoped>
  .edit{
    margin-right: 5px;
    width: 3rem;
    border-radius: 5px;
    background-color: rgb(210, 205, 205);
}
  </style>