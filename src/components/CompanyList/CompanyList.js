import React from 'react'; 
import './CompanyList.css'
import CompanyRow from './CompanyRow/CompanyRow';



const CompanyList=({sampleData,objCompanyCat})=>{
	return(
		<div className="container">
			{
				objCompanyCat.map((li,i)=>{

					return(
						<CompanyRow SNO={li.sno} ComName={li.companyName} Category={li.category} Norms={li.norms} State={li.state}/>
						)
				})
				
			}	
		</div>
		)}

export default CompanyList