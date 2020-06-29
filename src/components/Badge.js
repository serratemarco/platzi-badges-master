import React from 'react';
import confLogo from '../images/badge-header.svg'
// import avatar from '../images/avatar.png'
import "./styles/Badge.css";

class Badge extends React.Component{
  render(){
    return <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo conferencia platzi"/>
      </div>
      <div className="Badge__section-name">
        <img className="Badge__avatar"
         src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" alt="avatar"/>
        <h1>Marco<br/>Serrate</h1>
      </div>
      <div className="Badge__section-info">
        <h3>Frontend React.js</h3>
        <div>@serratemar</div>
      </div>   
      <div className="Badge__footer">
      <p>#platziConf</p> 
      </div>
    </div>
  }
}

export default Badge;
