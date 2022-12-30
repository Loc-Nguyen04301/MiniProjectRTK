// Public Routes
import Home from "@/views/Home";
import Contact from "@/views/Contact";
import AboutUs from "@/views/AboutUs";
import BankAccount from "@/views/BankAccount";
import DetailProduct from "@/views/DetailProduct";
import Login from "@/views/Login";
import Register from "@/views/Register";
import ShoppingCart from "@/views/ShoppingCart";
import Search from "@/views/Search";
import NotFound from "@/views/NotFound";
import DefaultLayout from "@/Layout/DefaultLayout";
const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/gioi-thieu",
    component: AboutUs,
    layout: DefaultLayout,
  },
  {
    path: "/lien-he",
    component: Contact,
    layout: DefaultLayout,
  },
  {
    path: "/tai-khoan-ngan-hang",
    component: BankAccount,
    layout: DefaultLayout,
  },
  {
    path: "/detail/:name",
    component: DetailProduct,
    layout: DefaultLayout,
  },
  {
    path: "/dang-nhap",
    component: Login,
    layout: DefaultLayout,
  },
  {
    path: "/dang-ky",
    component: Register,
    layout: DefaultLayout,
  },
  {
    path: "/thanh-toan",
    component: ShoppingCart,
    layout: DefaultLayout,
  },
  {
    path: "/search/:search",
    component: Search,
    layout: DefaultLayout,
  },
  {
    path: "/404",
    component: NotFound,
    layout: DefaultLayout,
  },
];

export { publicRoutes };
