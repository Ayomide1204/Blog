
import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from './BlogPost';

function BlogList({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          content={post.content}
          date={post.date}
          image={post.image}
          video={post.video}
        />
      ))}
    </div>
  );
}

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string,
      video: PropTypes.string,
    })
  ).isRequired,
};

export default BlogList;
