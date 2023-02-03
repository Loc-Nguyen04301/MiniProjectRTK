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
import ListProductByCategory from "@/views/ListProductByCategory";
import Checkout from "@/views/Checkout";
import DefaultLayout from "@/Layout/DefaultLayout";

// Private Route
import AdminHome from "@/views/AdminHome";
import AdminStatistic from "@/views/AdminStatistic";
import AdminAddProduct from "@/views/AdminAddProduct";
import AdminProducts from "@/views/AdminProducts";
import AdminProductDetail from "@/views/AdminProductDetail";
import NotDefaultLayout from "@/Layout/NotDefaultLayout";

const privateRoutes = [
  {
    path: "/dashboard",
    component: AdminHome,
    layout: NotDefaultLayout,
  },
  {
    path: "/dashboard/statistic",
    component: AdminStatistic,
    layout: NotDefaultLayout,
  },
  {
    path: "/dashboard/add-product",
    component: AdminAddProduct,
    layout: NotDefaultLayout,
  },
  {
    path: "/dashboard/products",
    component: AdminProducts,
    layout: NotDefaultLayout,
  },
  {
    path: "/dashboard/products/detail/:name",
    component: AdminProductDetail,
    layout: NotDefaultLayout,
  },
];

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
    path: "/gio-hang",
    component: ShoppingCart,
    layout: DefaultLayout,
  },
  {
    path: "/thanh-toan",
    component: Checkout,
    layout: DefaultLayout,
  },
  {
    path: "/search/:search",
    component: Search,
    layout: DefaultLayout,
  },
  {
    path: "/category/:category",
    component: ListProductByCategory,
    layout: DefaultLayout,
  },
  {
    path: "/404",
    component: NotFound,
    layout: DefaultLayout,
  },
];

export { publicRoutes, privateRoutes };
