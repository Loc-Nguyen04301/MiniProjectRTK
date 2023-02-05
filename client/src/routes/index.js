// Public Routes
import Home from "@/views/Public/Home";
import Contact from "@/views/Public/Contact";
import AboutUs from "@/views/Public/AboutUs";
import BankAccount from "@/views/Public/BankAccount";
import DetailProduct from "@/views/Public/DetailProduct";
import Login from "@/views/Public/Login";
import Register from "@/views/Public/Register";
import ShoppingCart from "@/views/Public/ShoppingCart";
import Search from "@/views/Public/Search";
import NotFound from "@/views/Public/NotFound";
import ListProductByCategory from "@/views/Public/ListProductByCategory";
import Checkout from "@/views/Public/Checkout";
import DefaultLayout from "@/Layout/DefaultLayout";

// Private Route
import AdminHome from "@/views/Private/AdminHome";
import AdminStatistic from "@/views/Private/AdminStatistic";
import AdminAddProduct from "@/views/Private/AdminAddProduct";
import AdminProducts from "@/views/Private/AdminProducts";
import AdminProductDetail from "@/views/Private/AdminProductDetail";
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
