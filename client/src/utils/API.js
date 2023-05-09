import React, { useState, useEffect } from 'react'
import axios from 'axios';

function API() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <div>

        </div>
    )

}


export default API;