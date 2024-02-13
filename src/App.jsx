import "./App.css";
import {useEffect} from "react"
import Customer from "./components/features/Customer/Customer";
import Dashboard from "./components/features/Dashboard/Dashboard";
import Record from "./components/features/Record/Record";
import Report from "./components/features/Report/Report";
import Signin from "./components/features/Signin/Signin";
import Signup from "./components/features/Signup/Signup";
import PrivateRoute from "./components/utils/PrivateRoute";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";

function App() {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="app flex h-full flex-col lg:flex-row">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Customer />} />
            <Route path="/customer/:id" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/record" element={<Record />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
