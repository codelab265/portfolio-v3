import { useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Quote from "../Components/Quote";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import { Testimonial } from "@/Components/Testimonial";
import Social from "@/Components/Social";
export default function Welcome() {
    return (
        <div className="bg-[#282C33] text-gray-200 min-h-screen relative">
            <Head title="Home" />

            <Navbar />
            <Hero />
            <Quote />
            <Projects />
            <Skills />
            <About />
            <Testimonial />
            <Contact />
            <Footer />
            <Social />
        </div>
    );
}
