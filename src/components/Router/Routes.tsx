import { Route, Routes as DOMRoutes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import About from "../../pages/About";

const Routes = () => {
  return (
    <DOMRoutes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<About />} />
    </DOMRoutes>
  );
};

export default Routes;
