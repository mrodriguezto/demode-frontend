import { Navigate, Route, Routes as DOMRoutes } from "react-router-dom";

import LandingPage from "../../pages/LandingPage";
import NewsPage from "../../pages/NewsPage";
import EventsPage from "../../pages/EventsPage";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import ProductsPage from "../../pages/ProductsPage";
import LoginPage from "../../pages/LoginPage";
import PublicRoutes from "./PublicRoutes";

export const Routes = () => {
  return (
    <DOMRoutes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/events' element={<EventsPage />} />

      <Route path='/about' element={<AboutPage />} />

      <Route path='/products' element={<ProductsPage />} />
      <Route path='/contact' element={<ContactPage />} />

      {/* Not logged in Route */}
      <Route element={<PublicRoutes />}>
        <Route path='/dmd-login' element={<LoginPage />} />
      </Route>

      {/* Fallback */}
      <Route path='*' element={<Navigate to='/' />} />
      <Route path='/dmd-login' element={<LoginPage />} />
    </DOMRoutes>
  );
};
