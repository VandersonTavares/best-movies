import { Link } from "react-router-dom";

// import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar flex justify-center mt-2">
        <h2 className="text-[20px]">
          <Link to="/">BestMovies</Link>
        </h2>
        {/* <form className="mr-5 flex border rounded">
          <input className="bg-transparent outline-none" type="text" placeholder="Busque um filme" />
          <button className="bg-[#000] text-[#fff] font-bold mr-1" type="submit"><BiSearchAlt className="text-[22px]"/></button>
        </form> */}
      </div>
    </nav>
  );
};

export default Navbar;
