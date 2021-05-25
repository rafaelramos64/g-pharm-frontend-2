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
    path: "/pharmacie-admin",
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
        path: "medicine-register",
        name: "MedicinesRegistration",
        component: MedicinesRegistration,
      },

      {
        path: "medicines-list",
        name: "ListMedicines",
        component: ListMedicines,
      },

      {
        path: "vendor-registration",
        name: "VendorsRegistration",
        component: () => import("@/components/VendorsRegistration")
      },

      {
        path: "sale-registration",
        name: "SalesRegistration",
        component: () => import("@/components/SalesRegistration")
      },

      {
        path: "list-sales",
        name: "SalesList",
        component: () => import("@/components/SalesList")
      },
      
      {
        path: "medicine/:id",
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
