import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: '#1c1f1f' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ paddingRight: "10px", background: "linear-gradient(to right, #104fc4 10%, #22a5c3 100%)", webkitBackgroundClip: 'text', webkitTextFillColor: 'transparent' }}><b>NewsHonk</b></Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" aria-current="page" to="/" style={{ color: '#9edbe2', textDecoration: "none" }}>Home</Link></li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/business" style={{ color: '#9edbe2', textDecoration: "none" }}>Business</Link></li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/Entertainment" style={{ color: '#9edbe2', textDecoration: "none" }}>Entertainment</Link></li>
                            {/* <li className="nav-item">
                                    <Link className="nav-Link mx-2" to="/general" style={{color:'white',textDecoration:"none"}}>General</Link></li> */}
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/health" style={{ color: '#9edbe2', textDecoration: "none" }}>Health</Link></li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/science" style={{ color: '#9edbe2', textDecoration: "none" }}>Science</Link></li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/sports" style={{ color: '#9edbe2', textDecoration: "none" }}>Sports</Link></li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/technology" style={{ color: '#9edbe2', textDecoration: "none" }}>Technology</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar;
