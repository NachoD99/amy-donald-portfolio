import {
  Box,
  Container,
  Typography,
  Grid,
  Chip
} from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box id="about" sx={{ py: 8, bgcolor: "white", width: "100vw" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, fontWeight: "bold", color: "#918450" }}
          >
            ABOUT ME
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Typography variant="h5" align="center" sx={{ mb: 3, color: "#BF1A29" }}>
                Hi there! I'm Amy 👋
              </Typography>

              <Typography variant="body1" align="center" sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.7, color: "#333" }}>
                I'm a passionate Community Manager and Media Marketing Specialist with over 5 years of experience
                helping brands build authentic connections with their audiences...
              </Typography>

              <Typography variant="body1" align="center" sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.7, color: "#333" }}>
                When I'm not crafting the perfect post or analyzing engagement metrics, you'll find me exploring new
                coffee shops, practicing yoga, or planning my next travel adventure...
              </Typography>
            </motion.div>

            {[
              {
                title: "Platforms",
                items: ["Meta", "TikTok", "YouTube", "Canva", "CapCut", "Microsoft 365", "Google Workspace"],
                sx: { bgcolor: "#F85E00", color: "#FFE683" }
              },
              {
                title: "Creative & Strategic",
                items: ["Social Analytics", "Brand Voice Development", "Visual Storytelling", "SEO", "Copywriting"],
                sx: { bgcolor: "#918450", color: "#F2DD86" }
              },
              {
                title: "Soft",
                items: ["Communication", "Resilience", "Teamwork", "Friendliness"],
                sx: { bgcolor: "#FFB563", color: "#916738" }
              }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 + idx * 0.2, duration: 0.6 }
                  }
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
                    {section.title}
                  </Typography>
                  <Box
                    justifyContent={"center"}
                    sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
                  >
                    {section.items.map((skill, i) => (
                      <motion.div
                        key={skill}
                        custom={i}
                        variants={chipVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <Chip
                          label={skill}
                          sx={{
                            bgcolor: section.sx.bgcolor,
                            color: section.sx.color,
                            fontWeight: "bold",
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
