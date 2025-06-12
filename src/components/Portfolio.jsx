import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
} from "@mui/material";

export default function Portfolio() {
    const portfolioItems = [
        {
            title: "Beefeater Brand Ambassador",
            category: "Influencer Marketing",
            image: "/src/images/portfolio1.jpeg", // 👈 agrega imágenes válidas
            description: "Organising over 70 activations resulting in over 3,000 GIH and built over 200 relationships in bars over 9 months across Andalucia",
        },
        {
            title: "Marketing Assistant",
            category: "Social Media",
            image: "/src/images/portfolio2.jpeg",
            description: "Organic reach of 95.3K accounts, exceeding 146K views, significantly increasing brand engagement in key demographics",
        },
    ];

    return (
        <Box id="portfolio" sx={{ py: 8, bgcolor: "white", width: "100vw" }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ mb: 6, fontWeight: "bold", color: "#333" }}
                >
                    Portfolio
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {portfolioItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}}}>
                            <Card
                                sx={{
                                    width: '100%',
                                    maxWidth: 600, // ✅ ancho máximo fijo
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    "&:hover": {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Chip
                                        label={item.category}
                                        size="small"
                                        sx={{
                                            bgcolor: '#e91e63',
                                            color: 'white',
                                            mb: 1,
                                        }}
                                    />
                                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
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
