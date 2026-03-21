import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="site-wrapper">
        <div className="app-card">
          <Navbar />
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Footer is now outside the wrapper entirely */}
      <Footer />
    </>
    
  );
};

export default MainLayout;