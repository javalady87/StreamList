import { useState } from "react";

function StreamForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()==="") {
    return;
  }
    console.log("Movie:", title);
    onAddMovie(title.trim());
    setTitle("");
  };

  return (
    <div>
      <h2>Add a Movie</h2>

      <form onSubmit={handleSubmit}>
        <label>Movie Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default StreamForm;