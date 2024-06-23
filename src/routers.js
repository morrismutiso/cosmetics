import Home from './views/HomePage.vue';
import Products from './views/ProductsPage.vue';
import { createRouter, createWebHistory} from 'vue-router';
import Add from './views/AddPage.vue';
import Update from './components/UpdateData.vue';

const routes = [
    {
        name:"Home",
        component:Home,
        path:"/home"
    },
       {
        name:"Products",
        component:Products,
        path:"/products"
    },
    {
        name:"Add",
        component:Add,
        path:"/add"
    },
    {
        name:"Reports",
        component:Add,
        path:"/reports"
    },
    {
        name:"Expenses",
        component:Add,
        path:"/expenses"
    },
    {
        name:"Update",
        component:Update,
        path:"/update/:id",
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;