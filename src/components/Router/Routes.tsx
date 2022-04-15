import { Route, Routes as DOMRoutes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import About from "../../pages/About";
import News from "../../pages/News";

const Routes = () => {
  return (
    <DOMRoutes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/news' element={<News />} />
    </DOMRoutes>
  );
};

export default Routes;
