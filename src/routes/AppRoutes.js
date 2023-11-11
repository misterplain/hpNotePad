import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
//screens
import DashboardScreen from "../screens/DashboardScreen";
import HolidaysScreen from "../screens/HolidaysScreen";
import LinksScreen from "../screens/LinksScreen";
import EbayScreen from "../screens/EbayScreen";
import ChatScreen from "../screens/ChatScreen";
import ContactScreen from "../screens/ContactScreen";
import TemplatesScreen from "../screens/TemplatesScreen";


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/holidays" element={<HolidaysScreen />} />
        <Route path="/links" element={<LinksScreen />} />
        <Route path="/ebay" element={<EbayScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/templates" element={<TemplatesScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
    </Routes>
  )
}

export default AppRoutes