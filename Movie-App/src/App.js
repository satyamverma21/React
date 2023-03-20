import React, { useState } from "react";
import './App.css'
import { useEffect } from "react";
import searchIcon from './search.svg'


import MovieCard from "./MovieCard"

const movie1 = {
    Poster
        :
        "N/A",
    Title
        :
        "Spiderman",
    Type
        :
        "movie",
    Year
        :
        "2010",
    imdbID
        :
        "tt1785572"
}

const App = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=36e4d85a'

    const searchMovies = async (title) => {

        const respose = await fetch(`${api}&S=${title}`);
        const data = await respose.json()
        setMovies(data.Search)

    }
    useEffect(() => {
        searchMovies('spiderman');
    }, [])

    return (

        <div className="app">
            <h1>MovieMania</h1>
            <div className="search">
                <input
                    placeholder="Search for movie..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={()=>searchMovies(search)}
                />
            </div>
            {
                movies?.length > 0 ?

                    (<div className="container">
                        {
                            movies.map((movie) => <MovieCard movie={movie} />)
                        }


                    </div>) :

                    <div className="empty">
                        <h2>No Movies Found ...</h2>
                    </div>

            }
            <div>

            </div>
        </div>
    )


}

export default App