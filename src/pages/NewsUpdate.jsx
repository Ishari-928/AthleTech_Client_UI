// pages/NewsUpdate.jsx
import React, { useEffect, useState } from 'react';
import { NewsDetail } from '../components/newsUpdate/NewsDetail';
import { NewsCard } from '../components/newsUpdate/NewsCard';
import { getActiveNews } from '../api/activeNews'; // Import the API function
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  CircularProgress, 
  Alert,
  Button 
} from '@mui/material';

export const NewsUpdate = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActiveNews();
  }, []);

  const fetchActiveNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getActiveNews();
      
      if (response.success && response.data) {
        setNewsData(response.data);
        
        // Set the first news as selected if available
        if (response.data.length > 0) {
          setSelectedNews(response.data[0]);
        }
      } else {
        setError('Failed to fetch news data');
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(err.response?.data?.message || 'Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleRetry = () => {
    fetchActiveNews();
  };

  if (loading) {
    return (
      <Box sx={{
        bgcolor: 'white',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: { xs: 5, sm: 5, md: 10 },
      }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{
        bgcolor: 'white',
        minHeight: '100vh',
        py: 5,
        mt: { xs: 5, sm: 5, md: 10 },
      }}>
        <Container>
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Latest News
          </Typography>
          <Typography textAlign="center" color="text.secondary" gutterBottom>
            Unable to load news at this time.
          </Typography>
          <Box textAlign="center" mt={2}>
            <Button variant="contained" onClick={handleRetry}>
              Try Again
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{
      bgcolor: 'white',
      minHeight: '100vh',
      py: 5,
      mt: { xs: 5, sm: 5, md: 10 },
    }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Latest News
        </Typography>

        {newsData.length === 0 ? (
          <Typography textAlign="center" color="text.secondary" sx={{ mt: 4 }}>
            No news available at the moment.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {/* Left Section - News Detail */}
            <Grid item xs={12} md={8}>
              {selectedNews && <NewsDetail news={selectedNews} />}
            </Grid>

            {/* Right Section - News List */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  height: 'calc(100vh - 180px)',
                  overflowY: 'auto',
                  pr: 1,
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#888',
                    borderRadius: '4px',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                  },
                }}
              >
                {newsData
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((news) => (
                    <NewsCard
                      key={news.news_id}
                      news={news}
                      isSelected={selectedNews?.news_id === news.news_id}
                      onClick={() => handleNewsClick(news)}
                    />
                  ))}
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default NewsUpdate;