import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Market from "./../pages/Market";
import Create from "./../pages/Create";
import Contacts from "./../pages/Contacts";
import SellerProfile from "./../pages/SellerProfile";
import EditProfile from "./../pages/EditProfile";
import Wallets from "./../pages/Wallets";
import NftDetails from "./../pages/NftDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/seller-profile" element={<SellerProfile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/wallets" element={<Wallets />} />
      <Route path="/market/:id" element={<NftDetails />} />
    </Routes>
  );
};

export default Routers;
