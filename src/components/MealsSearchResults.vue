<template>
    <div>
        <ul>
            <li v-for="meal in meals" :key="meal.id">{{ meal.name }}</li>
        </ul>
    </div>
</template>

<script>
import meals from './SearchField.vue'
export default {
    props: {
        meals: []
    },
}
</script>

<style lang="scss" scoped></style>