// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from './wordpress';
import WebflowSection from './webFlow';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    getPosts();
  }, []);

  return (
    <div>
      <WebflowSection />
      <h1>Latest Posts from WordPress</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
