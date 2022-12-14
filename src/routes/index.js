// Public Routes
import Home from "@/views/Home";
import Contact from "@/views/Contact";
import AboutUs from "@/views/AboutUs";
import BankAccount from "@/views/BankAccount";
import DefaultLayout from "@/Layout/DefaultLayout";
const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "gioi-thieu",
    component: AboutUs,
    layout: DefaultLayout,
  },
  {
    path: "lien-he",
    component: Contact,
    layout: DefaultLayout,
  },
  {
    path: "tai-khoan-ngan-hang",
    component: BankAccount,
    layout: DefaultLayout,
  },
];

export { publicRoutes };
