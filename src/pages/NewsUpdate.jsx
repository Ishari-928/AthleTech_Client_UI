import React, { useEffect, useState } from 'react';
import { NewsDetail } from '../components/newsUpdate/NewsDetail';
import { NewsCard } from '../components/newsUpdate/NewsCard';
import { newsData } from '../DB/newsData'; // Adjust the import path as necessary
import { Box, Container, Typography, Grid } from '@mui/material';

export const NewsUpdate = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sortedNews.length > 0) {
      setSelectedNews(sortedNews[0]);
    }
  }, []);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

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
              }}
            >
              {[...newsData]
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((news) => (
                  <NewsCard
                    key={news.id}
                    news={news}
                    isSelected={selectedNews?.id === news.id}
                    onClick={() => handleNewsClick(news)}
                  />
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsUpdate;
