import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './Share_context/AuthContext/AuthProvider';
import { ThemeContext } from './Share_context/ThemeContext/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
  <ThemeContext>
  <AuthProvider>
  <App />
  </AuthProvider>
  </ThemeContext>
    
  </React.StrictMode>,
  document.getElementById('root')
);