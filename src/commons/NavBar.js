import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            profession: '',
          userdetails: [],
          loading: true,

        };
        

        // this.showModal = this.showModal.bind(this);
        // this.hideModal = this.hideModal.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleRoleChange = this.handleRoleChange.bind(this);
  
      }


    jsUcfirst(string) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


 async componentDidMount()
  {

    if(localStorage.getItem('access_token'))
    {
      this.setState({ isLogged : true });
    }

    //console.log(localStorage.getItem('access_token'));


    const headers = {

      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 

    }

    try
    {
      
        // fetch data from a url endpoint
        // const response = axios.get(`https://api-business.azurewebsites.net/api/BusinessInfos/get`, {headers: headers});
       const response = await axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/userdetails`, {headers: headers});

        // this.setState({ bankAccountNumber : response.data.data.bankAccountNo });

        // console.log(this.state.bankAccountNo);
        
        // console.log(response.data.data.bankAccountNo);

        this.setState({ first_name : response.data.user_details.first_name, last_name: response.data.user_details.last_name, profession: response.data.user_details.profession});

        console.log(response.data.user_details);


    } 
    catch(error) 
    {
        // console.log("error", error);
        // appropriately handle the error
        console.log(error.response);
    }
  }



    render() {
        return (
           
            <div className="banner">
            <div className="dp-icons">
                <div align="center" className="inbox-div">
                <button className="menu-bar-button-left" style={{border: 'none', outline: 'none'}}><img className="menu-bar" src="assets/Images/User%20Profile/Inbox%20Logo.png" /></button>
                </div>
                <div align="center" className="dp-div">  
                <img className="dp" src="assets/Images/User%20Profile/User%20DP.png" /> 
                </div>
                <div align="center" className="menu-bar-div">
                           
                            <div className="dropdown dropleft pr-3 pt-2">
                        {/* <i className="fa fa-bars text-white cursor" data-toggle="dropdown" style={{fontSize: '1.5rem'}} /> */}
                        <button className="menu-bar-button-right" data-toggle="dropdown" style={{border: 'none', outline: 'none'}}><img className="menu-bar" src="assets/Images/User%20Profile/Bars.png" /></button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="user-dashboard">Dashboard</a>
                            <a className="dropdown-item" href="user-teams">Teams</a>
                            <a className="dropdown-item" href="user-messages">Messages</a>
                            <div className="dropdown-divider" />
                            <div className="dropdown-header pl-3">Job Dash</div>
                            <a className="dropdown-item" href="user-jobs">Your Jobs</a>
                            <a className="dropdown-item" href="user/jobdash">Job Invites</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="user-events">Events</a>
                            <a className="dropdown-item" href="user-allaboutyou">All About You</a>
                            <a className="dropdown-item" href="user-jobs">Jobs Board</a>
                            <a className="dropdown-item" href="user-recommendations">Recommendations</a>
                            <a className="dropdown-item" href="user-settings">Settings</a>
                            <a className="dropdown-item" href="logout">Logout</a>
                        </div>
                        </div>
                </div> 
            </div>    
            {/*a style="text-decoration: none" href=""><div align="center" class="user-link">kokoruns.com/alfredgreg</div></a*/}
            <div align="center" className="user-name">{ this.state.first_name !== null && this.jsUcfirst(this.state.first_name)} { this.state.last_name !== null &&this.jsUcfirst(this.state.last_name)}<img src className="verification" /> </div> 
            <div align="center" className="user-profession">{ this.state.profession !== null && this.jsUcfirst(this.state.profession)}</div>
            {/*-------VIEW AND HIDE BIO BUTTONS-------*/}       
            {/*div id="view-bio-div" onclick="ViewBio()" align="center" class="view-bio-div">
            <button align="center" class="view-bio-button">View Bio</button></div*/}
            {/*div id="hide-bio-div" onclick="HideBio()" align="center" class="hide-bio-div">
                <button align="center" class="hide-bio-button">Hide Bio</button></div*/}  
            {/*-------VIEW AND HIDE BIO BUTTONS-------*/}            
            <div align="center" className="sections">
                 <div>    
                    <Link to={"/user-dashboard-experience"}><button style={{fontWeight: 'bold'}} id="exp-b" className="sections-div-active"> Experience </button> </Link>
                </div>
                <div>      
                    <Link to={"/user-dashboard-education"}><button id="edu-b" className="sections-div">Education</button></Link>
                </div>
                <div>    
                    <Link to={"/user-dashboard-portfolio"}><button id="port-b" className="sections-div">Portfolio</button></Link>
                </div>
                   
            </div>    
            </div>
        )
    }
}

export default NavBar
