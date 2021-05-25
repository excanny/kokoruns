import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class NavBar3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          show2: false,
          show3: false,
          show4: false,
          company_id: '',
          company_name: '',
          company_number: '',
          company_email: '',
          cac: '',
          company_type:'',
          company_size:'',
          company_about: '',
          company_director: '',
          website:'',
          company_address:'',
          company_state:'',
          company_lga:'',
          founded_month: '',
          founded_year: '',
          field: '',
          states : [],
          lgas : [],
          selectedState : '',
          selectedLGA : '',
          states2 : [],
          lgas2 : [],
          selectedState2 : '',
          selectedLGA2 : '',
          sub_admin_id: '',
          branch_name: '',
          branch_manager: '',
          branch_address:'',
          branch_phone: '',
          companybranches: [],
          loading: true,

        };

        // this.showModal = this.showModal.bind(this);
        // this.hideModal = this.hideModal.bind(this);
        // this.showModal2 = this.showModal2.bind(this);
        // this.hideModal2 = this.hideModal2.bind(this);
        // this.showModal3 = this.showModal3.bind(this);
        // this.hideModal3 = this.hideModal3.bind(this);
        // this.showModal4 = this.showModal4.bind(this);
        // this.hideModal4 = this.hideModal4.bind(this);
        // this.changeState = this.changeState.bind(this);
        // this.changeLGA = this.changeLGA.bind(this);
        // this.changeState2 = this.changeState2.bind(this);
        // this.changeLGA2 = this.changeLGA2.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleSubmit2 = this.handleSubmit2.bind(this);
        // this.handleSubmit3 = this.handleSubmit3.bind(this);
      
      }



      
      async componentDidMount()
      {

        const  url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);

        this.setState({
      
            states: [ {name: 'Abia', code: '1', 
            lgas: [
                    {name: "Aba North", code: '1'},
                    {name: "Aba South", code: '2'},
                  
                    
              ]}, {name: 'Adamawa', code: '2', 
                      lgas: [
                              {name: 'Demsa', code: '1'},
                              {name: 'Fufure', code: '2'},
              ]}, {name: 'AkwaIbom', code: '3', 
              lgas: [
                              {name: 'Abak', code: '1'},
                              {name: 'Eastern Obolo', code: '2'},
          ]}, {name: 'Anambra', code: '4', 
              lgas: [
                              {name: 'Aguata', code: '1'},
                              {name: 'Anambra East', code: '2'},
                              {name: 'Anambra West', code: '3'},
          ]}, {name: 'Bauchi', code: '5', 
              lgas: [
                              {name: 'Alkaleri', code: '1'},
                              {name: 'Bauchi', code: '2'},
                              
          ]}, {name: 'Bayelsa', code: '6', 
                  lgas: [
                              {name: 'Brass', code: '1'},
                              {name: 'Ekeremor', code: '2'},
                              {name: 'Kolokuma Opokuma', code: '3'},
                              {name: 'Nembe', code: '4'},
                              {name: 'Ogbia', code: '5'},
                              {name: 'Sagbama', code: '6'},
                              {name: 'Southern Ijaw', code: '7'},
                              {name: 'Yenagoa', code: '8'}
          ]}, {name: 'Benue', code: '7', 
                  lgas: [
                              {name: 'Agatu', code: '1'},
                              {name: 'Apa', code: '2'},
                              
          ]}, {name: 'Borno', code: '8', 
                  lgas: [
                              {name: 'Abadam', code: '1'},
                              {name: 'Askira-Uba', code: '2'},
          ]} ],
      
        });



        this.setState({
      
            states2: [ {name: 'Abia', code: '1', 
            lgas2: [
                    {name: "Aba North", code: '1'},
                    {name: "Aba South", code: '2'},
                    
              ]}, {name: 'Adamawa', code: '2', 
                      lgas2: [
                              {name: 'Demsa', code: '1'},
                              {name: 'Fufure', code: '2'},
              ]}, {name: 'AkwaIbom', code: '3', 
              lgas2: [
                              {name: 'Abak', code: '1'},
                              {name: 'Eastern Obolo', code: '2'},
          ]}, {name: 'Anambra', code: '4', 
              lgas2: [
                              {name: 'Aguata', code: '1'},
                              {name: 'Anambra East', code: '2'},
                              {name: 'Anambra West', code: '3'},
          ]}, {name: 'Bauchi', code: '5', 
              lgas2: [
                              {name: 'Alkaleri', code: '1'},
                              {name: 'Bauchi', code: '2'},
                              
          ]}, {name: 'Bayelsa', code: '6', 
                  lgas2: [
                              {name: 'Brass', code: '1'},
                              {name: 'Ekeremor', code: '2'},
                              {name: 'Kolokuma Opokuma', code: '3'},
                              {name: 'Nembe', code: '4'},
                              {name: 'Ogbia', code: '5'},
                              {name: 'Sagbama', code: '6'},
                              {name: 'Southern Ijaw', code: '7'},
                              {name: 'Yenagoa', code: '8'}
          ]}, {name: 'Benue', code: '7', 
                  lgas2: [
                              {name: 'Agatu', code: '1'},
                              {name: 'Apa', code: '2'},
                              
          ]}, {name: 'Borno', code: '8', 
                  lgas2: [
                              {name: 'Abadam', code: '1'},
                              {name: 'Askira-Uba', code: '2'},
          ]} ],
        
        });

 
        //var id = this.props.match.params.id;    

        if(localStorage.getItem('access_token'))
        {
        this.setState({ isLogged : true });
        }

    //console.log(localStorage.getItem('access_token'));

    const headers = {

      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 

    }


    let one = `https://sheltered-chamber-63274.herokuapp.com/api/company/${id}`
    // let two = `https://sheltered-chamber-63274.herokuapp.com/api/companybranches/${this.state.company_id}`;
    // let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
     
    const requestOne = axios.get(one, {headers: headers});
   // const requestTwo = axios.get(two, {headers: headers});
    // const requestThree = axios.get(three, {headers: headers});
     
    axios.all([
      requestOne, 
      //requestTwo, 
      //requestThree
    ]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      //const// responseTwo = responses[1]
      // const responesThree = responses[2]
      // use/access the results 

      this.setState({  company_id : responseOne.data.companydetails.company_id, company_name : responseOne.data.companydetails.company_name, founded_month : responseOne.data.companydetails.founded_month, founded_year : responseOne.data.companydetails.founded_year, field : responseOne.data.companydetails.field,
        company_about : responseOne.data.companydetails.about, company_number : responseOne.data.companydetails.phone,
        cac : responseOne.data.companydetails.cac, company_director : responseOne.data.companydetails.company_director, 
        website : responseOne.data.companydetails.website, company_address : responseOne.data.companydetails.company_address,
        selectedState : responseOne.data.companydetails.main_office_location_state, selectedLGA : responseOne.data.companydetails.main_office_location_lga,
         });

     // this.setState({ companybranches : responseTwo.data.companybranches});

     console.log(responseOne);


    })).catch(errors => {
      // react on errors.
      console.log(errors);
    })


  }

       
    render() {

       

        const  url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
      

        return (
           <div className="company-dashboard-banner">
            <div className="banner-top">
              <div align="center" className="inbox-div">
                {/*img class="inbox-icon" src="<?php echo base_url();?>/public/assets/Images/User%20Profile/Inbox%20Logo.png" */}
                <img className="inbox-icon" src="/assets/Images/User Profile/Inbox Logo.png" />
              </div>
              <div align="center" className="banner-logo-div">
                {/*img class="company-logo" src="<?php echo site_url('public/companygalleries/logos/'. $company_details['flogo']); ?>"*/}
                <img className="company-logo" src="/assets/Images/Company  Profile/Company Logo.png" />
              </div>
              <div align="center" className="dropdown-div">
                <div align="left" className="dropdown-menu">
                  <a className="dropdown-item" href="<?php echo site_url();?>company/dashboard">Dashboard</a>
                  <a className="dropdown-item" href="<?php echo site_url();?>company/messages/inbox">Messages</a>
                  <a className="dropdown-item" href="<?php echo site_url();?>company/jobdash">JobDash</a>
                  <a className="dropdown-item" href="<?php echo site_url();?>company/jobs">Jobs Board</a>
                  <a className="dropdown-item" href="<?php echo site_url();?>company/settings">Settings</a>
                </div>
                <img className="dropdown-icon" src="/assets/Images/User Profile/Bars.png" />
              </div>
            </div>
            <div align="center" className="company-name">
              {/*?php 
                          $out = strlen(ucwords(strtolower($company_details['fcompany_name']))) > 45 ? substr(ucwords(strtolower($company_details['fcompany_name'])),0,45)."..." : ucwords(strtolower($company_details['fcompany_name']));
                          echo $out; ?*/} 
              Diamond Bank PLC
            </div>
            <div align="center" className="company-banner-buttons">
              <button id="profile_tab_btn" className="banner-button" onclick="ProfileFunction()">Profile</button>
              <button id="events_tab_btn" className="banner-button" onclick="EventFunction();">Events</button>
              <button id="esolutions_tab_btn" className="banner-button" onclick="ESolutionsFunction()">E-Solutions</button>
              <button id="ebroadcast_tab_btn" className="banner-button" onclick="EBroadcastFunction()">E-Broadcast</button>
              <button id="gallery_tab_btn" className="banner-button" onclick="GalleryFunction()">Gallery</button>
            </div>
          </div>

        );
    }
}

export default NavBar3;