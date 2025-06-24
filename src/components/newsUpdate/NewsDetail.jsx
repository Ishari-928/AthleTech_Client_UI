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
        image={news.image}
        alt={news.title}
        sx={{ height: 350, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="caption" color="textSecondary">
          {formatDate(news.date)}
        </Typography>
        <Typography variant="h5" fontWeight={600} sx={{ mt: 1, mb: 2 }}>
          {news.title}
        </Typography>
        {news.description.split('\n\n').map((paragraph, index) => (
          <Typography key={index} variant="body2" paragraph>
            {paragraph}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};
