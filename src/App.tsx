import { Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { OneRepoPage } from "./pages/OneRepoPage/OneRepoPage";

import "./styles/index.scss";

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/repository/:id" element={<OneRepoPage />} />
  </Routes>
);

export default App;
