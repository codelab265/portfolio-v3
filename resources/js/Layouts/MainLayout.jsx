import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Social from "@/Components/Social";
import React from "react";

function MainLayout({ children }) {
    return (
        <div className="bg-[#282C33] text-gray-200 min-h-screen relative">
            <Navbar />
            {children}
            <Footer />
            <Social />
        </div>
    );
}

export default MainLayout;
