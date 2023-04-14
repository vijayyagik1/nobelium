import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div></div>

      <ul>
        
        <Link to={"/create"} className="link-tag">
          Update{" "}
        </Link>
        <Link to={"/edit"} className="link-tag">
          Edit{" "}
        </Link>
        <Link to={"/home"} className="link-tag">
          List{" "}
        </Link>
        <Link to={"/delete"} className="link-tag">
          Delete{" "}
        </Link>
      </ul>
    </div>
  );
};

export { Navbar };