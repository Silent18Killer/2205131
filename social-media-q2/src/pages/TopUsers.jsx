import { useEffect, useState } from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';
import Layout from '../components/Layout';
import UserCard from '../components/UserCard';
import { fetchTopUsers } from '../api';

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTopUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching top users:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Top Users by Post Count
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        users.map((user, index) => (
          <UserCard key={user.id} user={user} rank={index + 1} />
        ))
      )}
    </Layout>
  );
};

export default TopUsers;