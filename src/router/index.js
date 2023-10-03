import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Produce from '../views/Produce.vue'
import MealsByName from '../views/MealsByName.vue'


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/produce/:id",
    name: "recipeByLetter",
    component: Produce
  },
  {
    path: "/letter/:letter",
    name: "produce",
    component: Produce
  },
  {
    path: "/recipes/:name",
    name: "recipes",
    component: MealsByName,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
