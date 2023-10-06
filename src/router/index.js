import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Produce from "../views/Produce.vue";
import MealsByName from "../views/MealsByName.vue";
import User from "../views/User.vue";
import Chat from "../views/Chat.vue";
import MealsByLetters from "../views/MealsByLetters.vue";
import DefaultLayout from "../components/layout/DefaultLayout.vue";
import ProduceLayout from "../components/layout/ProduceLayout.vue";
import RecipesLayout from "../components/layout/RecipesLayout.vue";
import Test from "../views/Test.vue";



const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
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
        path: "/produce/:id?",
        name: "produce",
        component: Produce,
      },
      {
        path: "/letter/:letter?",
        name: "mealsByLetters",
        component: MealsByLetters,
      },
      {
        path: "/recipes/:name?",
        name: "mealsByName",
        component: MealsByName,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/chat",
        name: "chat",
        component: Chat,
      },
      {
        path: "/test",
        name: "test",
        component: Test,
      },
    ],
  },
  {
    path: "/recipes",
    component: RecipesLayout,
    children: [ 
      // TODO: Add Children Route for all recipe related routes and link default layout to RecipiesLayout
    ]
  },
  {
    path: "/produce",
    component: ProduceLayout,
    children: [ 
      // TODO: Add Children Route for all Produce related routes and link default layout to ProduceLayout
      // Create sub layouts for farm and animal produce
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
