import React, { Component } from 'react';
import logo from '../logo.svg';


class CHeader extends Component{
  render(){
    return(
      <div className='headerConstainer'>
        <img src={logo} className='headerLogo' alt="logo"></img>
        <h2>
          Witaj w przykładownym serwisie
        </h2>
      </div>
    );
  }
}

export default CHeader;