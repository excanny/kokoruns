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
                  <div className="row" style={{marginTop: '8rem'}}>
                    <div className="col-lg-8 mx-auto px-0">
                      <div className="p-3 bg-dark background_image" style={{backgroundImage: 'url("/assets/Css/CompanyDashboard/image/company banner.jpg")', backgroundColor: '#cccccc', height: 305, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <div className="row py-2">
                          <div className="col-lg-1">
                            {/* <i class="far fa-envelope text-white" style="font-size: 1.5rem;"></i> */}
                            <img src="<?php echo base_url();?>/public/assets/Images/User%20Profile/Inbox%20Logo.png" alt width="55%" />
                          </div>
                          <div className="col-lg-6 text-right pt-3" style={{paddingRight: '1.3rem'}}>
                            <img src="Company%20Logo.png" style={{border: '10px solid #fff'}} alt="logo" width="120px" height="120px" />
                          </div>
                          <div className="col-lg-5 text-right">
                            {/* //<i class="fas fa-bars fa-lg text-white"></i> */}
                            <div className="dropdown dropleft float-right">
                              <i className="fas fa-bars text-white cursor" data-toggle="dropdown" style={{fontSize: '1.5rem'}} />
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="<?php echo site_url();?>company/dashboard">Dashboard</a>
                                <a className="dropdown-item" href="<?php echo site_url();?>company/messages/inbox">Messages</a>
                                <a className="dropdown-item" href="<?php echo site_url();?>company/jobdash">JobDash</a>
                                <a className="dropdown-item" href="<?php echo site_url();?>company/jobs">Jobs Board</a>
                                <a className="dropdown-item" href="<?php echo site_url();?>company/settings">Settings</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row py-2">
                          <div className="col-lg-12 text-center text-white">
                            <h4 className="header-title" data-toggle="tooltip" data-placement="bottom" title="<?php echo ucwords(strtolower($company_details['fcompany_name'])); ?>" style={{fontSize: 45}}> 
                              efeferferg
                            </h4>
                          </div>
                        </div>
                        <div className="row py-2">
                          <div className="col m-0 p-1">
                            <button id="profile_tab_btn" className="btn btn-block rounded-0" onclick="ProfileFunction()" style={{background: '#fff'}}>Profile</button>
                          </div>
                          <div className="col m-0 p-1">
                            <button id="events_tab_btn" className="btn btn-danger btn-block rounded-0" onclick="EventFunction();">Events</button>
                          </div>
                          <div className="col m-0 p-1">
                            <button id="esolutions_tab_btn" className="btn btn-danger btn-block rounded-0 tab" style={{background: '#DC232D'}} onclick="ESolutionsFunction()">E-Solutions</button>
                          </div>
                          <div className="col m-0 p-1">
                            <button id="ebroadcast_tab_btn" className="btn btn-danger btn-block rounded-0 tab" onclick="EBroadcastFunction()">E-Broadcast</button>
                          </div>
                          <div className="col m-0 p-1">
                            <button id="gallery_tab_btn" className="btn btn-danger btn-block rounded-0" onclick="GalleryFunction()">Gallery</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        );
    }
}

export default NavBar3;