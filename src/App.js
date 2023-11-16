// import Register from './Register';
import { RouterProvider } from 'react-router-dom';
import './App.css'
import { routes } from './Router/Routes/Routes';

function App() {

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;