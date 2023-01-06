import React, { useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import { publicRoutes } from "./routes";
import ScrollGoToTop from "./features/ScrollGoToTop";
import { useDispatch } from "react-redux";
import { loginAccount } from "./redux/auth";
import { retrieveProducts } from "@/redux/product";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const dispatch = useDispatch();

  const fetchingData = useCallback(() => {
    dispatch(retrieveProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  // checkCurrentUser after refresh page
  const checkCurrentUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const option = {
        method: "get",
        url: "http://localhost:8080/api/v1/auth",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios(option);
      if (res.data.userName) {
        const userName = res.data.userName;
        dispatch(loginAccount({ token, userName }));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const View = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <View />
                  </Layout>
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <ScrollGoToTop />
      </div>
    </Router>
  );
};

export default App;
