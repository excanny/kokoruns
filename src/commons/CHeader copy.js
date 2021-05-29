import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          company_name: '',
          company_number: '',
          company_email: '',
          cac: '',
          company_type:'',
          company_size:'',
          website:'',
          company_address:'',
          founded_month: '',
          founded_year: '',
          field: '',
          navigate: false,
          loading: true,

        };

        // this.showModal = this.showModal.bind(this);
        // this.hideModal = this.hideModal.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
      
      }

      logout()
      {
         
          localStorage.removeItem("full_token");
          localStorage.removeItem("access_token");
          // this.props.history.push("/signin");
          this.setState({ navigate : true });
          //alert("hi");
      } 

    render() {

        const  navigate  = this.state.navigate;

        if(navigate){
            //return <Redirect to="/signin" />
            window.location.href = "/";
        }

        return (
        <header className="w-100" style={{background:'#f5f5dc'}}>
            <div className="dashboard-header">
                <div className="logo-div">    
                <img src="/assets/Images/Header%20and%20Footer/Logo.png" className="logo" />
                </div>   
                <div className="search-bar-div">
                <input type="text" placeholder="Search for something..." className="search-bar w-75" />
                <button className="search-button" type="submit"><img className="search-icon" src="/assets/Images/Header%20and%20Footer/search.png" /></button>
                </div>
                <div align="right" className="header-buttons">
                <a href="<?php echo site_url(); ?>user/dashboard"> <i className="fas fa-arrows-alt-h" /></a>
                <a onClick={this.logout} className="cursor">
                    <i className="fa fa-power-off text-primary" data-toggle="tooltip" title="Logout" />
                </a>
                </div>
            </div>
            <div id="dashboardnav" className="top-sections">
                <div align="center" className="dashboard-navbar-company-name">
                {this.state.company_name}
                <img className="navbar-logo" src="/assets/Images/Company  Profile/Company Logo.png" style={{ width: '3%'}} />
                </div>
                <div align="center" className="navbar-sections">
                <button id="profile_tab_btn2" className="navbar-sections-buttons" onclick="ProfileFunction()">Profile</button>
                <button id="events_tab_btn2" className="navbar-sections-buttons" onclick="EventFunction();">Events</button>
                <button id="esolutions_tab_btn2" className="navbar-sections-buttons" onclick="ESolutionsFunction()">E-Solutions</button>
                <button id="ebroadcast_tab_btn2" className="navbar-sections-buttons" onclick="EBroadcastFunction()">E-Broadcast</button>
                <button id="gallery_tab_btn2" className="navbar-sections-buttons" onclick="GalleryFunction()">Gallery</button>
                </div>
               
            </div>
            </header>

        );
    }
}

export default CHeader;