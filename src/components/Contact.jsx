import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    TextField,
    IconButton,
    Paper,
    Divider,
} from "@mui/material";
import {
    Instagram,
    LinkedIn,
    Twitter,
    Email,
} from "@mui/icons-material";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("There was an error sending your message.");
  }
};

    return (
        <Box id="contact" sx={{ py: 10, bgcolor: "white", width: "100vw" }}>
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ mb: 6, fontWeight: "bold", color: "#333" }}
                >
                    Let's Work Together!
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, sm: 5 },
                        borderRadius: "20px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                >
                    <Grid container spacing={4} flexDirection={"column"}>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                helperText="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                sx={{
                                    borderRadius: "20px",
                                    "& label.Mui-focused": {
                                        color: "#e91e63",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#ccc",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#e91e63",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#e91e63",
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                placeholder="you@example.com"
                                type="email"
                                helperText="We'll never share your email."
                                value={formData.email}
                                onChange={handleChange}
                                sx={{
                                    borderRadius: "20px",
                                    "& label.Mui-focused": {
                                        color: "#e91e63",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#ccc",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#e91e63",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#e91e63",
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                fullWidth
                                label="Tell me about your project"
                                multiline
                                rows={5}
                                placeholder="What are you looking to create or improve?"
                                value={formData.message}
                                onChange={handleChange}
                                variant="outlined"
                                sx={{
                                    borderRadius: "20px",
                                    "& label.Mui-focused": {
                                        color: "#e91e63",
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: "#ccc",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: "#e91e63",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#e91e63",
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                onClick={handleSubmit}
                                sx={{
                                    bgcolor: "#e91e63",
                                    borderRadius: "30px",
                                    fontSize: "1.1rem",
                                    fontWeight: "bold",
                                    py: 1.5,
                                    textTransform: "none",
                                    transition: "0.3s ease",
                                    "&:hover": {
                                        bgcolor: "#c2185b",
                                        transform: "scale(1.02)",
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>

                <Divider sx={{ my: 6 }} />

                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" sx={{ mb: 3, color: "#555" }}>
                        Or connect with me on social media
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                        <IconButton
                            href="https://instagram.com"
                            target="_blank"
                            sx={{
                                bgcolor: "#e91e63",
                                color: "white",
                                "&:hover": { bgcolor: "#c2185b", color: "#fff" },
                            }}
                        >
                            <Instagram />
                        </IconButton>
                        <IconButton
                            href="https://linkedin.com"
                            target="https://www.linkedin.com/in/amydonald145/"
                            sx={{
                                bgcolor: "#0077b5",
                                color: "white",
                                "&:hover": { bgcolor: "#005885", color: "#fff" },
                            }}
                        >
                            <LinkedIn />
                        </IconButton>
                        {/* <IconButton
                            href="https://twitter.com"
                            target="_blank"
                            sx={{
                                bgcolor: "#1da1f2",
                                color: "white",
                                "&:hover": { bgcolor: "#0d8bd9", color: "#fff" },
                            }}
                        >
                            <Twitter />
                        </IconButton> */}
                        <IconButton
                            href="mailto:amydonald@gmail.com"
                            sx={{
                                bgcolor: "#ea4335",
                                color: "white",
                                "&:hover": { bgcolor: "#d23321", color: "#fff" },
                            }}
                        >
                            <Email />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
