import { Route, Routes as DOMRoutes } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";

const Routes = () => {
  return (
    <DOMRoutes>
      <Route path='/' element={<LandingPage />} />
    </DOMRoutes>
  );
};

export default Routes;
