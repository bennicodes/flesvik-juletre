import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      {/* <Route path="/kontakt" element={<Contact />} /> */}
      <Route path="/om-oss" element={<AboutUs />} />
      {/* <Route path="/tjenester" element={<Services />} /> */}
    </Route>
  )
);
