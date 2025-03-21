import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import PersonDetails from "../views/PersonDetails.vue";
import Report from "../views/Report.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/details/:id", component: PersonDetails, props: true },
  { path: "/report/:id", component: Report, props: true },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
