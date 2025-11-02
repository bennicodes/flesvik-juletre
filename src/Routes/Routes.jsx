import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";
import AboutUs from "../pages/AboutUs/AboutUs";
import Order from "../pages/Order/Order";
import OurTrees from "../pages/OurTrees/OurTrees";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path="/våre-trær" element={<OurTrees />} />
      <Route path="/om-oss" element={<AboutUs />} />
      <Route path="/bestill" element={<Order />} />
    </Route>
  )
);
