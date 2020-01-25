import React,{Component} from 'react';
import ToolNavbar from '../components/ToolNavbar/ToolNavbar';
import SearchBox from '../components/SearchBox/SearchBox';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import SideNavDash from '../components/SideNavDash/SideNavDash';
import CompanyList from '../components/CompanyList/CompanyList';
import TableHeader from '../components/TableHeader/TableHeader';
import Scroll from '../components/Scroll/Scroll';
import {objCompanyCat,sampleData} from '../components/ObjectLists/ObjectList';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
        querySet:[],
        searchfield:'',
        'page':1,
        'rows':20,
        'window':10

    }
  }

componentDidMount(){

  this.setState({querySet:objCompanyCat.iciciCompanyCat});

}


onSearchChange=(event)=>{
  this.setState({searchfield:event.target.value})
}



pageButton=(pages)=>{

return console.log(pages)
}



pagination=(querySet,page,rows)=>{
  let trimStart=(page-1)*rows
  let trimEnd=trimStart + rows
  let trimmedData=querySet.slice(trimStart,trimEnd)
  let pages=Math.round(querySet.length/rows);

  return{
    'querySet':trimmedData,
    'pages':pages
  }

}




buildTable=(table)=>{

  let data=this.pagination(table,this.state.page,this.state.rows)
  // console.log(data.querySet)
  this.pageButton(data.pages)
  return data.querySet


}


render(){
  const {querySet,searchfield}= this.state;

  const filterValues=querySet.filter(company=>{
    return company.companyName.toLowerCase().includes(searchfield.toLowerCase())

  })




  return (
      <div className="mx-auto">
        <ToolNavbar/>
        <SideNavDash/>
<br/>
<br/>
<br/>
<br/>
<br/>
        <SearchBox onSearchChange={this.onSearchChange} />
        <FilterMenu/>
        {

        <Scroll>
         { 

            <CompanyList objCompanyCat={this.buildTable(filterValues)} />

         }
        </Scroll>
         }
        
      </div>
    )
}


}

export default App;
