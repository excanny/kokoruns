import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import {Link} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode'; // import dependency


export class Dashboard extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      
        showBioForm: false,
        first_name: '',
        last_name: '',
        gender: '',
        profession:'',
        marital_status: '',
        disabled: '', 
        educational_qualification: '', 
        other_professions1: '',
        other_professions2: '',
        other_professions3: '',
        other_professions4: '', 
        languages1: '',
        languages2: '',
        languages3: '',
        languages4: '',
        languages5: '',
        current_employer: '', 
        preferred_job: '', 
        preferred_job_location_state: '', 
        preferred_job_location_lga: '', 
        profession: '', 
        availability_start_date: null,
        employment_type: '', 
        states : [],
        lgas : [],
        selectedState : '',
        selectedLGA : '',
        states2 : [],
        lgas2 : [],
        selectedState2 : '',
        selectedLGA2 : '',
        availability_start_date2_show: false,
        about: '',
        isLoading: false,

    }

     
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showEditBioForm = this.showEditBioForm.bind(this);
      this.cancelEditBioForm = this.cancelEditBioForm.bind(this);
      this.changeState = this.changeState.bind(this);
      this.changeLGA = this.changeLGA.bind(this);
      this.changeState2 = this.changeState2.bind(this);
      this.changeLGA2 = this.changeLGA2.bind(this);
      this.onDateChange = this.onDateChange.bind(this);

  }


  onDateChange (e) {
    
    this.setState({availability_start_date: e.target.value});
    console.log(e.target.value);
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

  changeState2(e) {
    this.setState({selectedState2: e.target.value});
    this.setState({lgas2 : this.state.states2.find(state => state.name === e.target.value).lgas2});
        console.log(this.state.lgas2);
  }

  changeLGA2(e) {
    this.setState({selectedLGA2: e.target.value});
    // const stats = this.state.states.find(cntry => cntry.name === this.state.selectedState).lgas;
    // this.setState({lgas : stats.find(stats => stats.name === event.target.value).lgas});
        console.log(e.target.value);
  }


  showEditBioForm()
  {
    //this.setState({showBioForm : true});
    //alert("hi");
    this.setState({showBioForm: true });
  }

  cancelEditBioForm()
  {
    //this.setState({showBioForm : true});
    //alert("hi");
    this.setState({showBioForm: false });
  }

  setGender(e) {
    this.setState({gender: e.target.value });
    //console.log(e.target.value);
  }

  setMaritalStatus(e) {
    this.setState({marital_status: e.target.value });
    //console.log(e.target.value);
  }


  setDisabled(e) {
    this.setState({disabled: e.target.value });
    //console.log(e.target.value);
  }

  setStartDate(e) {


    if(e.target.value == "select_date")
    {
      this.setState({availability_start_date2_show : true });
      this.setState({availability_start_date: e.target.value });
      console.log(e.target.value);
    }
    else if(e.target.value == "not yet")
    {
      
      this.setState({availability_start_date2_show : false });
      this.setState({availability_start_date:  null});
    }

    else if(e.target.value == "now")
    {
      var todayDate = new Date().toISOString().slice(0, 10);
      this.setState({availability_start_date2_show : false });
      this.setState({availability_start_date:  todayDate});
    }
    //  console.log(e.target.value);
  }


  jsUcfirst(string) 
  {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }


  async componentDidMount()
  {

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

    if(localStorage.getItem('access_token'))
    {
      this.setState({ isLogged : true });
    }

    //console.log(localStorage.getItem('access_token'));

    const headers = {

      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 

    }


    let one = "https://sheltered-chamber-63274.herokuapp.com/api/userdetails"
    // let two = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
    // let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
     
    const requestOne = axios.get(one, {headers: headers});
    // const requestTwo = axios.get(two);
    // const requestThree = axios.get(three);
     
    axios.all([
      requestOne, 
      //requestTwo, 
      //requestThree
    ]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      // const responseTwo = responses[1]
      // const responesThree = responses[2]
      // use/access the results 

      this.setState({ first_name : responseOne.data.user_details.first_name, last_name : responseOne.data.user_details.last_name, gender : responseOne.data.user_details.gender, profession: responseOne.data.user_details.profession, marital_status : responseOne.data.user_details.marital_status, disabled : responseOne.data.user_details.disabled, current_employer : responseOne.data.user_details.current_employer, other_professions1 :  responseOne.data.user_details.other_professions1,
        other_professions2 :  responseOne.data.user_details.other_professions2, other_professions3 :  responseOne.data.user_details.other_professions3, employment_type: responseOne.data.user_details.employment_type, preferred_job: responseOne.data.user_details.preferred_job,
        other_professions4 :  responseOne.data.user_details.other_professions4, educational_qualification :  responseOne.data.user_details.educational_qualification, languages1 : responseOne.data.user_details.languages1, selectedState: responseOne.data.user_details.state, selectedLGA: responseOne.data.user_details.lga,
        selectedState2: responseOne.data.user_details.preferred_job_location_state, selectedLGA2: responseOne.data.user_details.preferred_job_location_lga,
        languages2 : responseOne.data.user_details.languages2, languages3 : responseOne.data.user_details.languages3, languages4 : responseOne.data.user_details.languages4, languages5 : responseOne.data.user_details.languages5, about : responseOne.data.user_details.about,
         });

      console.log(this.state);

    })).catch(errors => {
      // react on errors.
      console.log(errors);
    })


  }



  async handleSubmit(e) {
    // Form submission logic
    e.preventDefault();


    console.log(localStorage.getItem('access_token'));

    this.setState({ isLoading: true });

    this.setState({ [e.target.name]: e.target.value });

    const headers = {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
    }

    const data = { gender: this.state.gender, marital_status: this.state.marital_status, 
      disabled: this.state.disabled, educational_qualification: this.state.educational_qualification, 
      other_professions1: this.state.other_professions1, other_professions2: this.state.other_professions2, 
      other_professions3: this.state.other_professions3, other_professions4: this.state.other_professions4,
      languages1: this.state.languages1, languages2: this.state.languages2, languages3: this.state.languages3,
      languages4: this.state.languages4, languages5: this.state.languages5, current_employer: this.state.current_employer,
      preferred_job: this.state.preferred_job, preferred_job_location_state: this.state.selectedState2, preferred_job_location_lga: this.state.selectedLGA2,
      availability_start_date: this.state.availability_start_date, employment_type: this.state.employment_type, state: this.state.selectedState, lga: this.state.selectedLGA
    
    };  

    //console.log(data);


      try 
      {
          // fetch data from a url endpoint
          //const response = await  axios.post(`http://127.0.0.1:8000/api/addeducation`, data, {headers: headers});
          const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/updatebio`, data, {headers: headers});
          
          console.log(response);

          this.setState({ educations: response.data.educations, loading: false, show: false });

          //window.location.href = "/user-dashboard-education";

          //this.props.history.push("/user-dashboard-education");

          // console.log(response.data.expe[0]);

         this.cancelEditBioForm();

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
            <>

          <Header/>

            
          <div style={{background: '#f2f2f2'}} className="mb-5">

              <section id="UserInfoContainer" className="user-info-container" >  

                <NavBar/>

            </section>

        
          <div id="user-bio" align="center"> 

          {this.state.showBioForm ? null :
            <div id="bio-info" className="bio-info">
              <div id="user-bio-dp-container" className="user-bio-dp-container">
                <div align="left" className="bio-dp-div">  
                  <img className="bio-dp" src="assets/Images/User%20Profile/User%20DP.png" /> 
                </div>   
                <div align="left" className="bio-user-name">{ this.state.first_name !== null && this.jsUcfirst(this.state.first_name)} { this.state.last_name !== null && this.jsUcfirst(this.state.last_name)}<img src className="verification" /> </div> 
                <div align="left" className="bio-user-profession">{ this.state.profession !== null && this.jsUcfirst(this.state.profession)}</div>       
              </div> 
              {/*USER DP SCRIPT*/}   
              {/*USER DP SCRIPT*/}    
              <label title="Number of people Recommended by" className="bio-info-label">Recommendations    
              </label>&nbsp;
              <a href="#">47</a><br style={{lineHeight: 2.0}} />
              <label title="Gender" className="bio-info-label">Gender: <span className="text-dark">{ this.state.gender !== null && this.jsUcfirst(this.state.gender)} </span> 
              </label>
              <br style={{lineHeight: 2.0}} />
              <label title="Marital Status" className="bio-info-label">Marital Status: <span className="text-dark">{ this.state.marital_status !== null && this.jsUcfirst(this.state.marital_status)}  </span>  
              </label>
              <br style={{lineHeight: 2.0}} />    
              <label title="Academic Level" className="bio-info-label">Educational Qualification: <span className="text-dark">{ this.state.educational_qualification !== null && this.jsUcfirst(this.state.educational_qualification)}</span>   
              </label>
              <br style={{lineHeight: 2.0}} /> 
              <label title="Location (State, L.G.A)" className="bio-info-label">Location: <span className="text-dark">{ this.state.selectedState !== null && this.jsUcfirst(this.state.selectedState)}  { this.state.selectedLGA !== null && this.jsUcfirst(this.state.selectedLGA)}  </span>
              </label>
              <br style={{lineHeight: 2.0}} />
              <label className="bio-info-label">I work for:   
              </label> 
              <a href="#">{ this.state.current_employer !== null && this.jsUcfirst(this.state.current_employer)}</a><br style={{lineHeight: 2.0}} /> 
              <label className="bio-info-label">My Other Professions: 
              </label>
              { this.state.other_professions1 !== null && this.jsUcfirst(this.state.other_professions1)} { this.state.other_professions2 !== null && this.jsUcfirst(this.state.other_professions2)} { this.state.other_professions3 !== null && this.jsUcfirst(this.state.other_professions3)} { this.state.other_professions4 !== null && this.jsUcfirst(this.state.other_professions4)}<br style={{lineHeight: 2.0}} />
              <label className="bio-info-label"> I Speak:
              </label>
              { this.state.languages1 !== null && this.jsUcfirst(this.state.languages1)}, { this.state.languages2 !== null && this.jsUcfirst(this.state.languages2)}, { this.state.languages3 !== null && this.jsUcfirst(this.state.languages3)}, { this.state.languages4 !== null && this.jsUcfirst(this.state.languages4)}, { this.state.languages5 !== null && this.jsUcfirst(this.state.languages5)}<br style={{lineHeight: 2.0}} />    
              <label className="bio-info-label">Looking for a:    
              </label>
              <ul>
                <li>Fulltime Job as a Chef, in Kosofe.</li>
                <li>Partime Job as a Waiter, in Lekki Phase I</li>
                <li>Volunteer work as an Environmental Activist</li>   
              </ul>  
              <label className="bio-info-label">About me   
              </label><br />
              
              {this.state.about}

            
              <div className="edit-bio-button-div">
                <button onClick={this.showEditBioForm} className="edit-bio-button">Edit Bio</button> 
              </div>
            </div>

          }

            {this.state.showBioForm ?

            <div id="bio-form-div" className="bio-info-form-div mt-3">
              <form className="bio-info-form" onSubmit={this.handleSubmit}>
                <div className="edit-bio-label">
                  Edit Bio    
                </div>    
                <div className="gender-div">
                  <div className="gender-padding-right">   
                    <div className="bio-form-label">Your Gender<b>*</b></div> 
                      <div onChange={e => this.setGender(e)}>
                        <input type="radio" id="male" name="gender" value="Male" checked={this.state.gender === "Male"} />
                        <label htmlFor="male"> &nbsp; Male</label><br />
                        <input type="radio" id="female" name="gender" value="Female" checked={this.state.gender === "Female"} />
                        <label htmlFor="female"> &nbsp; Female</label> 
                      </div>
                  </div>
                  <div onChange={e => this.setMaritalStatus(e)}>    
                    <div className="bio-form-label">Married<b>*</b></div> 
                    <input type="radio" id="male" name="marital_status" value="Yes" checked={this.state.marital_status === "Yes"} />
                    <label htmlFor="male"> &nbsp;Yes</label><br />
                    <input type="radio" id="female" name="marital_status" value="No" checked={this.state.marital_status === "No"} />
                    <label htmlFor="female"> &nbsp;No</label>
                  </div>    
                </div>
                <div className="disabled-div" onChange={e => this.setDisabled(e)}>
                  <div className="bio-form-label">Disabled<b>*</b></div>
                  <input type="radio" id="yes" name="disabled" value="Yes" checked={this.state.disabled === "Yes"} />
                  <label htmlFor="yes">&nbsp;Yes</label>
                  &nbsp;&nbsp;
                  <input type="radio" id="no" name="disabled" value="No" checked={this.state.disabled === "No"} />
                  <label htmlFor="no">&nbsp;No</label>     
                </div>    
                <div className="bio-form-div">
                  <div className="bio-form-label">Your Academic Level<b>*</b></div> 
                  <select className="bio-form-select" value={this.state.educational_qualification} onChange={this.handleChange} name="educational_qualification"> 
                        <option value="">Select one</option>
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
                <div className="bio-form-div">
                  <div className="bio-form-label">Other Profession 1</div> 
                    <input type="text" class="form-select" name="other_professions1" value={this.state.other_professions1} onChange={this.handleChange} autocomplete="off"/>  
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Other Profession 2</div> 
                  <input type="text" class="form-select" name="other_professions2" value={this.state.other_professions2} onChange={this.handleChange} autocomplete="off"/>
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Other Profession 3</div> 
                  <input type="text" class="form-select" name="other_professions3" value={this.state.other_professions3} onChange={this.handleChange} autocomplete="off"/> 
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Other Profession 4</div> 
                  <input type="text" class="form-select" name="other_professions4" value={this.state.other_professions4} onChange={this.handleChange} autocomplete="off"/> 
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 1<b>*</b></div> 
                  <select class="bio-form-select" name="languages1" value={this.state.languages1} onChange={this.handleChange}>
                    <option value="">Select one</option>
                    <option value="English">English</option>
                    <option value="Yoruba">Yoruba</option>
                </select>   
                </div>   
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 2</div> 
                  <select className="bio-form-select" name="languages2" value={this.state.languages2} onChange={this.handleChange}>    
                    <option value="">Select one</option>
                    <option value="English">English</option>
                    <option value="Yoruba">Yoruba</option>
                  </select> 
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 3</div> 
                  <select className="bio-form-select" name="languages3" value={this.state.languages3} onChange={this.handleChange}>    
                    <option value="">Select one</option>
                    <option value="English">English</option>
                    <option value="Yoruba">Yoruba</option>
                  </select>    
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 4</div> 
                   <select className="bio-form-select" name="languages4" value={this.state.languages4} onChange={this.handleChange}>    
                    <option value="">Select one</option>
                    <option value="English">English</option>
                    <option value="Yoruba">Yoruba</option>
                  </select>   
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 5</div> 
                  <select className="bio-form-select" name="languages5" value={this.state.languages5} onChange={this.handleChange}>    
                    <option value="">Select one</option>
                    <option value="English">English</option>
                    <option value="Yoruba">Yoruba</option>
                  </select>   
                </div>    
                <div className="bio-form-div">
                  <div className="bio-form-label">Current Employer (Company / Brand)<b>*</b></div> 
                  <input className="bio-form-input" name="current_employer" value={this.state.current_employer} onChange={this.handleChange}/>    
                </div>

                <div className="bio-form-label">Your Location<b>*</b> {this.state.selectedState} {this.state.selectedLGA}</div> 
                <div className="bio-form-div">
                 
                    <select value={this.state.selectedState} onChange={this.changeState} className="bio-form-select">
                        <option>Select State</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>    
                <div className="bio-form-div">
                  
                  <select value={this.state.selectedLGA} onChange={this.changeLGA} className="bio-form-select">
                        <option>Select LGA</option>
                            {this.state.lgas.map((e, key) => {
                                return <option key={key}>{e.name}</option>;
                            })}
                    </select> 
                </div> 
                <div className="job-preferences-div">
                  <div className="job-preferences-label">Your Job Preferences</div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Type<b>*</b></div> 
                    <select class="bio-form-select" id="employment_type" name="employment_type" value={this.state.employment_type} onChange={this.handleChange} required>
                    <option value="">Select one</option>
                    <option value="Full Time" >Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                </select>
       
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Job Option<b>*</b></div> 
                    <input type="text" class="bio-form-select" name="preferred_job"  value={this.state.preferred_job} onChange={this.handleChange} autocomplete="off"/>  
                  </div>
                  
                  <div className="bio-form-div">
                    <div className="bio-form-label">Preferred Location {this.state.selectedState2} {this.state.selectedLGA2}<b>*</b></div> 
                    <select value={this.state.selectedState2} onChange={this.changeState2} className="bio-form-select">
                        <option>Select State</option>
                        {this.state.states2.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                  </div>   
                  <div className="bio-form-div">
                    {/* <select className="bio-form-select">  
                    </select>   */}
                    <select value={this.state.selectedLGA2} onChange={this.changeLGA2} className="bio-form-select">
                        <option>Select LGA</option>
                            {this.state.lgas2.map((e, key) => {
                                return <option key={key}>{e.name}</option>;
                            })}
                    </select> 
                  </div>    
                </div>  

                  <div className="start-date-main-div" onChange={e => this.setStartDate(e)}>
                    <div className="bio-form-label">Start Date<b>*</b></div>   

                    <input type="radio" id="immediately" name="availability_start_date" value="now"/>
                    <label htmlFor="immediately">Immediately</label>
                    <br />

                    <input type="radio" id="not_yet" name="availability_start_date" value="not_yet" />
                    <label htmlFor="not_yet">Not Yet</label>
                    <br /> 

                    <input type="radio" id="select_date" name="availability_start_date" value="select_date" />
                    <label htmlFor="select_date">Select Date</label>
                  </div>
                  {this.state.availability_start_date2_show ? 
                    <div id="StartDateDiv" className="start-date-div"> 
                      <input type="date" name="availability_start_date2" value={this.state.availability_start_date} onChange={this.onDateChange}/>
                    </div>
                    :
                    null
                  }

                  {this.state.availability_start_date}
                  



                <div className="bio-form-button-div">
                  <button type="reset" className="cancel-bio-button">Cancel</button>
                  <button type="submit" className="submit-bio-button">Finish</button>    
                </div>    
              </form>
            </div>

          :

             null
             
           } 
          </div>


          </div>

          <Footer/>

          </>

        )
    }
}

export default Dashboard
