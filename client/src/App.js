import React, { useState, useEffect } from 'react'
import './App.css';
import Home from "./pages/Home";
import axios from 'axios';
import { UserContext } from "./utils/UserContext"
import { Select, MenuItem } from '@mui/material'


function App() {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    axios.get('api/authors')
    .then(res => {
        const authorData = res.data;
        console.log(authorData)
      let nameArr = authorData.map(el => el.name)
      console.log(nameArr)

      setAuthors(nameArr)

        console.log('data received!')
      // setAuthors([data[0].name, data[1].name])

    })
    .catch(err => {
        console.log(err) 
    })
}, [])
console.log(authors)

  return (
    <UserContext.Provider value={{ authors, setAuthors }}>
    <div className="App">
    <>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Author"
    // onChange={handleChange}
  >
{authors.map(el =><MenuItem>{el}</MenuItem>)}
    
  </Select>
      <Home/>
      </>
    </div>
    </UserContext.Provider>
  );
}

export default App;
