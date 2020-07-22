import Vue from  "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter)
const Home = () => import("views/Home/Home")
const Category = () => import("views/Category/Category")
const ShoppingCart = () => import("views/ShoppingCart/Cart")
const Profile = () => import("views/Profile/Profile")

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/category",
    component:Category
  },
  {
    path: "/cart",
    component:ShoppingCart
  },
  {
    path: "/profile",
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
