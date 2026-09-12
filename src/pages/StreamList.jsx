import {useState } from "react";
import StreamForm from "../components/StreamForm.jsx";

function StreamList() {
    const [movies, setMovies] = useState([]);

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    };

    return (
        <div>
            <h1>StreamList</h1>
            <p>Welcome to your personal list!</p>
            <StreamForm onAddMovie={addMovie} />
        </div>
    );
}

export default StreamList;