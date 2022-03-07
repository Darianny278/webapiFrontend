import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin/Admin";
import Media from "../views/Admin/Media";
import Category from "../views/Admin/Category";
import TypeMedia from "../views/Admin/TypeMedia";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
    redirect: "/Admin/Contenido",
    children: [
      {
        path: "/Admin/Contenido",
        name: "Media",
        component: Media,
      },
      {
        path: "/Admin/Genero",
        name: "Category",
        component: Category,
      },
      {
        path: "/Admin/TipoMedia",
        name: "TypeMedia",
        component: TypeMedia,
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
