import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

export const NewsDetail = ({ news }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        image={news.image || '/placeholder-image.jpg'} // Added fallback for missing image
        alt={news.news_topic} // Changed from news.title to news.news_topic
        sx={{ height: 350, objectFit: 'cover' }}
        onError={(e) => {
          e.target.src = '/placeholder-image.jpg'; // Fallback if image fails to load
        }}
      />
      <CardContent>
        <Typography variant="caption" color="textSecondary">
          {formatDate(news.date)}
        </Typography>
        <Typography variant="h5" fontWeight={600} sx={{ mt: 1, mb: 2 }}>
          {news.news_topic} {/* Changed from news.title to news.news_topic */}
        </Typography>
        {news.news_description.split('\n\n').map((paragraph, index) => ( // Changed from news.description to news.news_description
          <Typography key={index} variant="body2" paragraph>
            {paragraph}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};