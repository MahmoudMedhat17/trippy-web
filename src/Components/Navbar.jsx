import { Component } from "react";
import Menuitems from "./Menuitems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component{
    state = { clicked: false , visibility:false }; 
    render(){
        return(
            <nav className="NavbarItems">
                <Link to="/" style={{textDecoration:"none"}}>
                <h1 className="navbar-logo">Trippy</h1>
                </Link>
                <div className="menu-icons" onClick={() => this.setState({clicked : !this.state.clicked})}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        Menuitems.map((item,index)=>{
                            return(
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    <i className={item.icon}/> {item.title}
                                </Link>
                            </li>
                            )
                        })
                    }
                    <Link to="/Signup">
                        <button>Sign Up</button>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;