// lib/wordpress.js
import axios from 'axios';

// Replace with your WordPress site URL
const WORDPRESS_API_URL = 'https://tanishka355.wordpress.com/wp-json/wp/v2';

export async function fetchPosts() {
  try {
    const response = await axios.get(`${WORDPRESS_API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
