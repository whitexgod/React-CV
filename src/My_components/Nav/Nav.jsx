import "./Nav.css"
import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';

function Nav() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = new Date().toLocaleTimeString('it-IT');
    const [Time, setTime] = useState(time);
    function clock(){
        let time = new Date().toLocaleTimeString('it-IT');
        setTime(time);
    }
    useEffect(()=>{
        clock();
        setInterval(clock, 1000);
    },[])

    return( 
        <div className="header fixed-top scrolling-navbar">
            <h3 className="header-h3">Tuhin's Portfolio || {date} || {Time}</h3>
            <nav>
                <ul className="nav__links">
                    <li className="nav">
                        <Link className="nav" to="/">About</Link>
                    </li>
                    <li className="nav">
                        <Link className="nav" to="/project">Projects</Link>
                    </li>
                </ul>
            </nav>
            <Link to="/contact"><button className="btn btn-sm btn-light">Contact Me</button></Link>
        </div>
    )
}

export default Nav;