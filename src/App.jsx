import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Instagram from "./pages/Instagram";
import SinglePost from "./pages/SinglePost";
import ListComponent from "./components/ListComponent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/list" element={<ListComponent/>} />

          <Route path="/" element={<Instagram />} />
          {/* <Route path="/single-post/:id" element={<SinglePost />} /> */}
          <Route path="/single-post" element={<SinglePost />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
