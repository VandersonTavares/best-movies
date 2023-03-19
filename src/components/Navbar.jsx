import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search)

    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");

  }


  return (
    <nav>
      <div className="navbar flex justify-between m-3">
        <h2 className="text-[20px]">
          <Link to="/">BestMovies</Link>
        </h2>
        <form onSubmit={handleSubmit} className="mr-5 flex border rounded">
          <input className="bg-transparent outline-none" type="text" placeholder="Busque um filme" value={search} onChange={(e)=> setSearch(e.target.value)}/>
          <button className="bg-[#000] text-[#fff] font-bold mr-1" type="submit"><BiSearchAlt className="text-[22px]"/></button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
