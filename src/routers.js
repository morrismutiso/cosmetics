import Home from './views/HomePage.vue';
import Login from './components/LoginPage.vue';
import ProductsPage from './views/ProductsPage.vue';
import Services from './views/ServicePage.vue';
import ProdCat from './views/ProdCat.vue';
import UsersPage from './views/Users.vue';
import Customers from './views/Customers.vue';
import { createRouter, createWebHistory} from 'vue-router';
import AddProduct from './components/AddProduct.vue';
import AddExpense from './components/AddExpense.vue';
import AddProductCat from './components/AddProductCat.vue';
import AddService from './components/AddService.vue';
import Update from './components/UpdateData.vue';
import ExpenseList from './views/ExpenseList.vue';
import AboutPage from './components/AboutPage.vue';
import AuthorPage from './components/AuthorPage.vue';
import Pos from './views/POS-products.vue';
import PosServices from './views/POS-services.vue';
import SalesList from './views/SalesListProducts.vue';
import ServicesList from './views/SalesListServices.vue';
import ReportsPage from './views/ReportsPage.vue';

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
        name:"AddProduct",
        component:AddProduct,
        path:"/addproduct"
    },
    {
        name:"AddExpense",
        component:AddExpense,
        path:"/addexpense"
    },
    {
        name:"AddProductCat",
        component:AddProductCat,
        path:"/addproductcat"
    },
    {
        name:"AddService",
        component:AddService,
        path:"/addservice"
    },
    {
        name:"ReportsPage",
        component:ReportsPage,
        path:"/reports"
    },
    {
        name:"Update",
        component:Update,
        path:"/update/:id",
    },
    {
        name:"Pos",
        component:Pos,
        path:"/posproducts",
    },
    {
        name:"PosServices",
        component:PosServices,
        path:"/posservices",
    },
    {
        name:"SalesList",
        component:SalesList,
        path:"/saleslist",
    }, 
    {
        name:"ServicesList",
        component:ServicesList,
        path:"/servicesList",
    }, 
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;