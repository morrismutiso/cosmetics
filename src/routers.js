import Home from './views/HomePage.vue';
import Login from './components/LoginPage.vue';
import ProductsPage from './views/ProductsPage.vue';
import Services from './views/ServicePage.vue';
import ProdCat from './views/ProdCat.vue';
import UsersPage from './views/Users.vue';
import Customers from './views/Customers.vue';
import { createRouter, createWebHistory} from 'vue-router';
import Add from './views/AddPage.vue';
import Update from './components/UpdateData.vue';
import RegProd from './components/AddProduct.vue';
import ExpenseList from './views/ExpenseList.vue';
import AboutPage from './components/AboutPage.vue';
import AuthorPage from './components/AuthorPage.vue';
import Pos from './views/POS.vue';
import SalesList from './views/SalesList.vue';

const routes = [
    {
        name:"AboutPage",
        component:AboutPage,
        path:"/about"
    },
    {
        name:"AuthorPage",
        component:AuthorPage,
        path:"/author"
    },
    {
        name:"UsersPage",
        component:UsersPage,
        path:"/users"
    },
    {
        name:"Login",
        component:Login,
        path:"/login"
    },
    {
        name:"Home",
        component:Home,
        path:"/"
    },
       {
        name:"ProductsPage",
        component:ProductsPage,
        path:"/products"
    },
    {
        name:"Services",
        component:Services,
        path:"/services"
    },
    {
        name:"ProdCat",
        component:ProdCat,
        path:"/prodcat"
    },
    {
        name:"ExpenseList",
        component:ExpenseList,
        path:"/expenses"
    },
    {
        name:"Customers",
        component:Customers,
        path:"/customers"
    },
    {
        name:"Add",
        component:Add,
        path:"/add"
    },
    {
        name:"RegProd",
        component:RegProd,
        path:"/new product"
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
    {
        name:"Pos",
        component:Pos,
        path:"/pos",
    },
    {
        name:"SalesList",
        component:SalesList,
        path:"/saleslist",
    }, 
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;