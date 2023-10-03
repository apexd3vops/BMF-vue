<template>
    <div>
        <MainBanner />
        <ProductBanner />
        <LettersNav />
        <TopFarms />
        <TopProduce />
        <pre>{{ produce }}</pre>
    </div>
</template>

<script>
import axiosClient from '../axiosClient';
import LettersNav from '../components/LettersNav.vue';
import MainBanner from '../components/MainBanner.vue';
import ProductBanner from '../components/ProductBanner.vue';
import { computed, onMounted } from 'vue';
import TopFarms from '../components/TopFarms.vue';
import TopProduce from '../components/TopProduce.vue';


export default {
    components: { ProductBanner, MainBanner, LettersNav, TopFarms, TopProduce },
    setup() {
        onMounted(() => {
            // Code to run after the component is mounted
            const response = axiosClient.get('list.php?c=list')
                .then(response => {
                    // Handle the response or perform any necessary actions
                })
                .catch(error => {
                    // Handle errors if the request fails
                });
                console.log(response.data)
        });

        // You can also define computed properties or other logic here

        return {};
    }
}
</script>


<style scoped></style>