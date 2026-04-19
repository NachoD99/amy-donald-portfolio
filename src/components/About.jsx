import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import portraitImg from "/images/potrait2.jpeg";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: "easeOut" } },
});

const skills = [
  {
    label: "Platforms",
    color: "#A41623",
    bg: "#fdf0f1",
    items: ["Meta", "TikTok", "YouTube", "Canva", "CapCut", "Microsoft 365", "Google Workspace"],
  },
  {
    label: "Creative & Strategic",
    color: "#F85E00",
    bg: "#fff3ed",
    items: ["Social Analytics", "Brand Voice", "Visual Storytelling", "SEO", "Copywriting"],
  },
  {
    label: "Soft Skills",
    color: "#918450",
    bg: "#f9f6f0",
    items: ["Communication", "Resilience", "Teamwork", "Friendliness"],
  },
];

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: "white", width: "100vw" }}>
      <Container maxWidth="lg">

        {/* Two-column CSS grid: left = portrait+stats, right = bio+skills */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" },
            gap: { xs: "48px", md: "72px" },
            alignItems: "start",
          }}
        >

          {/* ── LEFT: portrait + stats ── */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Rectangular editorial portrait */}
            <Box
              sx={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                aspectRatio: "4 / 5",
                maxWidth: { xs: 340, md: "100%" },
                mx: "auto",
                boxShadow: "0 24px 60px rgba(0,0,0,0.14)",
              }}
            >
              <Box
                component="img"
                src={portraitImg}
                alt="Amy Donald"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
              {/* Gradient overlay with name */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(100,10,18,0.88) 0%, transparent 60%)",
                  p: 3,
                  pt: 6,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1.2,
                  }}
                >
                  Amy Donald
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", mt: 0.5 }}>
                  Social Media & Content Specialist
                </Typography>
              </Box>
            </Box>

            {/* Stats row — CSS grid 2 columns */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                mt: 2,
                maxWidth: { xs: 340, md: "100%" },
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#A41623",
                  borderRadius: "18px",
                  p: { xs: 2.5, md: 3 },
                  textAlign: "center",
                  color: "white",
                }}
              >
                <Typography sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.4rem" }, lineHeight: 1, fontFamily: "'Lato', sans-serif" }}>
                  5+
                </Typography>
                <Typography sx={{ opacity: 0.8, fontSize: "0.78rem", mt: 0.5, fontWeight: 500 }}>
                  Years Experience
                </Typography>
              </Box>

              <Box
                sx={{
                  bgcolor: "#FFF1DA",
                  borderRadius: "18px",
                  p: { xs: 2.5, md: 3 },
                  textAlign: "center",
                }}
              >
                <Typography sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "2.4rem" }, lineHeight: 1, fontFamily: "'Lato', sans-serif", color: "#A41623" }}>
                  70+
                </Typography>
                <Typography sx={{ color: "#888", fontSize: "0.78rem", mt: 0.5, fontWeight: 500 }}>
                  Brand Activations
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* ── RIGHT: heading + bio + skills ── */}
          <Box>
            {/* Heading */}
            <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#918450", fontFamily: "'Playfair Display', serif", mb: 1 }}
              >
                ABOUT ME
              </Typography>
              <Box sx={{ width: 56, height: 3, bgcolor: "#A41623", borderRadius: 2, mb: 4 }} />
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeUp(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Typography
                variant="h6"
                sx={{ color: "#A41623", fontWeight: 600, mb: 2, fontFamily: "'Playfair Display', serif" }}
              >
                Hi there! I'm Amy 👋
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.9, mb: 2, fontSize: "1.02rem" }}>
                I'm a passionate Community Manager and Media Marketing Specialist with over 5 years of experience
                helping brands build authentic connections with their audiences.
              </Typography>
              <Typography sx={{ color: "#888", lineHeight: 1.9, mb: 5, fontSize: "0.98rem" }}>
                When I'm not crafting the perfect post or analyzing metrics, you'll find me exploring coffee shops,
                practicing yoga, or planning my next travel adventure.
              </Typography>
            </motion.div>

            {/* Skills */}
            {skills.map((group, idx) => (
              <motion.div
                key={group.label}
                variants={fadeUp(0.3 + idx * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: group.color, flexShrink: 0 }} />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "#999",
                      }}
                    >
                      {group.label}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, pl: "22px" }}>
                    {group.items.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        size="small"
                        sx={{
                          bgcolor: group.bg,
                          color: group.color,
                          fontWeight: 600,
                          fontSize: "0.78rem",
                          borderRadius: "8px",
                          border: `1px solid ${group.color}22`,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
