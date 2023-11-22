// import React, { Component, createContext } from "react";

// export const ThemeContext = createContext();


// class ThemeContextProvider extends Component {
//   state = {
//     isLightTheme: true,
//     light: {syntax: '#555', ui: '#ddd', bg:'#eee' },
//     drak: { syntax: '#ddd', ui: '#333', bg: '#555' }
//   };

//   toggleTheme = () =>{
//     this.setState({isLightTheme: !this.state.isLightTheme});

//   }

//   render() {
//     return (
//       <div>
//         <ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}} >
//         {this.props.children}
//       </ThemeContext.Provider>
//       </div>
//     );
//   }
// }

// export default ThemeContextProvider;

import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  // const [theme, setTheme] = useState()
  const theme = {
    isLightTheme: true,
    light: {syntax: '#555', ui: '#ddd', bg:'#eee' },
    drak: { syntax: '#ddd', ui: '#333', bg: '#555' }
  }
  return (
    <div>
        <ThemeContext.Provider value={{theme}} >
             {children}
        </ThemeContext.Provider>
    </div>
  )
}

export default ThemeContextProvider


