import React from 'react'; 
import './CompanyList.css'
import CompanyRow from './CompanyRow/CompanyRow';
import PageButtons from './PageButtons/PageButtons';

const CompanyList=({objCompanyCat})=>{

	const pagination=(totalpages)=>{
		let pageNum=[]
		for(let i=1; i<=totalpages; i++){pageNum.push(<PageButtons key={i} PageValue={i} />)}
		return pageNum;
	}

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
					<tbody>
						<tr>
							{pagination(10)}
						</tr>				
					</tbody>

				</table>
			</div>	
		</div>
		)}

export default CompanyList