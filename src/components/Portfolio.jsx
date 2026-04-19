import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const items = [
  {
    title: "Digital Marketing Assistant",
    company: "ETZ Ltd",
    location: "Aberdeen, United Kingdom",
    period: "Oct 2025 – Present",
    category: "Corporate Communications",
    color: "#A41623",
    image: "/images/aberdeen.webp",
    bullets: [
      "Creating digital content for corporate communication campaigns across multiple channels",
      "Supporting the organisation of conferences and events in the energy sector",
      "Coordinating with multiple stakeholders to manage organisational communications",
      "Developing strategic content to strengthen the organisation's digital presence",
    ],
  },
  {
    title: "Beefeater Brand Ambassador",
    company: "Beefeater Gin",
    location: "Andalucía, Spain",
    period: "2025",
    category: "Influencer Marketing",
    color: "#F85E00",
    image: "/images/portfolio1.jpeg",
    bullets: [
      "Organised 70+ brand activations generating over 3,000 gross impressions per hour (GIH)",
      "Built and maintained relationships with 200+ bars and venues across Andalucía",
      "Delivered consistent, high-impact brand presence over 9 months of field activity",
    ],
  },
  {
    title: "Marketing Assistant",
    company: "Independent Brand",
    location: "Remote",
    period: "2024",
    category: "Social Media",
    color: "#918450",
    image: "/images/portfolio2.jpeg",
    bullets: [
      "Achieved organic reach of 95.3K accounts with over 146K total views",
      "Significantly boosted brand engagement across key target demographics",
      "Designed and executed a content calendar that grew the audience month-on-month",
    ],
  },
];

export default function Portfolio() {
  return (
    <Box id="portfolio" sx={{ py: { xs: 8, md: 12 }, bgcolor: "white", width: "100vw" }}>
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
            PORTFOLIO
          </Typography>
          <Typography align="center" sx={{ color: "#aaa", fontSize: "1rem", mb: 8 }}>
            Selected work & campaigns
          </Typography>
        </motion.div>

        {/* Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
            >
              <Box
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "260px 1fr" },
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 16px 50px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Left panel — image or colored gradient */}
                <Box
                  sx={{
                    position: "relative",
                    minHeight: { xs: 200, sm: "auto" },
                    overflow: "hidden",
                  }}
                >
                  {item.image && (
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  )}
                  {/* Color overlay — solid if no image, semi-transparent if image */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: item.image
                        ? `linear-gradient(to bottom, ${item.color}bb, ${item.color}f0)`
                        : `linear-gradient(145deg, ${item.color}, ${item.color}bb)`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        mb: 0.5,
                      }}
                    >
                      {item.period}
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        opacity: 0.85,
                      }}
                    >
                      {item.location}
                    </Typography>
                  </Box>
                </Box>

                {/* Right panel — content */}
                <Box sx={{ bgcolor: "white", p: { xs: 3, md: 4 } }}>
                  {/* Header row */}
                  <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 1, mb: 2 }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#1a1a1a",
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.15rem",
                          lineHeight: 1.3,
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "#888", fontSize: "0.88rem", fontWeight: 500 }}>
                        {item.company}
                      </Typography>
                    </Box>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        bgcolor: `${item.color}18`,
                        color: item.color,
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        letterSpacing: 0.5,
                        border: `1px solid ${item.color}33`,
                        borderRadius: "8px",
                      }}
                    />
                  </Box>

                  {/* Divider line */}
                  <Box sx={{ width: 40, height: 2, bgcolor: item.color, borderRadius: 1, mb: 2.5 }} />

                  {/* Bullet points */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                    {item.bullets.map((bullet, bi) => (
                      <Box key={bi} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: item.color,
                            mt: "8px",
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.75 }}>
                          {bullet}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

      </Container>
    </Box>
  );
}
