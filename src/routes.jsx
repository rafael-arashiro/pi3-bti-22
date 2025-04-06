import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import PageMap from "./pages/PageMap";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pagemap" element={<PageMap />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
