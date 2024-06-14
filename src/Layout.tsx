import Navbar from "./components/navbar/Navbar";
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <div className=" bg-[#2B2B2B] overflow-x-hidden">
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default Layout;
