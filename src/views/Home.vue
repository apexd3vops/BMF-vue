<template>
    <div>
        <MainBanner />
        <ProductBanner />
        <TopFarms />
        <TopProduce />
    </div>
</template>

<script>
import axiosClient from '../axiosClient';
import LettersNav from '../components/LettersNav.vue';
import MainBanner from '../components/MainBanner.vue';
import SearchField from '../components/SearchField.vue';
import ProductBanner from '../components/ProductBanner.vue';
import { onMounted } from 'vue';
import TopFarms from '../components/TopFarms.vue';
import TopProduce from '../components/TopProduce.vue';
import MealsSearchResults from '../components/MealsSearchResults.vue';


export default {
    components: { ProductBanner, MainBanner, LettersNav, SearchField, TopFarms, TopProduce, MealsSearchResults },
    setup() {
        onMounted(() => {
            const response = axiosClient.get('/list.php?c=list')
                .then(response => {
                })
                .catch(error => {
                });
                console.log(response.data)
        });
        return {};
    }
}
</script>


<style scoped></style>