"use client"
import { useState, useEffect } from "react"
import {
  Box,
  Fab,
} from "@mui/material"
import {
  KeyboardArrowUp,
} from "@mui/icons-material"

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

export default function PortfolioWebsite() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh", width: "100%" }}>
      
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Fab
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            bgcolor: "#e91e63",
            color:"#fff",
            "&:hover": { bgcolor: "#c2185b" },
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      )}
    </Box>
  )
}
