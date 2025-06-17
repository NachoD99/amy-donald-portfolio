import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import portraitImg from "/images/potrait.jpg";
import VantaBackground from "./VantaBackground";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <Box
      id="hero"
      sx={{
        background: "transparent",
        minHeight: "100vh",
        width: "100vw",
        m: 0,
        p: 0,
        display: "flex",
        alignItems: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        zIndex: 1000,
      }}
    >
      <VantaBackground />
      <Container maxWidth={false} disableGutters sx={{ zIndex: 1000 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent={"center"}
          sx={{ px: { xs: 2, md: 8 } }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {md: "100px"},
                    mb: 2,
                    fontFamily: "Lato",
                    mt: { xs: 8 },
                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Amy Donald
                </Typography>
              </motion.div>

              <motion.div
                custom={1}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: "#A41623",
                    fontSize: {md: "50px"},
                    textShadow: "0 0 10pxrgb(255, 255, 255)",
                    animation: "pulseGlow 2s infinite",
                    "@keyframes pulseGlow": {
                      "0%, 100%": { textShadow: "0 0 10pxrgb(255, 255, 255)" },
                      "50%": { textShadow: "0 0 20px #ff33cc" },
                    },
                  }}
                >
                  Social Media and Content Specialist
                </Typography>
              </motion.div>

              <motion.div
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    fontSize: {md: "40px"},
                    fontStyle: "italic",
                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  "Driving brand storytelling and social growth through bold, <br></br>
                  culturally relevant content ✨"
                </Typography>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => scrollToSection("portfolio")}
                    sx={{
                      bgcolor: "#A41623",
                      textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
                      boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
                      "&:hover": { bgcolor: "#BF1A29" },
                      borderRadius: "25px",
                      px: 4,
                    }}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection("contact")}
                    sx={{
                      borderColor: "white",
                      color: "white",
                      borderRadius: "25px",
                      textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
                      boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
                      px: 4,
                      "&:hover": {
                        borderColor: "#f8bbd9",
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: { xs: 8 } }}>
                <Avatar
                  src={portraitImg}
                  sx={{
                    width: {xs: 300, md: 500},
                    height: {xs: 300, md: 500},
                    mx: "auto",
                    border: "5px solid rgba(255,255,255,0.3)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
