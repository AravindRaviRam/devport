import React,{Component} from 'react';
import {List, AutoSizer }from "react-virtualized"
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
        page:1,
        rows:20,
        window:10
    }
  }

componentDidMount(){

  this.setState({querySet:objCompanyCat.iciciCompanyCat});

}


onSearchChange=(event)=>{
  this.setState({searchfield:event.target.value})
}






renderRow=({index,isScrolling,key,style})=>{
    return(
          <div key={key} style={style}>
              <div>{this.state.querySet[index].companyName}</div>
          </div>
      )
}




render(){
  const {querySet,searchfield}= this.state;


  const filterValues=querySet.filter(company=>{


    return company.companyName.toLowerCase().includes(searchfield.toLowerCase())

  })




  return (
      <div className="mx-auto">
        <ToolNavbar/>
       {
       //<SideNavDash/>
       } 
<br/>
<br/>
<br/>
<br/>
<br/>
        <SearchBox onSearchChange={this.onSearchChange} />
      {  //<FilterMenu/>
      }
        {

        // <Scroll>
        //  { // <CompanyList objCompanyCat={filterValues}/> }
        // </Scroll>
              <AutoSizer>
              {
                ({width, height})=>{
                  return <List
                  rowCount={this.state.querySet.length}
                  width={width}
                  height={height}
                  rowHeight={10}
                  rowRenderer={({index,isScrolling,key,style})=>{return(<div key={key} style={style}>{console.log(filterValues)}</div> )}}

                  />
                }
              }
              </AutoSizer>         
         }

        
      </div>
    )
}


}

export default App;
