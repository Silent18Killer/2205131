import { useEffect, useState } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import { fetchFeedPosts, subscribeToFeedUpdates } from '../api';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFeedPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching feed posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToFeedUpdates(newPost => {
      setPosts(prevPosts => [newPost, ...prevPosts]);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Real-Time Feed
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

export default Feed;