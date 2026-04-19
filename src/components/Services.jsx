import { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const services = [
  {
    color: "#A41623",
    bg: "#fdf0f1",
    title: "Social Media Strategy",
    description:
      "Comprehensive social media planning and brand positioning across all platforms to grow your presence.",
  },
  {
    color: "#F85E00",
    bg: "#fff3ed",
    title: "Content Creation",
    description:
      "Engaging visual content, short-form video, and multimedia production tailored to your audience.",
  },
  {
    color: "#918450",
    bg: "#f9f6f0",
    title: "Copywriting",
    description:
      "Clear, compelling writing that builds community and drives measurable, real results.",
  },
  {
    color: "#3d7a56",
    bg: "#eef5f1",
    title: "Analytics & Insights",
    description:
      "Data-driven analysis and reporting to continuously monitor, understand, and optimize performance.",
  },
  {
    color: "#BF1A29",
    bg: "#fdf0f1",
    title: "Growth Marketing",
    description:
      "Community building and engagement strategies that scale your brand presence organically.",
  },
  {
    color: "#7b5ea7",
    bg: "#f4f0fa",
    title: "Community Management",
    description:
      "Day-to-day management of your online communities — responding, engaging, and nurturing your audience.",
  },
];

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

export default function Services() {
  const [[index, direction], setSlide] = useState([0, 0]);

  const paginate = (dir) => {
    setSlide(([prev]) => [(prev + dir + services.length) % services.length, dir]);
  };

  const s = services[index];

  return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F7F5F2", width: "100vw" }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold", color: "#918450", fontFamily: "'Playfair Display', serif", mb: 1 }}
          >
            SERVICES
          </Typography>
          <Typography align="center" sx={{ color: "#aaa", fontSize: "1rem", mb: 8 }}>
            What I bring to the table
          </Typography>
        </motion.div>

        {/* Carousel */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 3 } }}>

          {/* Prev arrow */}
          <IconButton
            onClick={() => paginate(-1)}
            sx={{
              flexShrink: 0,
              width: { xs: 40, md: 52 },
              height: { xs: 40, md: 52 },
              bgcolor: "white",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              color: "#918450",
              "&:hover": { bgcolor: "#918450", color: "white" },
              transition: "all 0.2s ease",
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          {/* Card area */}
          <Box sx={{ flex: 1, overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: "easeInOut" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    bgcolor: "white",
                    borderRadius: "22px",
                    p: { xs: 4, md: 6 },
                    overflow: "hidden",
                    borderLeft: `5px solid ${s.color}`,
                    boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* Ghost number */}
                  <Typography
                    aria-hidden
                    sx={{
                      position: "absolute",
                      bottom: -20,
                      right: 16,
                      fontSize: { xs: "8rem", md: "11rem" },
                      fontWeight: 900,
                      fontFamily: "'Lato', sans-serif",
                      color: s.bg,
                      lineHeight: 1,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  {/* Counter pill */}
                  <Typography
                    sx={{
                      display: "inline-block",
                      alignSelf: "flex-start",
                      color: s.color,
                      bgcolor: s.bg,
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      letterSpacing: 2,
                      fontFamily: "'Lato', sans-serif",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "6px",
                      mb: 2.5,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#1a1a1a",
                      fontFamily: "'Playfair Display', serif",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {s.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#777", lineHeight: 1.9, position: "relative", zIndex: 1, maxWidth: 560 }}
                  >
                    {s.description}
                  </Typography>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Next arrow */}
          <IconButton
            onClick={() => paginate(1)}
            sx={{
              flexShrink: 0,
              width: { xs: 40, md: 52 },
              height: { xs: 40, md: 52 },
              bgcolor: "white",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              color: "#918450",
              "&:hover": { bgcolor: "#918450", color: "white" },
              transition: "all 0.2s ease",
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Dot indicators */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
          {services.map((_, i) => (
            <Box
              key={i}
              onClick={() => setSlide([i, i > index ? 1 : -1])}
              sx={{
                width: i === index ? 28 : 8,
                height: 8,
                borderRadius: "99px",
                bgcolor: i === index ? "#918450" : "#ddd",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>

      </Container>
    </Box>
  );
}
