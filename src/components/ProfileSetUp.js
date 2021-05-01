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
          employment_status: '',
          current_employer:'',
          states : [],
          lgas : [],
          selectedState : '',
          selectedLGA : '',
          states2 : [],
          lgas2 : [],
          selectedState2 : '',
          selectedLGA2 : '',
          marital_status: '',
          disabled: '',
          gender: '',
          other_professions1: '',
          other_professions2: '',
          other_professions3: '',
          other_professions4: '', 
          other_professions2_show: false,
          other_professions3_show: false,
          other_professions4_show: false, 
          languages1: '',
          languages2: '',
          languages3: '',
          languages4: '',
          languages5: '',
          languages2_show: false,
          languages3_show: false,
          languages4_show: false,
          languages5_show: false,
          lang2_btn_show: true,
          lang2_btn_text: 'Add Language 2 +',
          lang3_btn_show: false,
          lang4_btn_show: false,
          lang5_btn_show: false,
          about: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleRoleChange = this.handleRoleChange.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeLGA = this.changeLGA.bind(this);
        this.changeState2 = this.changeState2.bind(this);
        this.changeLGA2 = this.changeLGA2.bind(this);
        this.setLang2 = this.setLang2.bind(this);
        this.setLang3 = this.setLang3.bind(this);
        this.setLang4 = this.setLang4.bind(this);
        this.setLang5 = this.setLang5.bind(this);
        this.setOtherProf2 = this.setOtherProf2.bind(this);
        this.setOtherProf3 = this.setOtherProf3.bind(this);
        this.setOtherProf4 = this.setOtherProf4.bind(this);
  
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

      setLang2() {
       
        this.setState(prevState => ({
          languages2_show: !prevState.languages2_show
        }));
      }


      setLang3() {
        this.setState(prevState => ({
          languages3_show: !prevState.languages3_show
        }));
      }

      setLang4() {
        this.setState(prevState => ({
          languages4_show: !prevState.languages4_show
        }));
      }

      setLang5() {
        this.setState(prevState => ({
          languages5_show: !prevState.languages5_show
        }));
      }


      setOtherProf2() {
       
        this.setState(prevState => ({
          other_professions2_show: !prevState.other_professions2_show
        }));

        console.log(this.state.other_professions2_show)

      }


      setOtherProf3() {
       
        this.setState(prevState => ({
          other_professions3_show: !prevState.other_professions3_show
        }));
      }


      setOtherProf4() {
       
        this.setState(prevState => ({
          other_professions4_show: !prevState.other_professions4_show
        }));
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

        const data = { first_name: this.state.first_name, last_name: this.state.last_name, user_phonenum: this.state.user_phonenum, user_email: this.state.user_email, 
          educational_qualification: this.state.educational_qualification, profession: this.state.profession_or_craft, employment_type:  this.state.employment_type, 
          employment_status: this.state.employment_status, gender:  this.state.gender, disabled:  this.state.disabled, current_employer: this.state.current_employer, 
          languages1: this.state.languages1, languages2: this.state.languages2, languages3: this.state.languages3, languages4: this.state.languages4, languages5: this.state.languages5, 
          other_professions1: this.state.other_professions1, other_professions2: this.state.other_professions2, other_professions3: this.state.other_professions3,
          other_professions4: this.state.other_professions4, selectedState: this.state.selectedState, selectedLGA: this.state.selectedLGA, marital_status: this.state.marital_status,
          selectedState2: this.state.selectedState2, selectedLGA2: this.state.selectedLGA2, about: this.state.about};  

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

          //  this.setState({ show: false });
         
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



                  <div align="center" className="profile-setup-form-container">
                    <form onSubmit={this.handleSubmit}>
                      <div id="rounded-corner" align="center" className="form-table">
                        <div align="left" className="form-header">Profile Setup</div>
                      <p className="mt-4 px-5">You are required to set up your profile. This is a one-time initial set up and you can always change them later in future from your dashboard. All fields marked * are mandatory</p>
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
                                      <select value={this.state.selectedState} onChange={this.changeState} className="form-select" required>
                                            <option>Select State</option>
                                            {this.state.states.map((e, key) => {
                                                return <option key={key}>{e.name}</option>;
                                            })}
                                        </select>
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                &nbsp;&nbsp;</div>            
                                <select value={this.state.selectedLGA} onChange={this.changeLGA} className="form-select" required>
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
                              <input className="form-input" type="email" id="user_email" name="user_email" value={this.state.user_email} onChange={this.handleChange} />
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Phone Number<b>*</b></div>
                              <input className="form-input" type="number" id="user_phonenum" name="user_phonenum" value={this.state.user_phonenum} onChange={this.handleChange} required />      
                            </div>
                          </div>
                        
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 5}}>
                                Profession<b>*</b></div>
                             
                              <input type="text" className="form-select" name="profession_or_craft" id="profession_or_craft" value={this.state.profession_or_craft} onChange={this.handleChange} autoComplete="off" required/> 
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
                              <select className="form-select" id="gender" name="gender" value={this.state.gender} onChange={this.handleChange} required>
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
                              </select>    
                            </div> 
                          </div>   
                          <div align="left" className="h3-label">
                            <div style={{paddingBottom: 5}}>
                              Current Employer</div>
                            <input className="form-input" type="text" id="current_employer" name="current_employer" value={this.state.current_employer} onChange={this.handleChange} />    
                          </div>
                          <div align="left" className="h3-label-radio">
                            <div style={{paddingBottom: 5}}>
                              Disabled<b>*</b></div>
                            <div style={{columnCount: 2, columnWidth: '50%'}} onChange={e => this.setDisabled(e)}>
                              <div>
                                <input type="radio" name="disabled" value="Yes" checked={this.state.disabled === "Yes"} required /><label>&nbsp;&nbsp;Yes</label>
                              </div>
                              <div>
                                <input type="radio" name="disabled" value="No" checked={this.state.disabled === "No"}  /><label>&nbsp;&nbsp;No</label>
                              </div> 
                            </div>
                          </div>
                          <div align="left" className="h3-label">
                            <div style={{paddingBottom: 5}}>
                              I Speak <b>(max 5)</b></div>
                            <select className="form-select" id="language" name="languages1" value={this.state.languages1} onChange={this.handleChange} >
                              <option value="">Select Language 1:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>


                          <button type="button" className="add-professions-button mt-3" onClick={this.setLang2}>
                          {this.state.lang2_btn_text}    
                        </button>
                            

                          {this.state.languages2_show ? 
                            <select id="prof1x" className="form-select mt-2 mb-2" name="languages2" value={this.state.languages2} onChange={this.handleChange}>
                            <option value="">Select Language 2:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>
                            :
                            null
                            }

                  <button type="button" align="left" className="add-professions-button mt-2 mb-2" onClick={this.setLang3}>      
                              Add Language 3+    
                            </button>
                            {this.state.languages3_show ? 
                            <select id="prof2x" className="form-select" name="languages3" value={this.state.languages3} onChange={this.handleChange}>
                            <option value="">Select Language 3:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>
                              :
                              null
                            }

                            <button type="button" align="left" className="add-professions-button mt-2 mb-2" onClick={this.setLang4}>
                              Add Language 4+    
                            </button>
                            {this.state.languages4_show ?
                            <select id="prof3x" className="form-select" name="languages4" value={this.state.languages4} onChange={this.handleChange}>
                            <option value="">Select Language 4:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>
                            :
                            null
                          }

                            <button type="button" align="left" className="add-professions-button my-2" onClick={this.setLang5}>
                              Add Language 5+    
                            </button>

                            {this.state.languages5_show ?
                            <select id="prof4x" className="form-select my-2" name="languages5" value={this.state.languages5} onChange={this.handleChange}>
                            <option value="">Select language 5:</option>
                              <option value="English">English</option>
                              <option value="Yoruba">Yoruba</option>
                              <option value="Igbo">Igbo</option>
                              <option value="Pidgin English">Pidgin English</option>
                              <option value="French">French</option>
                              <option value="Tiv">Tiv</option>
                              <option value="Kanuri">Kanuri</option>
                              <option value="Fulfulde">Fulfulde</option>
                              <option value="Efik-Ibibio">Efik-Ibibio</option>
                              <option value="Ijaw">Ijaw</option>
                              <option value="Urhobo">Urhobo</option>
                              <option value="Sign Language (English)">Sign Language (English)</option>
                              <option value="Sign Language (Hausa)">Sign Language (Hausa)</option>
                              <option value="Edo">Edo</option>
                              <option value="Igala">Igala</option>
                              <option value="Nupe-Ebira">Nupe-Ebira</option>
                              <option value="Izon">Izon</option>
                              <option value="Birom">Birom</option>
                              <option value="Idoma">Idoma</option>
                              <option value="Itsekiri">Itsekiri</option>
                              <option value="British English">British English</option>
                              <option value="Spanish">Spanish</option>
                              <option value="Mandarin">Mandarin</option>
                            </select>
                              :
                              null
                              }
                          
                          </div>
                          <div align="left" className="h3-label">
                            <div style={{paddingBottom: 5}}>
                              Other Professions </div>
                              <input className="form-input" type="text" name="other_professions1" value={this.state.other_professions1} onChange={this.handleChange} />      
                            
                            <button id="profbutton1x" type="button" align="left" className="add-professions-button" onClick={this.setOtherProf2}>
                              Add Other Profession 2+    
                            </button>
                            {this.state.other_professions2_show ? 
                                <input className="form-input" type="text" name="other_professions2" value={this.state.other_professions2} onChange={this.handleChange} /> 
                              :
                              null
                              }
                            <button id="profbutton2x" type="button" align="left" className="add-professions-button" onClick={this.setOtherProf3}>
                              Add Other Profession 3+    
                            </button>

                            {this.state.other_professions3_show ? 
                              <input className="form-input" type="text" name="other_professions3" value={this.state.other_professions3} onChange={this.handleChange} /> 
                            : null
                            }
                            <button id="profbutton3x" type="button" align="left" className="add-professions-button" onClick={this.setOtherProf4}>
                              Add Profession  4+    
                            </button>

                            {this.state.other_professions4_show ? 
                            <input className="form-input" type="text" name="other_professions4" value={this.state.other_professions4} onChange={this.handleChange} /> 
                            :
                            null
                            }
                          </div>
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                Employment Type <b>*</b></div>
                              <select className="form-select" name="employment_type" value={this.state.employment_type} onChange={this.handleChange} required>
                                <option value="">Select one</option>   
                                <option value="Full Time" >Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Contract">Contract</option>
                                <option value="Volunteer">Volunteer</option>
                                <option value="Internship">Internship</option>
                                <option value="Apprentice/Trainee">Apprentice/Trainee</option>
                              </select>
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                Present Employment Status<b>*</b></div>
                              <select className="form-select" name="employment_status" value={this.state.employment_status} onChange={this.handleChange} required>
                                <option value="">Select:</option>
                                <option value="Available for Employment">Available for Employment</option>
                                <option value="Business Owner">Business Owner</option>
                              </select>    
                            </div>
                          </div>
                        
                                    
                          <br />
                          <div className="duo">
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                Prefered Job Location</div>
                                <select value={this.state.selectedState2} onChange={this.changeState2} className="form-select">
                                      <option>Select State</option>
                                      {this.state.states2.map((e, key) => {
                                          return <option key={key}>{e.name}</option>;
                                      })}
                                  </select>
                            </div>
                            <div align="left" className="h3-label">
                              <div style={{paddingBottom: 10}}>
                                &nbsp;&nbsp;</div>            
                                <select value={this.state.selectedLGA2} onChange={this.changeLGA2} className="bio-form-select">
                                      <option>Select LGA</option>
                                          {this.state.lgas2.map((e, key) => {
                                              return <option key={key}>{e.name}</option>;
                                          })}
                                  </select> 
                            </div>    
                          </div>

                          <div align="left" className="h3-label">
                            <div style={{paddingBottom: 10}}>
                              About <b>*</b></div>
                            <textarea className="form-textarea" name="about"  value={this.state.about} onChange={this.handleChange} required/>
                          </div>
                      
                        </div> 
                        <div colSpan={2} align="center">
                          <br />
                          <button type className="profile-setup-proceed-button" id>Proceed</button>
                          <br />
                        
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
