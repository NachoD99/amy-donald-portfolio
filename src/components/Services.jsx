import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  TrendingUp,
  Create,
  Analytics,
  Campaign,
  PhoneAndroid
} from "@mui/icons-material";
import React from "react";
import { motion } from "framer-motion";


export default function Services() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const services = [
    {
      icon: Campaign,
      color: "#BF1A29",
      title: "Social Media Strategy",
      description: "Comprehensive social media planning and brand positioning across all platforms.",
    },
    {
      icon: PhoneAndroid,
      color: "#F85E00",
      title: "Content Creation",
      description: "Engaging visual content, copywriting, and multimedia production.",
    },
    {
      icon: Create,
      color: "#FFB563",
      title: "Copywriting",
      description: "Clear, compelling writing that builds community and drives results.",
    },
    {
      icon: Analytics,
      color: "#C0CF9E",
      title: "Analytics & Insights",
      description: "Data-driven analysis and reporting to optimize performance.",
    },
    {
      icon: TrendingUp,
      color: "#949230",
      title: "Growth Marketing",
      description: "Community building and engagement strategies that drive results.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };


  return (
    <Box id="services" sx={{ py: 8, bgcolor: "#FFF1DA", width: "100vw" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: "bold", color: "#918450" }}
        >
          SERVICES
        </Typography>
        <Timeline position="right">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <TimelineItem key={index} >
                {!isSmallScreen && (
                  <TimelineOppositeContent
                    sx={{ my: 4, color: service.color }}
                    align="right"
                    variant="body1"
                    fontWeight={700}
                    fontSize={20}
                  >
                    {service.title}
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      bgcolor: service.color,
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: `0 0 20px ${service.color}`,
                        transition: "0.3s ease",
                      },
                    }}
                  >
                    <service.icon sx={{ fontSize: 32, color: "#fff" }} />
                  </TimelineDot>
                  {index < services.length - 1 && (
                    <TimelineConnector
                      sx={{
                        minHeight: 100, // Más espacio vertical
                        backgroundColor: "#ccc",
                        width: 4,
                        mx: "auto",
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: 4,
                    px: 3,
                    transition: "all 0.3s ease",
                  }}
                >
                  {isSmallScreen && (
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, color: service.color }}>
                      {service.title}
                    </Typography>
                  )}
                  <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#444" }}>
                    {service.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </Timeline>

      </Container>
    </Box>
  );
}
