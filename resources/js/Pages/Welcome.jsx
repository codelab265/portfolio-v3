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
import MainLayout from "@/Layouts/MainLayout";
export default function Welcome() {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <Quote />
            <Projects />
            <Skills />
            <About />
            <Testimonial />
            <Contact />
        </MainLayout>
    );
}
