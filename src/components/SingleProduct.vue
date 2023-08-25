<template>
    <div>
        <div v-if="product">
        <h1 class="text">{{ product.product_name }}</h1>
        <div>
            <img class="w-25" :src="product.product_image" :alt="product.product_name"> 
            <p class="text">Category: {{ product.product_category }}</p>
            <p class="text">Category: {{ product.product_price }}</p>
        </div>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>

<script>
import Spinner from '../components/SpinnerComp.vue'
export default{
    components: {
        Spinner
    },
    computed: {
        product() {
            return this.$store.state.selectedProduct;
        }
    }
}
</script>

<style scoped>
.text{
    color: white;
}
</style>