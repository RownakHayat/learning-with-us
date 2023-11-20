// import Register from './Register';
import { RouterProvider } from 'react-router-dom';
import '../src/Style/Style.css'
import './App.css'
import { useContext } from 'react';
import ThemeContextProvider from './Share_context/ThemeContext/ThemeContext';
import { routes } from './Router/Routes/Routes';

function App() {
  const {theme} = useContext(ThemeContextProvider);
  console.log(theme);
  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;