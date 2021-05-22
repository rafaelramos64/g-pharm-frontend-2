import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import Admin from "../views/Admin.vue";
import Default from "../templates/Default";

import ListMedicines from "../components/ListMedicines";
import MedicinesRegistration from "../components/MedicinesRegistration";

Vue.use(VueRouter);

const routes = [
  {
    path: "/default",
    name: "Default",
    component: Default,
    redirect: "Home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "list",
        name: "ListMedicines",
        component: ListMedicines,
      },
      {
        path: "form",
        name: "MedicinesRegistration",
        component: MedicinesRegistration,
      },
      {
        path: "form/:id",
        name: "MedicinesRegistrationEdit",
        component: MedicinesRegistration,
      },
      {
        path: "/admin",
        name: "Admin",
        component: Admin,
      },
      
    ]
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },

  /* {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  }, */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
