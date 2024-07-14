// MahdiFlix.js

import React, { useState, useRef, useEffect } from 'react';
import MoviesList from './MoviesList'; // Adjust the path as needed
import './Home.css'; // Keep the CSS file as Home.css

const MahdiFlix = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = isMuted ? 0 : 1; // Set volume based on mute state
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prevState => !prevState); // Toggle mute state
  };

  return (
    <div className="back">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MahdiFlix</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Animes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Films</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">What's New</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="video-container">
        <video ref={videoRef} autoPlay loop muted className="fullscreen-bg__video">
          <source src="https://res.cloudinary.com/dxjhao6qa/video/upload/v1702200194/jcetnswxbcjcvtfg70c4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className={`mute-button ${isMuted ? 'muted' : ''}`} onClick={toggleMute}>
          {isMuted ? <i className="fas fa-volume-mute"></i> : <i className="fas fa-volume-up"></i>}
        </button>
      </div>

      <MoviesList />
    </div>
  );
};

export default MahdiFlix;
