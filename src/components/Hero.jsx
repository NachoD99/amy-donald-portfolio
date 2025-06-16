import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
} from "@mui/material";
import portraitImg from '/images/potrait.jpeg';

export default function Hero() {
    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <Box
      id="hero"
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        width: "100vw", // ⬅️ Asegura ancho total
        m: 0,
        p: 0,
        display: "flex",
        alignItems: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={4} alignItems="center" justifyContent={"center"} sx={{ px: { xs: 2, md: 8 } }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2,  mt: {xs: 8} }}>
                Amy Donald
              </Typography>
              <Typography variant="h4" sx={{ mb: 3, color: "#f8bbd9" }}>
                Community Manager & Media Marketing Specialist
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, fontStyle: "italic" }}>
                "Turning brands into communities, one post at a time ✨"
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection("portfolio")}
                  sx={{
                    bgcolor: "#e91e63",
                    "&:hover": { bgcolor: "#c2185b" },
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
                    px: 4,
                    "&:hover": { borderColor: "#f8bbd9", bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", mb: {xs: 8} }}>
              <Avatar
                src={portraitImg}
                sx={{
                  width: 300,
                  height: 300,
                  mx: "auto",
                  border: "5px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
