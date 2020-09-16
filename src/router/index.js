import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/login",
    redirect: "/"
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/password/reset",
    name: "reset-password",
    component: () =>
      import(
        /* webpackChunkName: "reset-password" */ "../views/ResetPassword.vue"
      )
  },
  {
    path: "/register/confirm",
    name: "register-confirm",
    component: () =>
      import(
        /* webpackChunkName: "register-confirm" */ "../views/RegisterConfirm.vue"
      )
  },
  {
    path: "/password/new",
    name: "new-password",
    component: () =>
      import(/* webpackChunkName: "new-password" */ "../views/NewPassword.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
  {
    path: "/check-registration-email",
    name: "check-registration-email",
    component: () =>
      import(
        /* webpackChunkName: "check-registration-email" */ "../views/CheckRegistrationEmail.vue"
      )
  },
  {
    path: "/check-reset-password-email",
    name: "check-reset-password-email",
    component: () =>
      import(
        /* webpackChunkName: "check-reset-password-email" */ "../views/CheckResetPasswordEmail.vue"
      )
  },
  {
    path: "/terms",
    name: "terms",
    component: () =>
      import(/* webpackChunkName: "terms" */ "../views/Terms.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// Authentication check
//
// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((record) => record.meta.auth)) {
//     if (!store.getters["Auth/authenticated"]) {
//       next({
//         path: "/",
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
