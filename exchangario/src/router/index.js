

import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/Home.vue";
import AboutPage from "../pages/About-About.vue";
import FaqPage from "../pages/Faq-Faq.vue";
import LoginPage from "../pages/Login-Login.vue";
import RegisterPage from "../pages/Register-Register.vue";


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