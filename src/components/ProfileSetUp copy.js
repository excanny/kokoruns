import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export class ProfileSetUp extends Component {

    constructor() {
        super();
        this.state = {
          show: false,
          first_name: '',
          last_name: '',
          age_range: '',
          user_phonenum: '',
          user_email: '',
          educational_qualification: '',
          profession_or_craft: '',
          employment_type: '',
          states : [],
          lgas : [],
          selectedState : '',
          selectedLGA : '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleRoleChange = this.handleRoleChange.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeLGA = this.changeLGA.bind(this);
  
      }

   

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      changeState(e) {
        this.setState({selectedState: e.target.value});
        this.setState({lgas : this.state.states.find(state => state.name === e.target.value).lgas});
            console.log(e.target.value);
      }
    
      changeLGA(e) {
        this.setState({selectedLGA: e.target.value});
        // const stats = this.state.states.find(cntry => cntry.name === this.state.selectedState).lgas;
        // this.setState({lgas : stats.find(stats => stats.name === event.target.value).lgas});
            console.log(e.target.value);
      }
    
    

      async componentDidMount() {


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
    
      }


      handleSubmit(e) {
        // Form submission logic
        e.preventDefault();

        this.setState({ isLoading: true });

        this.setState({ [e.target.name]: e.target.value });

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        const data = { first_name: this.state.first_name, last_name: this.state.last_name, age_range: this.state.age_range, user_phonenum: this.state.user_phonenum, user_email: this.state.user_email, educational_qualification: this.state.educational_qualification, profession: this.state.profession_or_craft, employment_type:  this.state.employment_type, state: this.state.selectedState, lga: this.state.selectedLGA};  

        //console.log(data);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/profilesetup`, data, {headers: headers})
        .then((response) => {
           
          //  if (response.data.success === true) 
          //  {
          //     this.setState({
          //       isVerifyComplete: 1,
          //     });
             
          //     this.props.history.push("/get-started");
          //  }  
          //  else 
          //  {
          //     this.props.history.push('/signup'); 
          //  }  

           this.props.history.push("/user-dashboard");

           this.setState({ show: false });
         
           console.log(response);

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }



    render() {


        return (
            <>
       <Header/>


        <section id="UserInfoContainer" className="user-info-container">  

              <form onSubmit={this.handleSubmit}>
                <div id="rounded-corner" align="center" className="form-table">
                  <div><div align="center"><label><h1 className="login-label">Profile Setup</h1></label></div></div>
                  <p>You are required to set up your profile. This is a one-time initial set up and you can always change them later in future from your dashboard. All fields marked * are mandatory</p>
                  <div>
                    <div className="row mt-2">
                      <div align="left" className="col">
                        <div style={{paddingBottom: 10}}>
                          First Name<b>*</b></div>
                        <input className="form-control" type="text" id="first_name" name="first_name" value={this.state.first_name} onChange={this.handleChange} placeholder required />  
                      </div>  
                      <div align="left" className="col">
                        <div style={{paddingBottom: 10}}>
                          Last Name (Surname)<b>*</b></div>
                        <input className="form-control" type="text" id="last_name" name="last_name" value={this.state.last_name} onChange={this.handleChange} placeholder required />    
                      </div>
                    </div>
                    <div className="row mt-2 mt-2">
                        <div className="col">
                          <div>Age Range<b>*</b></div>
                        <select className="form-control" id="age-range" name="age_range" value={this.state.age_range} onChange={this.handleChange} required>
                          <option value />
                          <option value="15-18">15-18</option>
                          <option value="19-25">19-25</option>
                          <option value="26-35">26-35</option>
                          <option value="36-50">36-50</option>
                          <option value="51-70">51-70</option>
                          <option value="71+">71+</option>
                        </select>    
                      </div>  

                       <div className="col">
                          Phone Number<b>*</b>
                        <input className="form-control" type="number" id="user_phonenum" name="user_phonenum" value={this.state.user_phonenum} onChange={this.handleChange} placeholder required />      
                      </div>    
                      
                    </div>
                    <div className="row mt-2">
                          <div className="col">
                            <label>Email<b>*</b></label>
                              <input className="form-control" type="email" id="user_email" name="user_email" value={this.state.user_email} onChange={this.handleChange} />
                          </div>
                    </div>
                      {/*div align="left" class="h3-label"><div style="padding-bottom: 10px">
                    Street / Estate Name</div>
                    <input class="form-input" type="text" id="user_street/estate" name="user_street/estate" placeholder="" required>    
                    </div*/}
                      <div  className="row mt-2">
                        <div style={{paddingBottom: 10}}>
                          Academic Level<b>*</b></div>
                        <select name="educational_qualification" id className="form-control" value={this.state.educational_qualification} onChange={this.handleChange} required>
                          <option value>Select one</option>
                          <option value="None">None</option>
                          <option value="First School Leaving Certificate">First School Leaving Certificate</option>
                          <option value="Junior Secondary School Certificate">Junior Secondary School Certificate</option>
                          <option value="Senior Secondary School Certificate">Senior Secondary School Certificate</option>
                          <option value="National Certificate of Education">National Certificate of Education</option>
                          <option value="Ordinary National Diploma">Ordinary National Diploma</option>
                          <option value="Higher National Diploma">Higher National Diploma</option>
                          <option value="Bachelor's Degree">Bachelor's Degree</option>
                          <option value="Master's Degree">Master's Degree</option>
                          <option value="Doctorate's Degree">Doctorate's Degree</option>
                        </select>   
                      </div>
                      <div align="left" className="row mt-2">
                        <div style={{paddingBottom: 10}}>
                          Profession<b>*</b></div>
                     
                        <input type="text" className="form-control" name="profession_or_craft" id="profession_or_craft" value={this.state.profession_or_craft} onChange={this.handleChange} autoComplete="off" /> 
                        <div className="job-options-box" style={{overflow: 'auto'}}>
                        </div>
                        
                      </div>      
                      <div className="row mt-2">
                        <div className="col">
                          Desired Employment Type<b>*</b>
                            <select className="form-control" id="employment_type" name="employment_type" value={this.state.employment_type} onChange={this.handleChange} required>
                              <option value>Select one</option>
                              <option value="Full Time">Full Time</option>
                              <option value="Part Time">Part Time</option>
                              <option value="Remote">Remote</option>
                              <option value="Contract">Contract</option>
                              <option value="Internship">Internship</option>
                            </select>
                          </div>  
                        </div>         
                        <div className="row mt-4">
                            <div classname="col-md-6">
                              Current Location<b>*</b>
                              <select value={this.state.selectedState} onChange={this.changeState} className="form-control">
                                    <option>Select State</option>
                                    {this.state.states.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>

                               
                             
                          </div>
                          <div className="col-md-6">
                          <select value={this.state.selectedLGA} onChange={this.changeLGA} className="form-control">
                                        <option>Select LGA</option>
                                            {this.state.lgas.map((e, key) => {
                                                return <option key={key}>{e.name}</option>;
                                            })}
                                    </select>
                          </div>
                      </div>
                      <br />
                     

                    </div>       
                  </div> 
                  <div colSpan={2} align="center">
                    <br />
                    <button type className="profile-setup-proceed-button btn btn-primary" id>Proceed</button>
                    <br />
                    <p>
                      <a className="back-to-home btn " href="index.html">Back to Home</a></p>
                  </div>
              
              </form>

        </section>


        <Footer/>  

           
        </>

        )
    }
}

export default ProfileSetUp
