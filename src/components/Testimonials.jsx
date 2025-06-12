import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper
} from "@mui/material";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Farrah Frost",
      role: "Content Strategist @Beefeater | Freelancer",
      text: "Amazing work! Our social media presence has never been stronger.",
      avatar: "",
    },
    {
      name: "Mike Chen",
      role: "Founder, TechStart",
      text: "Professional, creative, and results-driven. Highly recommended!",
      avatar: "",
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "#f8f9fa", width: "100vw" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: "bold", color: "#333" }}
        >
          References
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={10} md={3} key={index} sx={{ display: "flex" }}>
              <Paper
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%", 
                  maxWidth: "400px"
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: "italic",
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                  <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="subtitle1" align="left" sx={{ fontWeight: "bold" }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" align="left" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
