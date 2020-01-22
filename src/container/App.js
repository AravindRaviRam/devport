import React,{Component} from 'react';
import ToolNavbar from '../components/ToolNavbar/ToolNavbar';
import SearchBox from '../components/SearchBox/SearchBox';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import SideNavDash from '../components/SideNavDash/SideNavDash';
import CompanyList from '../components/CompanyList/CompanyList';
import Scroll from '../components/Scroll/Scroll';
import {objCompanyCat,sampleData} from '../components/ObjectLists/ObjectList';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
        iciciComCat:[],
      searchfield:''
    
   
    }
  }

componentDidMount(){

  this.setState({iciciComCat:objCompanyCat.iciciCompanyCat});

}


onSearchChange=(event)=>{
  console.log(event.target.value)
  this.setState({searchfield:event.target.value})
}

render(){
  const {iciciComCat,searchfield}= this.state;

  const filterValues=iciciComCat.filter(company=>{
    return company.companyName.toLowerCase().includes(searchfield.toLowerCase())
  })
  return (
      <div className="mx-auto">
        <ToolNavbar/>
        <SideNavDash/>
        <br/>
        <br/>
        <SearchBox onSearchChange={this.onSearchChange} />
        <FilterMenu/>
        {
        <Scroll>
         { 
          //<CompanyList objCompanyCat={this.state.iciciComCat} />
          
          console.log(filterValues)

        }
        </Scroll>
         }
        
      </div>
    )
}


}

export default App;
