import React from 'react'; 
import './CompanyList.css'
import CompanyRow from './CompanyRow/CompanyRow';


const CompanyList=({sampleData,objCompanyCat})=>{
	return(
		<div className="container-fluid">
			{
				objCompanyCat.map((li,i)=>{

					return(
						<CompanyRow key={i} SNO={li.sno} ComName={li.companyName} Category={li.category} Norms={li.norms} State={li.state}/>
						)
				})
				
			}	
		</div>
		)}

export default CompanyList