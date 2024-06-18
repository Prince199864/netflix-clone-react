import React, { useState, useEffect } from 'react'
import "./Header.css"
import Navbar from './Navbar'
import axios from '../axios'
import requests from '../Request'

const Header = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, [])
    console.log(movie);

    const truncate = (str, n) => {
        if (str?.length > n) {
            return (str.slice(0, n - 1).concat(' ...'));
        }
        else {
            return str
        }
    }
    return (
        <header className='banner' style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
        }}>
            <Navbar />
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <p className='banner_description'>{truncate(`${movie?.overview}`, 250)}</p>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
            </div>
            <div className="background_black">

            </div>
        </header>
    )
}

export default Header
