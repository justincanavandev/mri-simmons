import React, { useEffect } from 'react'
import axios from 'axios';

const DataFetch = () =>
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err) 
        })
    })


export default DataFetch;