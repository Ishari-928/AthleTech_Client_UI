import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

export const NewsCard = ({ news, isSelected, onClick }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        display: 'flex',
        mb: 2,
        cursor: 'pointer',
        border: isSelected ? '2px solid rgba(252, 156, 127, 0.83)' : '1px solid #ccc',
        boxShadow: isSelected ? 3 : 1,
        transition: 'box-shadow 0.2s',
        '&:hover': {
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        image={news.image}
        alt={news.title}
        sx={{ width: 100, height: 100, objectFit: 'cover' }}
      />
      <CardContent sx={{ flex: 1, padding: '12px !important' }}>
        <Typography variant="caption" color="textSecondary">
          {formatDate(news.date)}
        </Typography>
        <Typography variant="subtitle2">
          {news.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
