import { createWebHistory, createRouter } from "vue-router";
import BookList from "./components/BookList"
import BookDetail from "./components/BookList/BookDetail"
import BookIndex from "./components/BookIndex"


const routes = [
    {
        path: "./",
        name: "BookIndex",
        component: BookIndex,
    },
    {
        path: "./books",
        name: "BookList",
        component: BookList,
        children: [
            {
                path: "./books/:bookId",
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