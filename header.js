import React from 'react';
import {Link} from 'react-router-dom'
const Header= () => {
    return (
    <div style={{backgroundColor:"skyblue",margin:"10px",padding:"20px"}} className="row">
        <div className="col-md-6">
            <h1 style={{color:"green"}}>Sathya Technologies</h1>    
        </div>
        <div  className="col-md-1">
            <h4 style={{color:"white"}}></h4>
            <Link to="Home" >Home</Link>
        </div>
        <div className="col-md-1">
            <h4 style={{color:"white"}}></h4>
            <Link to="About">About</Link>    
        </div>
        <div className="col-md-1">
            <h4 style={{color:"white"}}></h4>
            <Link to="Math">Maths</Link>    
        </div>
        <div className="col-md-1">
            <h4 style={{color:"white"}}></h4>
            <Link to="Form">Forms</Link>    
        </div>
        <div className="col-md-1">
            <h4 style={{color:"white"}}></h4>
            <Link to="Total">Caltal</Link>    
        </div>
        <div className="col-md-1">
            <h4 style={{color:"white"}}></h4>
            <Link to="Average">Avg</Link>    
        </div>
    </div>
)

   }


export default Header;
