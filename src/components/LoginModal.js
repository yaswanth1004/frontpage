// components/LoginModal.js

import React from 'react'; // Import the background image

const LoginModal = ({ onClose }) => {
  return (
    <div
      className="login-modal"
      
    >
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container p-4 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '80%' }}>
          <h2 className="text-center mb-4">Login </h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label> 
              <input type="text" id="username" className="form-control" placeholder="Enter your username" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '1px solid white', color: 'white' }} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Enter your password" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '1px solid white', color: 'white' }} />
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: 'white', color: '#007bff', border: 'none' }}>Login</button>
          </form>
          <div className="text-center mt-3">
            <span className="close-button" onClick={onClose}>Close</span>
          </div>
          {/* Image placed here will be in the centered box */}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
