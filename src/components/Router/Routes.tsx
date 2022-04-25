import { Navigate, Route, Routes as DOMRoutes } from "react-router-dom";

import LandingPage from "../../pages/LandingPage";
import News from "../../pages/News";
import Concerts from "../../pages/Concerts";

import About from "../../pages/About";
import Photos from "../../pages/Photos";
import Videos from "../../pages/Videos";
import Contact from "../../pages/Contact";
import Products from "../../pages/Products";
import LoginPage from "../../pages/LoginPage";
import PublicRoutes from "./PublicRoutes";

//////////////Modals
import Modals from "../../pages/Modals(pruebas)";


const Routes = () => {
  return (
    <DOMRoutes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/news' element={<News />} />
      <Route path='/concerts' element={<Concerts />} />

      <Route path='/about' element={<About />} />

      <Route path='/photos' element={<Photos />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />

      {/* Not logged in Route */}
      <Route element={<PublicRoutes />}>
        <Route path='/dmd-login' element={<LoginPage />} />
      </Route>

      {/* Fallback */}
      <Route path='*' element={<Navigate to='/' />} />
      <Route path='/dmd-login' element={<LoginPage />} />



      <Route path='/modals' element={<Modals />} />



    </DOMRoutes>
  );
};

export default Routes;
