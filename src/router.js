import { createWebHistory, createRouter } from "vue-router";
import App from "./App"
import HelloWorld from "./components/HelloWorld.vue";
import BookDetail from "./components/BookDetail"

const routes = [
    {
        path: "/",
        name: "Home",
        component: App,
    },
    {
        path: "/about",
        name: "About",
        component: HelloWorld,
    },
    {
        path: "/books/:bookId",
        name: "BookDetail",
        component: BookDetail,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;