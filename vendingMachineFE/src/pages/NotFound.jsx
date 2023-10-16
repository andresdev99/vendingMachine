// NotFound.js
import React from 'react';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-text">
          <h1 className="not-found-heading">Oops...</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="/" className="go-home-link">Go Home</a>
        </div>
        <div className="not-found-character">
          <div className="eye"></div>
          <div className="eye"></div>
          <div className="mouth"></div>
          <div className="body"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
