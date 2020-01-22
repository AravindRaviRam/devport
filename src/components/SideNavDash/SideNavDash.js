import React from 'react';
import './SideNavDash.css'
import { FaSearch } from "react-icons/fa";

const SideNavDash=()=>{
	return(
		<div className="SideNavDash"> 
		<ul>
			<li><FaSearch/> Company Categories</li>
			<li><FaSearch/> Check Eligibility</li>
			<li><FaSearch/> EMI Calculator</li>
			<li><FaSearch/>  Leads</li>
		</ul>
		</div>
		)
}
export default SideNavDash;