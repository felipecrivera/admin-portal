import "./App.css";
import Dashboard from "./components/features/Dashboard/Dashboard";
import Record from "./components/features/Record/Record";
import Report from "./components/features/Report/Report";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app flex h-full flex-col lg:flex-row">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
