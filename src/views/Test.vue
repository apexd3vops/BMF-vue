<template>
    <div>
        <SearchField />
        <div>
            <ul>
                <li v-for="meal in meals" :key="meal.id">{{ meal.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import SearchField from '../components/SearchField.vue';

export default {
    components: { SearchField },
    props: {
        meals: {
            type: Array, // You can specify the appropriate type based on your data structure
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped></style>