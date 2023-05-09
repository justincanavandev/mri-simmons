import React, { useState, useEffect } from 'react'
import './App.css';
import Home from "./pages/Home";
import axios from 'axios';
import { UserContext } from "./utils/UserContext"


function App() {
  const [authors, setAuthors] = useState([{
    names: [],
}])

  useEffect(() => {
    axios.get('api/authors')
    .then(res => {
        const authorData = res.data;
        console.log(authorData)
      let nameArr = data.map(oneName => oneName.name)
      console.log('nameArr = ' + nameArr)

        console.log('data received!')
      // setAuthors([data[0].name, data[1].name])

   
    })
    .catch(err => {
        console.log(err) 
    })
}, [])




  return (
    <UserContext.Provider value={{ authors, setAuthors }}>
    <div className="App">
    <>
      <Home/>
      
      </>
 
    </div>
    </UserContext.Provider>
  );
}

export default App;
