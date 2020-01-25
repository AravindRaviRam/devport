import React from 'react'; 
import './CompanyList.css'
import CompanyRow from './CompanyRow/CompanyRow';


const CompanyList=({objCompanyCat})=>{
	return(
		<div className="container-fluid">
			{
				objCompanyCat.map((li,i)=>{

					return(
						<CompanyRow key={i} SNO={li.sno} ComName={li.companyName} Category={li.category} Norms={li.norms} State={li.state}/>
						)
				})
				
			}

			<div>
			 <table>
			 	<tr>
			 		<td>1</td>
			 		<td>2</td>
			 		<td>3</td>
			 		<td>4</td>
			 		<td>5</td>
			 		<td>6</td>
			 		<td>7</td>
			 		<td>8</td>
			 		<td>9</td>
			 	</tr>
			 </table>
			</div>	
		</div>
		)}

export default CompanyList