<template>
    <div>
        <div v-if="product">
        <h1>{{ product.product_name }}</h1>
        <div>
            <img :src="product.product_image" :alt="product.product_name"> 
            <p>Category: {{ product.product_category }}</p>
            <p>Category: {{ product.product_price }}</p>
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

</style>