import React, { useState } from 'react'
import './App.css';
import Home from "./pages/Home";
import { UserContext } from "./utils/UserContext"


function App() {

  const [user, setUser] = useState("justin")

  return (
    <UserContext.Provider value={{ user, setUser }}>
    <div className="App">
    <>
      <Home/>
      
      </>
 
    
    </div>
    </UserContext.Provider>
  );
}

export default App;
