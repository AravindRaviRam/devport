import React from 'react'; 
import './ToolNavbar.css'
import Smart from './Smart.png'
import profilePic from './arav.png'

const ToolNavbar=()=>{
	return(
		<div>
			<nav className="navbar navbar-light bg-light fixed-top">
			  <p className="navbar-brand text-danger"> <img className="icon-logo" src={Smart} alt=""/>DEZ CENTRIC</p>
    		<div className="navbar-right">
    		    <div className="d-inline p-2"><img className="profilePic" src={profilePic} alt=""/>Arav</div>
				<div className="d-inline p-2"> Logout</div>
    		</div>

			</nav>
		</div>
		)
}

export default ToolNavbar