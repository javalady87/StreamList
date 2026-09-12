import "./App.css";
import StreamList from "./pages/StreamList.jsx";
import Movies from "./pages/Movies.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <nav
    style={{
      display: "flex",
      gap: "20px",
      marginBottom: "25px",
    }}
    >
      <Link to="/">
      <span className="material-symbols-outlined">home</span>
      StreamList
      </Link>
      
      <Link to="/movies">
      <span className="material-symbols-outlined">movie</span>
      Movies
      </Link>

      <Link to="/cart">
      <span className="material-symbols-outlined">shopping_cart</span>
      Cart
      </Link>

      <Link to="/about">
      <span className="material-symbols-outlined">info</span>
      About
      </Link>
      </nav>

       <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        </Routes>
          </BrowserRouter>
  );
}
export default App;