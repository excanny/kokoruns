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


        {/* <section id="UserInfoContainer" className="user-info-container">  

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
                    </div*
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

        </section> */}


<div align="center" className="profile-setup-form-container">
  <form onSubmit={this.handleSubmit}>
    <div id="rounded-corner" align="center" className="form-table">
      <div align="left" className="form-header">Profile Setup</div>
      <div className="profile-setup-body" align="center">
        <div className="duo">
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 5}}>
              First Name<b>*</b></div>
            <input className="form-input" type="text" id="first_name" name="first_name" value={this.state.first_name} onChange={this.handleChange} required />  
          </div>  
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 5}}>
              Last Name (Surname)<b>*</b></div>
            <input className="form-input" type="text" id="last_name" name="last_name" value={this.state.last_name} onChange={this.handleChange} required />    
          </div>
        </div> 
        <div className="duo">
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 10}}>
              Current Location<b>*</b></div>
                    <select value={this.state.selectedState} onChange={this.changeState} className="form-select">
                          <option>Select State</option>
                          {this.state.states.map((e, key) => {
                              return <option key={key}>{e.name}</option>;
                          })}
                      </select>
          </div>
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 10}}>
              &nbsp;&nbsp;</div>            
              <select value={this.state.selectedLGA} onChange={this.changeLGA} className="form-select">
                  <option>Select LGA</option>
                      {this.state.lgas.map((e, key) => {
                          return <option key={key}>{e.name}</option>;
                      })}
              </select>
          </div>    
        </div>
        <div className="duo">
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 5}}>
              Email</div>
            <input className="form-input" type="email" id="user_email" name="user_email" value={this.state.user_email} onChange={this.handleChange} required />
          </div>
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 5}}>
              Phone Number<b>*</b></div>
            <input className="form-input" type="text" id="user_phonenum" name="user_phonenum" value={this.state.user_phonenum} onChange={this.handleChange} required />      
          </div>
        </div>
        {/*div align="left" class="h3-label"><div style="padding-bottom: 10px">
      Street / Estate Name</div>
      <input class="form-input" type="text" id="user_street/estate" name="user_street/estate" placeholder="" required>    
      </div*/}
        <div className="duo">
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 5}}>
              Profession<b>*</b></div>
            {/* <select className="form-select" id="employment_status" name="employment_status" required>
              <option value={0} />
            </select>     */}
             <input type="text" className="form-select" name="profession_or_craft" id="profession_or_craft" value={this.state.profession_or_craft} onChange={this.handleChange} autoComplete="off" /> 
          </div>
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 5}}>
              Academic Level<b>*</b></div>
              <select name="educational_qualification" id className="form-select" value={this.state.educational_qualification} onChange={this.handleChange} required>
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
        </div>   
        <div className="duo">
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 5}}>
              Gender<b>*</b></div>
            <select className="form-select" id="gender" name="gender" required>
              <option value="">Select:</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>    
          </div>
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 5}}>
              Marital Status<b>*</b></div>
            <select className="form-select" id="marital_status" name="marital_status" value={this.state.marital_status} onChange={this.handleChange} required>
              <option value="">Select:</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
              <option value="None">None</option>
            </select>    
          </div> 
        </div>   
        <div align="left" className="h3-label">
          <div style={{paddingBottom: 5}}>
            Current Employer</div>
          <input className="form-input" type="text" id="current_employer" name="current_employer" value={this.state.current_employer} onChange={this.handleChange}  required />    
        </div>
        <div align="left" className="h3-label-radio">
          <div style={{paddingBottom: 5}}>
            Disabled<b>*</b></div>
          <div style={{columnCount: 2, columnWidth: '50%'}}>
            <div>
              <input type="radio" id="employment_status" name="employment_status" required /><label>&nbsp;&nbsp;Yes</label>
            </div>
            <div>
              <input type="radio" id="age-range" name="age-range" required /><label>&nbsp;&nbsp;No</label>
            </div> 
          </div>
        </div>
        <div align="left" className="h3-label">
          <div style={{paddingBottom: 5}}>
            I Speak <b>(max 5)</b></div>
          <select className="form-select" id="language" name="language" required>
            <option value={0}>Select:</option>
            <option value={1}>English</option>
            <option value={2}>Yoruba</option>
            <option value={3}>Igbo</option>
            <option value={4}>Pidgin English</option>
            <option value={5}>French</option>
            <option value={6}>Tiv</option>
            <option value={7}>Kanuri</option>
            <option value={8}>Fulfulde</option>
            <option value={9}>Efik-Ibibio</option>
            <option value={10}>Ijaw</option>
            <option value={11}>Urhobo</option>
            <option value={12}>Sign Language (English)</option>
            <option value={13}>Sign Language (Hausa)</option>
            <option value={14}>Edo</option>
            <option value={15}>Igala</option>
            <option value={16}>Nupe-Ebira</option>
            <option value={17}>Izon</option>
            <option value={18}>Birom</option>
            <option value={19}>Idoma</option>
            <option value={20}>Itsekiri</option>
            <option value={21}>British English</option>
            <option value={22}>Spanish</option>
            <option value={23}>Mandarin</option>
          </select>
          <select id="prof1" className="form-select" name="language" required>
            <option value={0}>Select:</option>
            <option value={1}>English</option>
            <option value={2}>Yoruba</option>
            <option value={3}>Igbo</option>
            <option value={4}>Pidgin English</option>
            <option value={5}>French</option>
            <option value={6}>Tiv</option>
            <option value={7}>Kanuri</option>
            <option value={8}>Fulfulde</option>
            <option value={9}>Efik-Ibibio</option>
            <option value={10}>Ijaw</option>
            <option value={11}>Urhobo</option>
            <option value={12}>Sign Language (English)</option>
            <option value={13}>Sign Language (Hausa)</option>
            <option value={14}>Edo</option>
            <option value={15}>Igala</option>
            <option value={16}>Nupe-Ebira</option>
            <option value={17}>Izon</option>
            <option value={18}>Birom</option>
            <option value={19}>Idoma</option>
            <option value={20}>Itsekiri</option>
            <option value={21}>British English</option>
            <option value={22}>Spanish</option>
            <option value={23}>Mandarin</option>
          </select>
          <select id="prof2" className="form-select" name="language" required>
            <option value={0}>Select:</option>
            <option value={1}>English</option>
            <option value={2}>Yoruba</option>
            <option value={3}>Igbo</option>
            <option value={4}>Pidgin English</option>
            <option value={5}>French</option>
            <option value={6}>Tiv</option>
            <option value={7}>Kanuri</option>
            <option value={8}>Fulfulde</option>
            <option value={9}>Efik-Ibibio</option>
            <option value={10}>Ijaw</option>
            <option value={11}>Urhobo</option>
            <option value={12}>Sign Language (English)</option>
            <option value={13}>Sign Language (Hausa)</option>
            <option value={14}>Edo</option>
            <option value={15}>Igala</option>
            <option value={16}>Nupe-Ebira</option>
            <option value={17}>Izon</option>
            <option value={18}>Birom</option>
            <option value={19}>Idoma</option>
            <option value={20}>Itsekiri</option>
            <option value={21}>British English</option>
            <option value={22}>Spanish</option>
            <option value={23}>Mandarin</option>
          </select>
          <select id="prof3" className="form-select" name="language" required>
            <option value={0}>Select:</option>
            <option value={1}>English</option>
            <option value={2}>Yoruba</option>
            <option value={3}>Igbo</option>
            <option value={4}>Pidgin English</option>
            <option value={5}>French</option>
            <option value={6}>Tiv</option>
            <option value={7}>Kanuri</option>
            <option value={8}>Fulfulde</option>
            <option value={9}>Efik-Ibibio</option>
            <option value={10}>Ijaw</option>
            <option value={11}>Urhobo</option>
            <option value={12}>Sign Language (English)</option>
            <option value={13}>Sign Language (Hausa)</option>
            <option value={14}>Edo</option>
            <option value={15}>Igala</option>
            <option value={16}>Nupe-Ebira</option>
            <option value={17}>Izon</option>
            <option value={18}>Birom</option>
            <option value={19}>Idoma</option>
            <option value={20}>Itsekiri</option>
            <option value={21}>British English</option>
            <option value={22}>Spanish</option>
            <option value={23}>Mandarin</option>
          </select>
          <select id="prof4" className="form-select" name="language" required>
            <option value={0}>Select:</option>
            <option value={1}>English</option>
            <option value={2}>Yoruba</option>
            <option value={3}>Igbo</option>
            <option value={4}>Pidgin English</option>
            <option value={5}>French</option>
            <option value={6}>Tiv</option>
            <option value={7}>Kanuri</option>
            <option value={8}>Fulfulde</option>
            <option value={9}>Efik-Ibibio</option>
            <option value={10}>Ijaw</option>
            <option value={11}>Urhobo</option>
            <option value={12}>Sign Language (English)</option>
            <option value={13}>Sign Language (Hausa)</option>
            <option value={14}>Edo</option>
            <option value={15}>Igala</option>
            <option value={16}>Nupe-Ebira</option>
            <option value={17}>Izon</option>
            <option value={18}>Birom</option>
            <option value={19}>Idoma</option>
            <option value={20}>Itsekiri</option>
            <option value={21}>British English</option>
            <option value={22}>Spanish</option>
            <option value={23}>Mandarin</option>
          </select>
          <button id="profbutton1" align="left" className="add-professions-button" onclick="ProfessionButton1(); return false;">
            Add Language +    
          </button>
          <button id="profbutton2" align="left" className="add-professions-button" onclick="ProfessionButton2(); return false;">
            Add Language +    
          </button>
          <button id="profbutton3" align="left" className="add-professions-button" onclick="ProfessionButton3(); return false;">
            Add Language +    
          </button>
          <button id="profbutton4" align="left" className="add-professions-button" onclick="ProfessionButton4(); return false;">
            Add Language +    
          </button>
        </div>
        <div align="left" className="h3-label">
          <div style={{paddingBottom: 5}}>
            Other Professions<b>*</b></div>
          <select className="form-select" id="profession_or_craft" name="profession_or_craft" required>
            <option value={0} />
          </select>
          <select id="prof1" className="form-select" name="profession_or_craft" required>
            <option value={0} />
          </select>
          <select id="prof2" className="form-select" name="profession_or_craft" required>
            <option value={0} />
          </select>
          <select id="prof3" className="form-select" name="profession_or_craft" required>
            <option value={0} />
          </select>
          <select id="prof4" className="form-select" name="profession_or_craft" required>
            <option value={0} />
          </select>
          <button id="profbutton1" align="left" className="add-professions-button" onclick="ProfessionButton1(); return false;">
            Add Profession +    
          </button>
          <button id="profbutton2" align="left" className="add-professions-button" onclick="ProfessionButton2(); return false;">
            Add Profession +    
          </button>
          <button id="profbutton3" align="left" className="add-professions-button" onclick="ProfessionButton3(); return false;">
            Add Profession +    
          </button>
          <button id="profbutton4" align="left" className="add-professions-button" onclick="ProfessionButton4(); return false;">
            Add Profession +    
          </button>
        </div>
        <div className="duo">
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 10}}>
              Employment Type</div>
            <select className="form-select" id="job_preference" name="job_preference" required>
              <option value={0}>Full-time</option>
              <option value={1}>Part-time</option>
              <option value={2}>Temporary</option>
              <option value={3}>Volunteer</option>
              <option value={4}>Contract</option>
              <option value={5}>Internship</option>
              <option value={6}>Apprentice/Trainee</option>
            </select>
          </div>
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 10}}>
              Present Employment Status</div>
            <select className="form-select" onchange="ShowEmployerInput(); return false;" id="EmploymentStatusInput" name="employment_status" required>
              <option id value={0}>Select:</option>
              <option id value={1}>Available for Employment</option>
              <option id value={2}>Business Owner</option>
              {/*script>
     function ShowEmployerInput() {
         var x = document.getElementById("EmploymentStatusInput").value;
         if(x == 2){
          document.getElementById("CompBrandInput").style.display="grid";  
         }
         else if(x == 4) {
          document.getElementById("CompBrandInput2").style.display="grid";   
         }
         
         else {
           document.getElementById("CompBrandInput").style.display="none";    
           
          document.getElementById("CompBrandInput2").style.display="none";    
         }
     }
          
          
      </script*/}
            </select>    
          </div>
        </div>
        <div id="CompBrandInput" align="left" className="h3-label">
          <div style={{paddingBottom: 10}}>
            Employer (Company / Brand)<b>*</b></div>
          <input className="form-input" type="text" id="user_street/estate" name="user_street/estate" placeholder required />   
        </div> 
        <div id="CompBrandInput2" align="left" className="h3-label">
          <div style={{paddingBottom: 10}}>
            Company / Business Name<b>*</b></div>
          <input className="form-input" type="text" id="user_street/estate" name="user_street/estate" placeholder required />   
        </div>           
        <br />
        <div className="duo">
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 10}}>
              Prefered Location</div>
            <select className="form-select" id="user_state" name="user_state" required>
              <option value={0}>Select State:</option>
            </select>
          </div>
          <div align="left" className="h3-label">
            <div style={{paddingBottom: 10}}>
              &nbsp;&nbsp;</div>            
            <select className="form-select" id="user_lga" name="user_lga" required>
              <option value={0}>Select LGA:</option>
            </select>
          </div>    
        </div>
        <div align="left" className="h3-label">
          <div style={{paddingBottom: 10}}>
            About</div>
          <textarea className="form-textarea" id="job_preference" name="job_preference" required defaultValue={"                                \n                          "} />
        </div>
      </div> 
      <div colSpan={2} align="center">
        <br />
        <button type className="profile-setup-proceed-button" id>Proceed</button>
        <br />
        <p>
          <a className="back-to-home" href="index.html">Back to Home</a></p>
      </div>
    </div>
  </form>
</div>



        <Footer/>  

           
        </>

        )
    }
}

export default ProfileSetUp
