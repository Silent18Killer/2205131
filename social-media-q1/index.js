const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const BASE_URL = 'http://20.244.56.144/evaluation-service';

// Get Top Users (Users with most posts)
app.get('/users', async (req, res) => {
    try {
        const usersResponse = await axios.get(`${BASE_URL}/users`);
        const postsResponse = await axios.get(`${BASE_URL}/posts`);

        const users = usersResponse.data.users;
        const posts = postsResponse.data.posts;

        const postCount = {};
        posts.forEach(post => {
            postCount[post.userId] = (postCount[post.userId] || 0) + 1;
        });

        const sortedUsers = Object.entries(postCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([userId]) => ({ id: userId, name: users[userId], postCount: postCount[userId] }));

        res.json({ topUsers: sortedUsers });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users or posts' });
    }
});

// Get Top or Latest Posts
app.get('/posts', async (req, res) => {
    try {
        const { type } = req.query;
        const postsResponse = await axios.get(`${BASE_URL}/posts`);
        const posts = postsResponse.data.posts;

        if (type === 'popular') {
            const maxComments = Math.max(...posts.map(post => post.comments.length));
            const popularPosts = posts.filter(post => post.comments.length === maxComments);
            res.json({ popularPosts });
        } else if (type === 'latest') {
            const latestPosts = posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 5);
            res.json({ latestPosts });
        } else {
            res.status(400).json({ error: 'Invalid type parameter. Use latest or popular' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
