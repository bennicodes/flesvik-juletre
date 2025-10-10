import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      {/* <Route path="/kontakt" element={<Contact />} />
      <Route path="/om-oss" element={<About />} />
      <Route path="/tjenester" element={<Services />} /> */}
    </Route>
  )
);
