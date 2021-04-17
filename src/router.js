import { createWebHistory, createRouter } from "vue-router";
// import App from "./App"
import BookList from "./components/BookList"
import BookDetail from "./components/BookList/BookDetail"


const routes = [
    // {
    //     path: "/",
    //     name: "Home",
    //     component: App,
    // },
    {
        path: "/books",
        name: "BookList",
        component: BookList,
        children: [
            {
                path: "/books/:bookId",
                name: "BookDetail",
                component: BookDetail,
            },

        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;