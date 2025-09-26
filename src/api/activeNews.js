import client from './client';

export const getActiveNews = async () => {
  try {
    const response = await client.get("/api/v1/news-updates/active");
    return response.data;
  } catch (error) {
    console.error('Error fetching active news:', error);
    throw error;
  }
};