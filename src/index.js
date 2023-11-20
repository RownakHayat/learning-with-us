import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContext } from './Share_context/ThemeContext/ThemeContext'
import AuthContextProvider from './Share_context/AuthContext/AuthProvider';

  
  const root =ReactDOM.createRoot(document.getElementById('root')) ;
  root.render(
  <React.StrictMode>
    <ThemeContext>
     <AuthContextProvider>
     <App />
     </AuthContextProvider>
    </ThemeContext>

  </React.StrictMode>,
);