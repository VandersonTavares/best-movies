import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">BestMovies</Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme"/>
        <button type="submit">BUSCAR</button>
      </form>
    </nav>
  );
};

export default Navbar;
