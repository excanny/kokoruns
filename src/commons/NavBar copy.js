import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <div className="banner rounded-0">
                <div className="dp-icons">
                <div align="center" className="inbox-div pl-3 pt-2">
                    <a href="user/messages"><button className="menu-bar-button-left"><img className="menu-bar" src="assets/Images/User%20Profile/Inbox%20Logo.png" /></button></a>
                </div>
                <div align="center" className="dp-div" style={{marginTop: '1rem'}}>  
                    {/* <img data-toggle="modal" data-target="#changeProfilePicModalx" className="dp cursor" src="<?php echo base_url('/public/profilepics/600/'. $user_details['fprofile_image']);?>" title="Change Profile Picture" />  */}
                    <img src="data:image/png;base64,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" />
                </div>
                <div align="center" className="menu-bar-div">
                    {/* <button class="menu-bar-button-right" href=""><img class="menu-bar" src="<?php echo base_url();?>/public/assets/Images/User%20Profile/Bars.png"></button> */}
                    <div className="row">
                    <div className="col">
                        <div className="dropdown dropleft pr-3 pt-2">
                        <i className="fa fa-bars text-white cursor" data-toggle="dropdown" style={{fontSize: '1.5rem'}} />
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="user/dashboard">Dashboard</a>
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
                </div> 
                </div>    
                <div align="center" className="user-name">
                <h3 className="mb-0 mt-0" style={{fontSize: 50}}> {/*?php echo ucwords(strtolower($user_details['ffirst_name'])); ?*/} {/*?php echo ucwords(strtolower($user_details['flast_name'])); ?*/} </h3> 
                </div> 
                <div align="center" className="user-profession"><h5>{/*?php echo ucwords(strtolower($user_details['fprofession'])); ?*/}</h5></div>
                <div align="center" className="sections" style={{marginBottom: '1rem'}}>
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
