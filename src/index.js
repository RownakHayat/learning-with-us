import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import AuthContextProvider from './Share_context/AuthContext/AuthProvider';
import { ToastContainer } from 'react-toastify';
import ThemeContextProvider from './Share_context/ThemeContext/ThemeContext';

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
reportWebVitals();