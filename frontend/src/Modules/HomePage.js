import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>This is the homepage of my blog. Browse the latest posts and more!</p>

      <ul>
        <li>
          <Link to="/blog">ROTA PARA /BLOG</Link>
        </li>
        <li>
          <Link to="/blog/criar">ROTA PARA BLOG/CRIAR</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default HomePage;
