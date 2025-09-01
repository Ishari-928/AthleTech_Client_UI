import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Paper,
  Button,
  IconButton,
  CircularProgress,
  Alert
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

// Import your API function
import { getActiveCoaches } from '../api/clientCoach';

// Fallback images


const CoachesDetails = () => {
  const [coachesData, setCoachesData] = useState([]);
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const cardsPerPage = 5;

  // Fetch active coaches from API
  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        setLoading(true);
        const response = await getActiveCoaches();
        
        if (response.success && response.data) {
          setCoachesData(response.data);
          
          // Auto-select coach by day of week
          const today = new Date().getDay();
          const index = today % response.data.length;
          setSelectedCoachIndex(index);
          setCurrentPage(Math.floor(index / cardsPerPage));
        }
      } catch (err) {
        console.error('Error fetching coaches:', err);
        setError('Failed to load coaches. Please try again later.');
        
      } finally {
        setLoading(false);
      }
    };

    fetchCoaches();
  }, []);

  const selectedCoach = coachesData[selectedCoachIndex] || {};
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

  if (loading) {
    return (
      <Box
        sx={{
          p: 2,
          maxWidth: 1200,
          margin: 'auto',
          mt: { xs: 5, sm: 5, md: 15 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error && coachesData.length === 0) {
    return (
      <Box
        sx={{
          p: 2,
          maxWidth: 1200,
          margin: 'auto',
          mt: { xs: 5, sm: 5, md: 15 }
        }}
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

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

      {coachesData.length > 0 ? (
        <>
          <Grid container spacing={3} component={Paper} sx={{ p: 1, borderRadius: 2 }}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={selectedCoach.profile_image_url || defaultAvatar}
                alt={selectedCoach.name}
                onError={(e) => {
                  e.target.src = defaultAvatar;
                }}
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
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography>{selectedCoach.contact_no || 'No phone provided'}</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography>{selectedCoach.whatsapp || 'No phone provided'}</Typography>
                </Box>
                <Box mt={2}>
                  <Typography fontWeight="bold" mb={1}>Social Media Details</Typography>
                  {selectedCoach.social_media?.facebook && (
                    <Box display="flex" alignItems="center" mb={1}>
                      <FacebookIcon sx={{ mr: 1 }} />
                      <Typography>{selectedCoach.social_media.facebook}</Typography>
                    </Box>
                  )}
                  {selectedCoach.social_media?.instagram && (
                    <Box display="flex" alignItems="center" mb={1}>
                      <InstagramIcon sx={{ mr: 1 }} />
                      <Typography>{selectedCoach.social_media.instagram}</Typography>
                    </Box>
                  )}
                  {!selectedCoach.social_media?.facebook && !selectedCoach.social_media?.instagram && (
                    <Typography>No social media provided</Typography>
                  )}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {selectedCoach.name}
              </Typography>
              <Typography mb={2} sx={{ textAlign: 'justify' }}>
                {selectedCoach.description || 'No description provided'}
              </Typography>
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
                <Grid item xs={6} sm={4} md={2.4} key={coach.coach_id || index}>
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
                      src={coach.profile_image_url || defaultAvatar}
                      alt={coach.name}
                      onError={(e) => {
                        e.target.src = defaultAvatar;
                      }}
                      sx={{ width: 70, height: 70, mb: 1 }}
                    />
                    <Typography variant="body2" fontWeight="bold" color="#333">
                      {coach.name ? coach.name.split(' ')[0] + ' ' + coach.name.split(' ').slice(-1) : 'Unknown Coach'}
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
        </>
      ) : (
        <Typography textAlign="center" color="text.secondary">
          No active coaches available at the moment.
        </Typography>
      )}
    </Box>
  );
};

export default CoachesDetails;