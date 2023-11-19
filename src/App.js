// import Register from './Register';
import { RouterProvider } from 'react-router-dom';
import '../src/Style/Style.css'
import './App.css'
import { routes } from './Router/Routes/Routes';
import { useContext } from 'react';
import { ThemeContext } from './Share_context/ThemeContext/ThemeContext';

function App() {

  const  { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;