import React from "react";
import "./Nav.css"
const Navbar = () =>{
    return(
        <div className="navbar "> 
            <div className="left-side">
                <div className="logo"></div>
                <ul className="list">
                    <li>Tutorials</li>
                    <li>Reference</li>
                    <li>Exercises</li>
                    <li>Bootcamp</li>
                    <li>Video</li>
                </ul>
            </div>
            <div className="right-side">
                <button className="button-1">Upgrade</button>
                <button className="button-2">Get Certified</button>
                <button className="button-3">Create Website</button>
                <button className="button-4">login</button>
            </div>
        </div>
    )

}
export default Navbar;