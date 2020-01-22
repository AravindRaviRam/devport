import React from 'react'; 
import './CompanyRow.css'




const CompanyRow=({SNO,ComName,Category,Norms,State})=>{
	return(
		<div className="container">
		<div className="row tabCell">
			<div className="col-md-2">{SNO}</div>
			<div className="col-md-3">{ComName}</div>
			<div className="col-md-2">{Category}</div>
			<div className="col-md-3">{Norms}</div>
			<div className="col-md-2">{State}</div>
		</div>
		</div> 
		)
}
 
export default CompanyRow
