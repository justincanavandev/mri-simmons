import React, { useEffect, useState } from "react";
import Dropdown from '../components/Dropdown'
import Posts from '../components/Posts'
import API from '../utils/API'
import axios from 'axios';


const Home = () => {

    
    return (
        <>
        <Dropdown/>
        <Posts/>

        </>
    )
}

export default Home;