// src/components/BlogPost.jsx
import React from 'react';
import PropTypes from 'prop-types';

function BlogPost({ title, content, date, image, video }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />}
      {video && (
        <div className="relative overflow-hidden mb-4">
          <iframe
            className="w-full h-56"
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      )}
      <h2 className="text-3xl font-semibold mb-3 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <span className="text-gray-500 text-sm">{date}</span>
    </div>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  video: PropTypes.string,
};

export default BlogPost;
