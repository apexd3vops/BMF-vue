import axiosCLient from "../axiosClient"

export async function searchMeals({ commit }, keyword) {
    try {
        const response = await axiosCLient.get(`/search.php?s=${keyword}`);
        commit('setSearchedMeals', response.data.meals);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
}