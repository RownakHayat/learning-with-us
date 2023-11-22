// import Register from './Register';
import { RouterProvider } from 'react-router-dom';
import '../src/Style/Style.css'
import './App.css'
import { useContext } from 'react';
import { routes } from './Router/Routes/Routes';
import AuthContextProvider, { AuthContext } from './Share_context/AuthContext/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { ThemeContext } from './Share_context/ThemeContext/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  const { auth } = useContext(AuthContext);
  // console.log(theme,auth);
  return (
    <div>
          <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;