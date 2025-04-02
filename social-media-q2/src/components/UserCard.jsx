import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { Person } from '@mui/icons-material';

const UserCard = ({ user, rank }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" sx={{ mr: 2, color: 'primary.main', fontWeight: 'bold' }}>
            #{rank}
          </Typography>
          <Avatar src={user.avatar} sx={{ width: 56, height: 56, mr: 2 }}>
            <Person />
          </Avatar>
          <Box>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {user.postCount} posts
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;