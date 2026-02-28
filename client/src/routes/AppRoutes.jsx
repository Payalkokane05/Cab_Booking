

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Landing from "../pages/Landing";

import LoginSelector from "../pages/LoginSelector";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminRegister from "../pages/admin/AdminRegister";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserHome from "../pages/UserHome";
// import BookCab from "../pages/BookCab";
import Cabs from "../pages/Cabs";
import MyBookings from "../pages/MyBookings";
import BookRide from "../pages/BookRide";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminUsers from "../pages/admin/AdminUsers";
import AdminAddCab from "../pages/admin/AdminAddCab";
import AdminCabs from "../pages/admin/AdminCabs";
import AdminEditCab from "../pages/admin/AdminEditCab";
import AdminBookings from "../pages/admin/AdminBookings";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Landing />} />   

        <Route path="/select-login" element={<LoginSelector />} />
<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/register" element={<AdminRegister />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<UserHome />} />
         <Route path="/cabs" element={<Cabs />} />
        <Route path="/book/:id" element={<BookRide />} />
       <Route path="/mybookings" element={<MyBookings />} />

       <Route path="/admin/dashboard" element={<AdminDashboard />} />
       <Route path="/admin/users" element={<AdminUsers />} />
       <Route path="/admin/addcab" element={<AdminAddCab />} />
       <Route path="/admin/cabs" element={<AdminCabs />} />
       <Route path="/admin/edit/:id" element={<AdminEditCab />} />
       <Route path="/admin/bookings" element={<AdminBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;