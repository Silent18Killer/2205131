import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, Chip } from '@mui/material';
import { red } from '@mui/material/colors';
import { formatDistanceToNow } from 'date-fns';

const PostCard = ({ post }) => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        avatar={
          <Avatar src={post.authorAvatar} aria-label="author">
            {post.author.charAt(0)}
          </Avatar>
        }
        title={post.author}
        subheader={formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
        action={
          <Chip
            label={`${post.comments} comments`}
            color="primary"
            variant="outlined"
            sx={{ mr: 1 }}
          />
        }
      />
      <CardMedia
        component="img"
        height="300"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;