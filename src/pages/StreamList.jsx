import {useState } from "react";
import StreamForm from "../components/StreamForm.jsx";

function StreamList() {
    const [movies, setMovies] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editTitle, setEditTitle] = useState("");

    const addMovie = (movie) => {
        const newMovie = {
            title: movie,
            completed: false,
        };
        setMovies([...movies, newMovie]);
    };

    const deleteMovie = (indexToDelete) => {
    setMovies(movies.filter((movie, index) => index !== indexToDelete));
};

const completeMovie = (indexToComplete) => {
    const updatedMovies = movies.map((movie, index) => {
        if (index === indexToComplete) {
            return {
                ...movie,
                completed: !movie.completed,
            };
        }

    return movie;
    });

    setMovies(updatedMovies);
};
 const editMovie = (index) => {
    setEditingIndex(index);
    setEditTitle(movies[index].title);
 };

 const saveEdit = (indexToEdit) => {
    if (editTitle.trim() ==="") {
        return;
    }

    const updatedMovies = movies.map((movie, index) => {
        if (index === indexToEdit) {
            return {
                ...movie,
                title: editTitle.trim(),
            };
        }
        return movie;
    });
    
    setMovies(updatedMovies);
    setEditingIndex(null);
    setEditTitle("");
 };
return (
        <div>
            <h1>StreamList</h1>
            <p>Welcome to your personal streaming list!</p>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                    {editingIndex === index ? (
                        <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        />
                    ) : (
                        <span
                        style={{
                            textDecoration: movie.completed ? "line-through" : "none",
                        }}
                        >
                            {movie.title}
                        </span>
                        )}
                        <button onClick={() => completeMovie(index)}>
                            <span className="material-symbols-outlined">check_circle</span>
                        {movie.completed ? "Undo" : "Complete"}
                        </button>

                        {editingIndex === index ? (
                            <button onClick={() => saveEdit(index)}>
                                <span className="material-symbols-outlined">save</span>
                                Save
                            </button>

                        ) : (

                        <button onClick={() => editMovie(index)}>
                            <span className="material-symbols-outlined">edit</span>
                            Edit
                        </button>
                        )}

                    <button onClick={() => deleteMovie(index)}>
                        <span className="material-symbols-outlined">delete</span>
                        Delete
                        </button>
                        </li>
                ))}
            </ul>
            <StreamForm onAddMovie={addMovie} />
        </div>
    );
}

export default StreamList;