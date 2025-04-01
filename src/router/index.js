import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RulesView from "../views/RulesView.vue";
import CheatSheetView from "@/views/CheatSheetView.vue";
import EditorComponent from "../components/EditorComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/rules",
      name: "rules",
      component: RulesView,
    },
    {
        path: "/cheat-sheets",
        name: "cheat-sheets",
        component: CheatSheetView,
    },
    {
        path: "/editor",
        name: "editor",
        component: EditorComponent,
    }
  ],
});

export default router;
