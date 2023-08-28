import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-268px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
