
import React from 'react';
import BlogList from './components/BlogList';
import './index.css';

function App() {
  const posts = [
    {
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.',
      date: 'September 10, 2024',
      image: 'https://via.placeholder.com/800x400',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      title: 'Second Blog Post',
      content: 'Here is some content for the second blog post.',
      date: 'September 11, 2024',
      image: 'https://via.placeholder.com/800x400',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold">My Professional Blog</h1>
            <p className="text-xl mt-2">Insights and stories to inspire and inform.</p>
          </div>
          <img src="https://via.placeholder.com/150" alt="Logo" className="w-32 h-32 rounded-full mt-4 md:mt-0" />
        </div>
      </header>
      <main>
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto">
            <BlogList posts={posts} />
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Professional Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
