import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://public-api.wordpress.com/wp/v2/sites/tanishka355.wordpress.com/posts`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>{review.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: review.content.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
