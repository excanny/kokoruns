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
           
           <>
                <header className="bg-white w-100" style={{position: 'fixed', top: 0, width: '100%', zIndex: 9, borderBottom: '1px solid #ccc'}}>
                    <nav>
                    <div className="row">
                        <div className="col-md-3">
                        <a className="navbar-brand" href="#">
                            <img src="/assets/Images/Header%20and%20Footer/Logo.png" alt="Logo" style={{width: 210}} />
                        </a>
                        </div>
                        <div className="col-md-6 pt-3">
                        <div className="input-group mb-2">
                            <input type="text" className="rounded-0 header-search-bar  w-75" placeholder="Search for something..." style={{backgroundImage: 'linear-gradient(45deg, #0691f8, #0691f8, #b73650)', width: '87.5% !important', border: '1px solid #ced4da', height: '2.5rem'}} />
                            <div className="input-group-append">
                            <button className="btn btn-success rounded-0" type="submit" style={{background: '#B23955', border: 'none'}}><i className="fa fa-search" /></button>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <a className href="<?php echo site_url(); ?>user/dashboard"> <i className="fas fa-arrows-alt-h" /></a>
                        <a href="<?php echo site_url(); ?>logout" className="float-right pt-4" onclick="return confirm('Are you sure you want to logout?')">
                            <i className="fa fa-power-off text-primary" data-toggle="tooltip" title="Logout" />
                        </a>
                        </div>
                    </div>
                    </nav>
                </header>
                <div id="navbar" style={{display: 'ncone'}}>
                    <div className="row pt-3 pl-5" style={{borderBottom: '1px solid #ccc'}}>
                    <div className="col-md-12 text-center">
                        <h4 className="text-center"> Company Name</h4>
                    </div>
                    </div>
                    {/* <div class="row pt-3 pl-4 bg-white" style="border-bottom: 1px solid #ccc; margin-top: 12rem;">
                        <div class="col-md-12 text-left">
                            <h6 class="text-left"><strong> fwefewfwe </strong> </h6>
                        </div>
                    </div> */}
                    <div className="row bg-white py-2 text-center" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', paddingLeft: '21.7rem', paddingRight: '24.26rem'}}>
                    <div className="col pl-1 pr-1">
                        <button id="profile_tab_btn2" className="btn btn-danger btn-sm btn-block rounded-0" onclick="ProfileFunction()">Profile</button>
                    </div>
                    <div className="col pl-1 pr-1">
                        <button id="events_tab_btn2" className="btn btn-danger btn-sm btn-block rounded-0" onclick="EventFunction();">Events</button>
                    </div>
                    <div className="col pl-1 pr-1">
                        <button id="esolutions_tab_btn2" className="btn btn-danger btn-sm btn-block rounded-0" onclick="ESolutionsFunction()">E-Solutions</button>
                    </div>
                    <div className="col pl-1 pr-1">
                        <button id="ebroadcast_tab_btn2" className="btn btn-danger btn-sm btn-block rounded-0" onclick="EBroadcastFunction()">E-Broadcast</button>
                    </div>
                    <div className="col pl-1 pr-1">
                        <button id="gallery_tab_btn2" className="btn btn-danger btn-sm btn-block rounded-0" onclick="GalleryFunction()">Gallery</button>
                    </div>
                    </div>
                </div>
   
            </>

        );
    }
}

export default CHeader;