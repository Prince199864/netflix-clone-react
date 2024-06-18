import React from 'react'
import './HomeScreen.css'
import Header from './Header'
import Row from './Row'
import requests from '../Request'
const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <Header />

            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Movies" fetchUrl={requests.fetchTrending}  />
            <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated}  />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies}  />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}  />
        </div>
    )
}

export default HomeScreen
