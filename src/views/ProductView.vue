<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2 text-white">Menu</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
            <div class="col" v-for="product of products" :key="product">
                <div class="card" style="width: 18rem;">
                    <img :src="product.product_image" class="card-img-top img-fluid" :alt="product.product_name">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.product_name }} <br> R {{ product.product_price }}</h5>
                      <p class="card-text"><span>Category: {{ product.product_category }}</span></p>
                      <button @click="singleProduct(product.product_id)">view more</button>
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        },
        methods: {
            singleProduct(product_id) {
                const chosenProd = this.products.find (
                    (product) => product.product_id === product_id
                );
                this.$store.commit("setSelectedProduct", chosenProd);
                this.$router.push({name:"SingleProduct", params: {product_id: product_id}})
            }
        }
    }
</script>
<style scoped>
.card-img-top{
    width: auto;
    aspect-ratio: 5/4;
    object-fit: contain;
    display: block;
  margin: 0 auto;
    
}
.card{
    margin-bottom:1rem ;
}
</style>
