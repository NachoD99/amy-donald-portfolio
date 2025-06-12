import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";
import {
  TrendingUp,
  Create,
  Analytics,
  Campaign,
} from "@mui/icons-material";

export default function Services() {
  const services = [
    {
      icon: <Campaign sx={{ fontSize: 40, color: "#e91e63" }} />,
      title: "Social Media Strategy",
      description: "Comprehensive social media planning and brand positioning across all platforms.",
    },
    {
      icon: <Create sx={{ fontSize: 40, color: "#9c27b0" }} />,
      title: "Content Creation",
      description: "Engaging visual content, copywriting, and multimedia production.",
    },
    {
      icon: <Analytics sx={{ fontSize: 40, color: "#673ab7" }} />,
      title: "Analytics & Insights",
      description: "Data-driven analysis and reporting to optimize performance.",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "#3f51b5" }} />,
      title: "Growth Marketing",
      description: "Community building and engagement strategies that drive results.",
    },
  ];

  return (
    <Box id="services" sx={{ py: 8, bgcolor: "#f8f9fa", width: "100vw" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: "bold", color: "#333" }}
        >
          Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
