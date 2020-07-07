import React from 'react';
import './styles/BadgeNew.css';
import headers from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={headers} alt="Logo"/>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
             firstName="Marco"
             lastName="Serrate"
            twiter="serratemarco"
            jobTitle="Front Enginner"
            avatarUrl="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
            />
          </div>
          <div className ="col-6">
            <BadgeForm/>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;