
// import './App.css';

import { Provider } from "react-redux";
import { routes } from "./Router/Routes/Routes";

function App() {
  return (
    <>
    <Provider router={routes}></Provider>
    </>
  );
}

export default App;
