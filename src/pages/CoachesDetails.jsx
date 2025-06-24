import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Paper,
  Button,
  IconButton,
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import chanukaImg from '../assets/images/Coaches/Chanuka_sir.png';
import jayashanthaImg from '../assets/images/Coaches/Jayashantha_sir.png';

// Sample coach data (you can add more here)
const coachesData = [
  {
    name: 'Chanuka Eranga De Silva',
    email: 'info@example.com',
    phone: '009195512-854',
    schedule: [
            'Monday - 6.00 am to 8.00 am',
            'Tuesday - 6.00 am to 8.00 am',
            'Wednesday - 6.00 am to 8.00 am',
            'Thursday - 6.00 am to 8.00 am',
        ],
    bio: `Jayashantha empowers athletes through discipline...Lorem ipsum dolor sit amet...
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: chanukaImg,
    socials: {
      facebook: '@exampleAcc',
      instagram: '@exampleAcc',
    },
  },
  {
    name: 'Jayashantha Fernando',
    email: 'coachjay@example.com',
    phone: '009188822-754',
    schedule: ['Monday - 5.30 am to 7.30 am', 'Wednesday - 6.00 am to 8.00 am', 'Friday - 7.00 am to 9.00 am'],
    bio: `Jayashantha empowers athletes through discipline...Lorem ipsum dolor sit amet...
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a`,
    image: jayashanthaImg,
    socials: {
      facebook: '@jayAcc',
      instagram: '@jayInsta',
    },
  },
  // Add more coaches as needed
];

const CoachesDetails = () => {
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 5;

  // Auto-select coach by day of week
  useEffect(() => {
    const today = new Date().getDay(); // 0-6 (Sun-Sat)
    const index = today % coachesData.length;
    setSelectedCoachIndex(index);
    setCurrentPage(Math.floor(index / cardsPerPage));
  }, []);

  const selectedCoach = coachesData[selectedCoachIndex];
  const totalPages = Math.ceil(coachesData.length / cardsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const visibleCoaches = coachesData.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <Box
      sx={{
        p: 2,
        maxWidth: 1200,
        margin: 'auto',
        mt: { xs: 5, sm: 5, md: 15 },
      }}
    >
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
        Trainers Details
      </Typography>

      <Grid container spacing={3} component={Paper} sx={{ p: 1, borderRadius: 2 }}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={selectedCoach.image}
            alt={selectedCoach.name}
            sx={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              objectPosition: 'top center',
              borderRadius: 2,
              display: 'block',
            }}
          />
          <Box bgcolor="#f25c1b" p={2} borderRadius={2} color="#fff" mt={1}>
            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography>{selectedCoach.email}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography>{selectedCoach.phone}</Typography>
            </Box>
            <Box mt={2}>
              <Typography fontWeight="bold" mb={1}>Social Media Details</Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <FacebookIcon sx={{ mr: 1 }} />
                <Typography>{selectedCoach.socials.facebook}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <InstagramIcon sx={{ mr: 1 }} />
                <Typography>{selectedCoach.socials.instagram}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={8} >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {selectedCoach.name}
          </Typography>
          <Typography mb={2} sx={{ textAlign: 'justify' }}>
            {selectedCoach.bio}
          </Typography>
          <Typography fontWeight="bold">Meet at,</Typography>
          <Typography>Sugathadasa Stadium</Typography>
          <ul>
            {selectedCoach.schedule.map((item, idx) => (
              <li key={idx}>
                <Typography>{item}</Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>

      <Typography variant="h5" mt={5} mb={2} textAlign="center" fontWeight="bold">
        We Are Here To Help You
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <IconButton
            onClick={handlePrev}
            disabled={currentPage === 0}
            sx={{ border: '1px solid #ccc', color: '#f25c1b' }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>

        {visibleCoaches.map((coach, index) => {
          const realIndex = currentPage * cardsPerPage + index;
          return (
            <Grid item xs={6} sm={4} md={2.4} key={realIndex}>
              <Button
                fullWidth
                onClick={() => setSelectedCoachIndex(realIndex)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: selectedCoachIndex === realIndex ? '2px solid #f25c1b' : '1px solid #ccc',
                  borderRadius: 2,
                  p: 1,
                  textTransform: 'none',
                }}
              >
                <Avatar
                  src={coach.image}
                  alt={coach.name}
                  sx={{ width: 70, height: 70, mb: 1 }}
                />
                <Typography variant="body2" fontWeight="bold" color="#333">
                  {coach.name.split(' ')[0]} {coach.name.split(' ').slice(-1)}
                </Typography>
              </Button>
            </Grid>
          );
        })}

        <Grid item>
          <IconButton
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            sx={{ border: '1px solid #ccc', color: '#f25c1b' }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoachesDetails;
