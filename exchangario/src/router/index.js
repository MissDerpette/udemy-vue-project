

import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/Home.vue";
import AboutPage from "../pages/About-Page.vue";
import FaqPage from "../pages/Faq-Page.vue";
import LoginPage from "../pages/Login-Page.vue";
import RegisterPage from "../pages/Register-Page.vue";


const routes =[
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage
    },
    {
        path: "/faq",
        name: "Faq",
        component: FaqPage
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;