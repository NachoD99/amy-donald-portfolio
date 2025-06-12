import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function NavigationBar() {
    const sections = ["About", "Services", "Portfolio", "Contact"];
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    const handleClick = (section) => {
        scrollToSection(section.toLowerCase());
        setDrawerOpen(false); // close drawer on selection
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <AppBar
                position="fixed"
                elevation={2}
                sx={{
                    bgcolor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    zIndex: 1100,
                    overflowX: "hidden", // ⬅️ clave para móviles
                }}
            >
                    <Toolbar
                        sx={{
                            width: "100vw",
                            maxWidth: "1200px",
                            mx: "auto",
                            px: 2, // ⬅️ Usa padding controlado (no margin)
                            display: "flex",
                            justifyContent: "space-between",
                            overflowX: "hidden", // ⬅️ Evita scroll horizontal
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                color: "#e91e63",
                                letterSpacing: 1,
                                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Amy Donald
                        </Typography>

                        {isMobile ? (
                            <IconButton onClick={handleDrawerToggle} sx={{ pr: 3 }}>
                                <MenuIcon sx={{ color: "#333" }} />
                            </IconButton>
                        ) : (
                            <Box sx={{ display: "flex", gap: 2 }}>
                                {sections.map((item) => (
                                    <Button
                                        key={item}
                                        onClick={() => handleClick(item)}
                                        sx={{
                                            position: "relative",
                                            color: "#333",
                                            fontWeight: 500,
                                            fontSize: "1rem",
                                            fontFamily: "'Poppins', sans-serif",
                                            textTransform: "none",
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                bottom: 4,
                                                left: 0,
                                                width: 0,
                                                height: "2px",
                                                bgcolor: "#e91e63",
                                                transition: "width 0.3s ease",
                                            },
                                            "&:hover::after": {
                                                width: "100%",
                                            },
                                            "&:hover": {
                                                color: "#e91e63",
                                                backgroundColor: "transparent",
                                            },
                                        }}
                                    >
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
            </AppBar >

        {/* Drawer for mobile navigation */ }
        < Drawer anchor = "right" open = { drawerOpen } onClose = { handleDrawerToggle } >
            <Box sx={{ width: 250, p: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, color: "#e91e63", fontWeight: "bold" }}>
                    Menu
                </Typography>
                <List>
                    {sections.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton onClick={() => handleClick(item)}>
                                <ListItemText
                                    primary={item}
                                    primaryTypographyProps={{
                                        fontWeight: 500,
                                        fontSize: "1rem",
                                        color: "#333",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            </Drawer >
        </>
    );
}
