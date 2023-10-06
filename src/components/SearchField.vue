<template>
  <div class="flex rounded-full items-center bg-green/25 border-darkGreen border-2 px-4">
    <div class="search-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </div>
    <input type="text" v-model="keyword" @input="searchMeals" placeholder="Search"
      class="rounded-full w-full max-h-10 bg-transparent text-blue :focus border-hidden" />
  </div>
  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>

<script>
import { ref } from 'vue';
import { computed } from '@vue/reactivity'
import store from '../store';

export default {
  setup() {
    const keyword = ref('');
    const meals = computed(() => store.state.searchedMeals)

    const searchMeals = () => {
      store.dispatch('searchMeals', keyword.value)
    };
    return {
      keyword,
      searchMeals,
      meals
    };
  },
};
</script>

<style lang="" scoped>

</style>


