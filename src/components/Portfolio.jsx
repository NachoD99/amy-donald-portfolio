import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Chip,
    useTheme,
    useMediaQuery,
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

export default function Portfolio() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const portfolioItems = [
        {
            title: "Beefeater Brand Ambassador",
            category: "Influencer Marketing",
            year: "2025",
            image: "/images/portfolio1.jpeg",
            description:
                "Organising over 70 activations resulting in over 3,000 GIH and built over 200 relationships in bars over 9 months across Andalucia",
        },
        {
            title: "Marketing Assistant",
            category: "Social Media",
            year: "2024",
            image: "/images/portfolio2.jpeg",
            description:
                "Organic reach of 95.3K accounts, exceeding 146K views, significantly increasing brand engagement in key demographics",
        },
    ];

    return (
        <Box id="portfolio" sx={{ py: 8, bgcolor: "white", width: "100vw" }}>
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    align="center"
                    sx={{ mb: 6, fontWeight: "bold", color: "#918450" }}
                >
                    PORTFOLIO
                </Typography>
                <Timeline position={isMobile ? "right" : "alternate"}>
                    {portfolioItems.map((item, index) => (
                        <TimelineItem sx={{"&::before": {display: isMobile ? "none" : "block", }}} key={index}>
                            {!isMobile && (
                                <TimelineOppositeContent
                                sx={{ m: "auto 0", fontWeight: 700, fontSize: {md: 25} }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                {item.year}
                            </TimelineOppositeContent>
                            )}
                            
                            <TimelineSeparator>
                                <TimelineDot variant="filled"  color="error" />
                                {index < portfolioItems.length - 1 && (
                                    <TimelineConnector/>
                                )}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: 2, px: 2 }}>
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.1)",
                                        "&:hover": {
                                            transform: "scale(1.02)",
                                            transition: "0.3s",
                                            boxShadow:
                                                "0 20px 40px rgba(0,0,0,0.15)",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={item.image}
                                        alt={item.title}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: "bold", mb: 1 }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Chip
                                            label={item.category}
                                            size="small"
                                            sx={{
                                                bgcolor: '#BF1A29',
                                                color: 'white',
                                                mb: 1,
                                            }}
                                        />
                                        {isMobile && (
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    color: "text.secondary",
                                                    fontWeight: 600,
                                                    mb: 1,
                                                }}
                                            >
                                                {item.year}
                                            </Typography>
                                        )}
                                        <Typography variant="body2">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
}
