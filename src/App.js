import React, { useState } from "react";
import "./App.css"
import Navbar from "./Navbar";


const App = () =>{
    const [show, setShow] = useState(true)

    const toggle = () =>{
        setShow(!show)
    }
    
    const [add, setAdd] = useState(true)

    
    return(
        <>
            <Navbar />
            <div className="content">
                <div className="title">Learn to Code</div>
                   <div className="para">With the world's largest web developer site</div>
                <div><input type="text" placeholder="Search our tutorials,e.g.HTML"/></div>
                <a href="#">Not Sure Where To Begin?</a> 
            </div>
            <div className="html-page">
                <div className="left-content">
                    <div className="h-title">HTML</div>
                    <div className="h-para">The language for buildling web pages</div>
                    <div><button className="btn-1" onClick={toggle}>Add HTML</button></div>
                    <div><button className="btn-2">Video Tutorial</button></div>
                </div>
                <div className="right-content">
                    <div className="box">
                        <h3>HTML Example</h3>
                        <div className="emty-box"></div>
                        <button>Try it Yourself</button>
                    </div>
                </div>
                
                {!show && <div className="aside">
                    <div className="x"><button onClick={toggle}>X</button></div>
                    <div>Amount$ <input type="Number"></input></div>
                    <div className="add">Amount$ <input type="Number"></input></div>
                    <div className="total">Total$ <input type="Number"></input></div>
                </div>}
                
            
                
            </div>
            <div className="html-page css-page">
                <div className="left-content">
                    <div className="h-title">CSS</div>
                    <div className="h-para">The language for styling web pages</div>
                    <div><button className="btn-1" onClick={toggle}>Add css</button></div>
                    <div><button className="btn-2 btn-3">Video Tutorial</button></div>
                </div>
                <div className="right-content">
                    <div className="box">
                        <h3>CSS Example</h3>
                        <div className="emty-box"></div>
                        <button>Try it Yourself</button>
                    </div>
                </div>
            </div>
            <div className="html-page javascript-page">
                <div className="left-content">
                    <div className="h-title heading">Javascript</div>
                    <div className="h-para parag">The language for programing web pages</div>
                    <div><button className="btn-1">Add Javascript</button></div>
                    <div><button className="btn-2">Video Tutorial</button></div>
                </div>
                <div className="right-content">
                    <div className="box">
                        <h3>JAVASCRIPT Example</h3>
                        <div className="emty-box"></div>
                        <button>Try it Yourself</button>
                    </div>
                    
                </div>
            </div>
            <div className="html-page python-page">
                <div className="left-content">
                    <div className="h-title heading">Python</div>
                    <div className="h-para">The language for programing web pages</div>
                    <div><button className="btn-1">Add Javascript</button></div>
                    <div><button className="btn-2 btn-3">Video Tutorial</button></div>
                </div>
                <div className="right-content">
                    <div className="box">
                        <h3>Python Example</h3>
                        <div className="emty-box"></div>
                        <button>Try it Yourself</button>
                    </div>
                    
                </div>
            </div>
            </>


    )
}
export default App;
