import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import bgImage from "../assets/images/Home Page Carousel.svg";
import img1 from "../assets/images/AboutUsImages/samod 1.1.jpg";
import img2 from "../assets/images/AboutUsImages/Dulith.jpg";
import img3 from "../assets/images/AboutUsImages/Janith 1.1.jpg";
import img4 from "../assets/images/AboutUsImages/Ishari.jpg";

// Album data with navigation paths
const galleryItems = [
  {
    path: "/gallery",
    title: "MIT University Games",
    date: "JUNE - 2023",
    image: img1,
  },
  {
    path: "/gallery",
    title: "NYU Games University",
    date: "APRIL - 2023",
    image: img2,
  },
  {
    path: "/gallery",
    title: "UIUC 3rd Annual Track Meet",
    date: "2023",
    image: img3,
  },
  {
    path: "/gallery",
    title: "Penn State University Games",
    date: "SUMMER - 2023",
    image: img4,
  },
  {
    path: "/gallery",
    title: "Berkeley State Premier Conference",
    date: "2023",
    image: img1,
  },
  {
    path: "/gallery",
    title: "Texas State University Competition",
    date: "FALL - 2023",
    image: img2,
  },
];

const Album = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "55vh",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "40px", md: "60px" },
            fontWeight: 800,
            marginTop: "30px",
          }}
        >
          Explore Our <span style={{ color: "#FF754A" }}>Gallery</span>
        </Typography>
      </Box>

      {/* Gallery Grid Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {galleryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ height: 220, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {item.date}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#ff5733",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#e44e2e",
                      },
                    }}
                    onClick={() => navigate(item.path)}
                  >
                    See More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Album;
