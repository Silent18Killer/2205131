import { useEffect, useState } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import { fetchTrendingPosts } from '../api';

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTrendingPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching trending posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Trending Posts (Most Comments)
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </Layout>
  );
};

export default TrendingPosts;