<template>
    <div>
<h1>Users Table</h1>
<br>
<table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
        <th>Email Address</th>
        <th>Profile Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody v-for="user in users" :key="user">
      <tr v-if="users">
         <td>{{ user.firstName }}</td>
         <td>{{ user.lastName }}</td>
         <td>{{ user.userAge }}</td>
         <td>{{ user.emailAdd }}</td>
         <td><img :src="user.userProfile" :alt="user.firstName" loading="lazy" class="img-fluid image"></td>
         <td><button class="edit">edit</button><button class="del">delete</button></td>
      </tr>
      <tr v-else>
      </tr>
    </tbody>
  </table>
<h1>Products Table</h1>
<AddProducts />
<table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>name</th>
        <th>category</th>
        <th>product image</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody v-for="product of products" :key="product">
      <tr v-if="product">
        <td>{{ product.product_id}}</td>
        <td>{{ product.product_name }}</td>
        <td>{{ product.product_category }}</td>
        <td><img :src="product.product_image" :alt="product.product_name" class="img-fluid image" loading="lazy"></td>
        <td>R {{ product.product_price }}</td>
        <td>
          <UpdateProducts :product="product"/>
              <!-- <button class="edit">edit</button> -->
              <button @click="deleteProduct(product.product_id)" class="del">
                delete
              </button>
            </td>
      </tr>
      <tr v-else>
      </tr>
    </tbody>
  </table>
    </div>
</template>
<script>
import axios from 'axios';
import AddProducts from '../components/AddProduct.vue';
import UpdateProducts from '../components/UpdateProducts.vue'
    export default {
      components:{
        AddProducts,
        UpdateProducts
      },
        computed: {
          users() {
      return this.$store.state.users;
    },
    product() {
      return this.$store.state.product;
    },
    products(){
      return this.$store.state.products
    },
    user(){
      return this.$store.state.user
    }
  },
    mounted() {
        this.$store.dispatch('fetchProducts')
        this.$store.dispatch('fetchUsers')
    },
    methods:{
    //   deleteProduct(product_id) {
        
    //   if (confirm("Do you want to delete this product?")) {
    //     this.$store.dispatch("deleteProduct", product_id);
    //   }
    // },
    async deleteProduct(product_id) {
      try {
        await axios.delete(`https://sixth-zp4e.onrender.com/products/${product_id}`);
        this.$store.dispatch("getProducts");
      } catch (err) {
        alert(err);
      }
    },
    }
    }
</script>
<style scoped>
body{
  overflow-x: hidden;
}
img{
   width: 7rem;
}
.del{
    width: 4rem;
    border-radius: 5px;
    background-color: rgb(255, 129, 129);
}
</style>
