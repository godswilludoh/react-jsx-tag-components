import { Route, Routes } from "react-router-dom";
import { a_details } from "./components/tags/a/a_details";
import { h1_details } from "./components/tags/h1/h1_details";
import { h2_details } from "./components/tags/h2/h2_details";
import { img_details } from "./components/tags/img/img_details";
import { Documenter } from "./pages/home/Documenter";

function App() {
  return (
    <Routes>
      <Route index element={<Documenter componentDetails={h1_details} />} />
      <Route
        path="/h1"
        element={<Documenter componentDetails={h1_details} />}
      />

      <Route
        path="/h2"
        element={<Documenter componentDetails={h2_details} />}
      />

      <Route path="/a" element={<Documenter componentDetails={a_details} />} />

      <Route path="/img" element={<Documenter componentDetails={img_details} />} />
    </Routes>
  );
}

export default App;
