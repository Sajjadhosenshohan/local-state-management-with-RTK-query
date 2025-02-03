import { Link } from "react-router-dom";
import { ModeToggle } from "../module/mode-toggle";
import viteLogo from "/vite.svg";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5 border border-red-500">
      <div className="flex items-center">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <span className="font-bold ml-2">Task</span>
        Master
      </div>


      <div className="flex items-center gap-5">
        
          <Link to={"/"}>Tasks</Link>
          <Link to={"/user"}>Users</Link>
        
      </div>

      <div className="flex items-center">
        <h3 className="mr-4">Theme-change </h3>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
