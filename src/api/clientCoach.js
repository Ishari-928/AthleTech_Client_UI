import client from './client';

export const getActiveCoaches = async () => {
  try {
    const response = await client.get('/api/v1/coaches/active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active coaches:', error);
    throw error;
  }
};