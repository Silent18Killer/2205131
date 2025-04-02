// Mock API functions since we're not connecting to a real backend
export const fetchTopUsers = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
      { id: 1, name: 'John Doe', postCount: 42, avatar: 'https://i.pravatar.cc/150?img=1' },
      { id: 2, name: 'Jane Smith', postCount: 38, avatar: 'https://i.pravatar.cc/150?img=2' },
      { id: 3, name: 'Bob Johnson', postCount: 35, avatar: 'https://i.pravatar.cc/150?img=3' },
      { id: 4, name: 'Alice Williams', postCount: 29, avatar: 'https://i.pravatar.cc/150?img=4' },
      { id: 5, name: 'Charlie Brown', postCount: 27, avatar: 'https://i.pravatar.cc/150?img=5' },
    ];
  };

  export const fetchTrendingPosts = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
      {
        id: 101,
        title: 'Exciting News!',
        content: 'We just reached 1 million users!',
        comments: 128,
        author: 'John Doe',
        authorAvatar: 'https://i.pravatar.cc/150?img=1',
        image: 'https://picsum.photos/600/400?random=1',
        timestamp: new Date(Date.now() - 3600000).toISOString()
      },
      {
        id: 102,
        title: 'New Feature Released',
        content: 'Check out our latest update with dark mode!',
        comments: 128,
        author: 'Jane Smith',
        authorAvatar: 'https://i.pravatar.cc/150?img=2',
        image: 'https://picsum.photos/600/400?random=2',
        timestamp: new Date(Date.now() - 7200000).toISOString()
      }
    ];
  };

  export const fetchFeedPosts = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
      {
        id: 201,
        title: 'Just joined!',
        content: 'Excited to be part of this community!',
        comments: 5,
        author: 'New User',
        authorAvatar: 'https://i.pravatar.cc/150?img=6',
        image: 'https://picsum.photos/600/400?random=3',
        timestamp: new Date().toISOString()
      },
      {
        id: 202,
        title: 'Weekend plans?',
        content: 'What is everyone doing this weekend?',
        comments: 23,
        author: 'Social Butterfly',
        authorAvatar: 'https://i.pravatar.cc/150?img=7',
        image: 'https://picsum.photos/600/400?random=4',
        timestamp: new Date(Date.now() - 1800000).toISOString()
      },
      {
        id: 203,
        title: 'Tech Talk',
        content: 'Just published my thoughts on the latest React features',
        comments: 42,
        author: 'Tech Enthusiast',
        authorAvatar: 'https://i.pravatar.cc/150?img=8',
        image: 'https://picsum.photos/600/400?random=5',
        timestamp: new Date(Date.now() - 5400000).toISOString()
      }
    ];
  };

  // Simulate real-time updates for the feed
  export const subscribeToFeedUpdates = (callback) => {
    const interval = setInterval(async () => {
      const newPost = {
        id: Math.floor(Math.random() * 1000) + 300,
        title: `Update ${Math.floor(Math.random() * 100)}`,
        content: 'New content just posted in real-time!',
        comments: Math.floor(Math.random() * 10),
        author: `User${Math.floor(Math.random() * 100)}`,
        authorAvatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`,
        image: `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 100)}`,
        timestamp: new Date().toISOString()
      };
      callback(newPost);
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  };