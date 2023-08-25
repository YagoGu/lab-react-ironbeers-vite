import { Link } from "react-router-dom";
import home from "./../assets/home-icon.png"

function Navbar() {
    return (
        <Link to="/"><img src={home} alt="home" style={{backgroundColor: "blue"}}/></Link>
    )
}

export default Navbar;
