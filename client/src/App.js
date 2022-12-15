import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import { publicRoutes } from "./routes";
import ScrollGoToTop from "./components/ScrollGoToTop";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
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
        </Routes>
        <ScrollGoToTop />
      </div>
    </Router>
  );
};

export default App;
