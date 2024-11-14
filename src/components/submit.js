import React, { useState } from 'react';
import axios from 'axios';

const SubmitReview = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(1);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Replace these with your actual WordPress username and app password
  const username = 'tanishkapetwa;'; // Your WordPress username
  const appPassword = 'v22k 3gnv khdn eh4s'; // Your generated app password

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate rating to be between 1 and 5
    if (rating < 1 || rating > 5) {
      setError('Rating must be between 1 and 5');
      return;
    }

    // Format the review content to include author and rating as part of the post
    const reviewContent = `
      <p><strong>Author:</strong> ${author}</p>
      <p><strong>Rating:</strong> ${rating} / 5</p>
      <p>${content}</p>
    `;

    try {
      // Create the base64 encoded credentials
      const base64Credentials = btoa(`${username}:${appPassword}`);

      // Use your actual WordPress site URL
      const response = await axios.post(
        `http://tanishka355.wordpress.com/wp-json/wp/v2/posts`, // Update this with your site URL
        {
          title,
          content: reviewContent,
          status: 'publish', // Publish the post immediately
        },
        {
          headers: {
            Authorization: `Basic ${base64Credentials}`, // Use Basic Authentication with app password
            'Content-Type': 'application/json', // Specify content type
          },
        }
      );

      // Check if the response is successful
      if (response.status === 201) {
        console.log('Review submitted:', response.data);
        setSuccess(true);
        // Reset form fields
        setTitle('');
        setContent('');
        setAuthor('');
        setRating(1);
        setError(null);
      } else {
        throw new Error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('There was an error submitting your review. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Review Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Review Content"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="5"
          placeholder="Rating"
          required
        />
        <button type="submit">Submit Review</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Review submitted successfully!</p>}
    </div>
  );
};

export default SubmitReview;