import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '10rem', color: 'aliceblue' }}>
    <h1 >ERROR : 404</h1>
    <h1 >Page Not Found</h1>
    <Link to="/" >Go Home</Link>
  </div>
);

export default NotFound;