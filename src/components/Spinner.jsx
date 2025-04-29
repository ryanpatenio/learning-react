// src/components/Spinner.jsx
import React from 'react';

export const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);