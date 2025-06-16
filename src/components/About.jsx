import {
    Box,
    Container,
    Typography,
    Grid,
    Chip
} from "@mui/material";

export default function About() {
    const chipColors = {
        "Content & Digital": { bg: "#ffecb3", color: "#ff9800" },
        "Creative & Strategic": { bg: "#c8e6c9", color: "#388e3c" },
        "Soft": { bg: "#e1bee7", color: "#8e24aa" }
    };

    return (
        <Box id="about" sx={{ py: 8, bgcolor: "white", width: "100vw" }}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="left" sx={{ mb: 6, fontWeight: "bold", color: "#333" }}>
                    About Me
                </Typography>
                <Grid container spacing={4} alignItems="left">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" align="left" sx={{ mb: 3, color: "#e91e63" }}>
                            Hi there! I'm Amy 👋
                        </Typography>
                        <Typography variant="body1" align="left" sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.7, color: "#333" }}>
                            I'm a passionate Community Manager and Media Marketing Specialist with over 5 years of experience
                            helping brands build authentic connections with their audiences. I believe in the power of storytelling
                            and creative content to transform businesses.
                        </Typography>
                        <Typography variant="body1" align="left" sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.7, color: "#333" }}>
                            When I'm not crafting the perfect post or analyzing engagement metrics, you'll find me exploring new
                            coffee shops, practicing yoga, or planning my next travel adventure. I bring this same energy and
                            creativity to every project I work on!
                        </Typography>
                        {/* <Typography variant="body1" align="left" sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.7, color: "#333" }}>
                            Creative content enthusiast and creator with a flair for storytelling and a natural instinct for brand voice. Experienced in premium spirits, I blend platform expertise with cultural fluency to craft content that not only performs - but truly resonates.
                            A versatile, resilient and fast-learning individual, keen to explore new working and challenging environments.
                        </Typography> */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
                                Platforms
                            </Typography>
                            <Box justifyContent={"center"} sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                {[
                                    "Meta",
                                    "TikTok",
                                    "YouTube",
                                    "Canva",
                                    "CapCut",
                                    "Microsoft 365",
                                    "Google Workspace"
                                ].map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        sx={{
                                            bgcolor: "#ffecb3",
                                            color: "#ff9800",
                                            fontWeight: "bold",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
                                Creative & Strategic
                            </Typography>
                            <Box justifyContent={"center"} sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                {[
                                    "Social Analytics",
                                    "Brand Voice Development",
                                    "Visual Storytelling",
                                    "SEO",
                                    "Copywriting"
                                ].map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        sx={{
                                            bgcolor: "#c8e6c9",
                                            color: "#388e3c",
                                            fontWeight: "bold",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
                                 Soft
                            </Typography>
                            <Box justifyContent={"center"} sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                {[
                                    "Communication",
                                    "Resilience",
                                    "Teamwork",
                                    "Friendliness"
                                ].map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        sx={{
                                            bgcolor: "#e1bee7",
                                            color: "#8e24aa",
                                            fontWeight: "bold",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
