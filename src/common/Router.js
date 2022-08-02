import { Routes, Route } from "react-router-dom";
import { Links } from "./Links";
import Error404 from "../components/Error404";

export default function Router() {
  return (
    <Routes>
      {Links.map((route, i) => {
        return (
          <Route key={i} exact path={route.path} element={route.element} />
        );
      })}
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
