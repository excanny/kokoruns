import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import {Link} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode'; // import dependency


export class Dashboard extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      
        showBioForm: false,
        gender: '',
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
        preferred_job1: '', 
        preferred_job2: '',
        preferred_job3: '',
        preferred_job4: '',
        preferred_job_location_state: '', 
        preferred_job_location_lga: '', 
        profession: '', 
        availability_start_date: '',
        availability_start_date2: new Date(),
        employment_type: '', 
        state: '', 
        lga: '',
        availability_start_date2_show: false,
        isLoading: false,

    }

     
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showEditBioForm = this.showEditBioForm.bind(this);
      this.cancelEditBioForm = this.cancelEditBioForm.bind(this);

  }


  onChange = date => this.setState({ date });


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
    else
    {
      this.setState({availability_start_date2_show : false });
    }
    //  console.log(e.target.value);
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

    // try
    // {
      
    //     // fetch data from a url endpoint
    //     // const response = axios.get(`https://api-business.azurewebsites.net/api/BusinessInfos/get`, {headers: headers});
    //    const response = await axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/userdetails`, {headers: headers});

    //     //this.setState({ current_employer : response.data.data.bankAccountNo });

    //     // console.log(this.state.bankAccountNo);
  

    //     //this.setState({ firstname : response.data.data.firstName });

    //     console.log(response.data);


    // } 
    // catch(error) 
    // {
    //     // console.log("error", error);
    //     // appropriately handle the error
    //     console.log(error);
    // }


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

      this.setState({ gender : responseOne.data.user_details.gender, marital_status : responseOne.data.user_details.marital_status, disabled : responseOne.data.user_details.disabled, current_employer : responseOne.data.user_details.current_employer, other_professions1 :  responseOne.data.user_details.other_professions1,
        other_professions2 :  responseOne.data.user_details.other_professions2, other_professions3 :  responseOne.data.user_details.other_professions3,
        other_professions4 :  responseOne.data.user_details.other_professions4, educational_qualification :  responseOne.data.user_details.educational_qualification, languages1 : responseOne.data.user_details.languages1,
        languages2 : responseOne.data.user_details.languages2, languages3 : responseOne.data.user_details.languages3, languages4 : responseOne.data.user_details.languages4, languages5 : responseOne.data.user_details.languages5,
         });

      console.log(this.state.marital_status);

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
      preferred_job1: this.state.preferred_job1, preferred_job2: this.state.preferred_job2, preferred_job3: this.state.preferred_job3,
      preferred_job4: this.state.preferred_job4, preferred_job_location_state: this.state.preferred_job_location_state, preferred_job_location_lga: this.state.preferred_job_location_lga,
      availability_start_date: this.state.availability_start_date, employment_type: this.state.employment_type, state: this.state.state, state: this.state.lga
    
    };  

    console.log(data);


      // try 
      // {
      //     // fetch data from a url endpoint
      //     //const response = await  axios.post(`http://127.0.0.1:8000/api/addeducation`, data, {headers: headers});
      //     const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addeducation`, data, {headers: headers});
          
      //     console.log(response);

      //     this.setState({ educations: response.data.educations, loading: false, show: false });

      //     window.location.href = "/user-dashboard-education";

      //     //this.props.history.push("/user-dashboard-education");

      //     // console.log(response.data.expe[0]);

      // } 
      // catch(error) 
      // {
      //   // console.log("error", error);
      //   // appropriately handle the error
      //   console.log(error.response);
      // }

  }



    render() {
        return (
            <>

          <Header/>

            
          <div style={{background: '#f2f2f2'}}>

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
                <div align="left" className="bio-user-name">Demilade Oyeyele<img src className="verification" /> </div> 
                <div align="left" className="bio-user-profession">Accountant</div>       
              </div> 
              {/*USER DP SCRIPT*/}   
              {/*USER DP SCRIPT*/}    
              <label title="Number of people Recommended by" className="bio-info-label">Recommendations    
              </label>&nbsp;
              <a href="#">47</a><br style={{lineHeight: 2.0}} />
              <label title="Gender" className="bio-info-label">Female   
              </label>
              <br style={{lineHeight: 2.0}} />
              <label title="Marital Status" className="bio-info-label">Married    
              </label>
              <br style={{lineHeight: 2.0}} />    
              <label title="Academic Level" className="bio-info-label">Bachelor's Degree    
              </label>
              <br style={{lineHeight: 2.0}} /> 
              <label title="Location (State, L.G.A)" className="bio-info-label">Lagos, Kosofe.   
              </label>
              <br style={{lineHeight: 2.0}} />
              <label className="bio-info-label">I work for:   
              </label> 
              <a href="#">ABC Nigeria Limited</a><br style={{lineHeight: 2.0}} /> 
              <label className="bio-info-label">My Other Professions: 
              </label>
              Graphics Artist, Helicopter Pilot, Teacher<br style={{lineHeight: 2.0}} />
              <label className="bio-info-label"> I Speak:
              </label>
              English, Yoruba, Hausa, Igbo, Pidgin English<br style={{lineHeight: 2.0}} />    
              <label className="bio-info-label">Looking for a:    
              </label>
              <ul>
                <li>Fulltime Job as a Chef, in Kosofe.</li>
                <li>Partime Job as a Waiter, in Lekki Phase I</li>
                <li>Volunteer work as an Environmental Activist</li>   
              </ul>  
              <label className="bio-info-label">About me   
              </label><br />
              There are basic things most people know about the 
              National Assembly such as that it is made of two 
              chambers – the Senate and House of Representatives - 
              and that there are 109 elected members in the Senate 
              and 360 members in the House.

            
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
                <div className="bio-form-div">
                  <div className="bio-form-label">Your State<b>*</b></div> 
                  <select className="bio-form-select" value={this.state.state} onChange={this.handleChange} name="state" required>
                              <option value="">Select one</option>
                              <option value="Abia">Abia</option>
                              <option value="Adamawa">Adamawa</option>
                              <option value="AkwaIbom">AkwaIbom</option>
                              <option value="Anambra">Anambra</option>
                              <option value="Bauchi">Bauchi</option>
                              <option value="Bayelsa">Bayelsa</option>
                              <option value="Benue">Benue</option>
                              <option value="Borno">Borno</option>
                              <option value="Cross River">Cross River</option>
                              <option value="Delta">Delta</option>
                              <option value="Ebonyi">Ebonyi</option>
                              <option value="Edo">Edo</option>
                              <option value="Ekiti">Ekiti</option>
                              <option value="Enugu">Enugu</option>
                              <option value="FCT">FCT</option>
                              <option value="Gombe">Gombe</option>
                              <option value="Imo">Imo</option>
                              <option value="Jigawa">Jigawa</option>
                              <option value="Kaduna">Kaduna</option>
                              <option value="Kano">Kano</option>
                              <option value="Katsina">Katsina</option>
                              <option value="Kebbi">Kebbi</option>
                              <option value="Kogi">Kogi</option>
                              <option value="Kwara">Kwara</option>
                              <option value="Lagos">Lagos</option>
                              <option value="Nasarawa">Nasarawa</option>
                              <option value="Niger">Niger</option>
                              <option value="Ogun">Ogun</option>
                              <option value="Ondo">Ondo</option>
                              <option value="Osun">Osun</option>
                              <option value="Oyo">Oyo</option>
                              <option value="Plateau">Plateau</option>
                              <option value="Rivers">Rivers</option>
                              <option value="Sokoto">Sokoto</option>
                              <option value="Taraba">Taraba</option>
                              <option value="Yobe">Yobe</option>
                              <option value="Zamfara">Zamfara</option>  
                      </select> 
                </div>    
                <div className="bio-form-div">
                  <div className="bio-form-label">Your LGA<b>*</b></div> 
                  <select className="bio-form-select"> 
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
                    <div className="bio-form-label">Job Option 1<b>*</b></div> 
                    <input type="text" class="bio-form-select" name="preferred_job1"  value={this.state.preferred_job1} onChange={this.handleChange} autocomplete="off"/>  
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Job Option 2</div> 
                    <input type="text" class="bio-form-select" name="preferred_job2"  value={this.state.preferred_job2} onChange={this.handleChange} autocomplete="off"/>  
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Job Option 3</div> 
                    <input type="text" class="bio-form-select" name="preferred_job3"  value={this.state.preferred_job3} onChange={this.handleChange} autocomplete="off"/>    
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Job Option 4</div> 
                    <input type="text" class="bio-form-select" name="preferred_job4"  value={this.state.preferred_job4} onChange={this.handleChange} autocomplete="off"/>      
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Preferred State<b>*</b></div> 
                    <select className="bio-form-select" value={this.state.state2} onChange={this.handleChange} name="preferred_job_location_state" required>
                              <option value="">Select one</option>
                              <option value="Abia">Abia</option>
                              <option value="Adamawa">Adamawa</option>
                              <option value="AkwaIbom">AkwaIbom</option>
                              <option value="Anambra">Anambra</option>
                              <option value="Bauchi">Bauchi</option>
                              <option value="Bayelsa">Bayelsa</option>
                              <option value="Benue">Benue</option>
                              <option value="Borno">Borno</option>
                              <option value="Cross River">Cross River</option>
                              <option value="Delta">Delta</option>
                              <option value="Ebonyi">Ebonyi</option>
                              <option value="Edo">Edo</option>
                              <option value="Ekiti">Ekiti</option>
                              <option value="Enugu">Enugu</option>
                              <option value="FCT">FCT</option>
                              <option value="Gombe">Gombe</option>
                              <option value="Imo">Imo</option>
                              <option value="Jigawa">Jigawa</option>
                              <option value="Kaduna">Kaduna</option>
                              <option value="Kano">Kano</option>
                              <option value="Katsina">Katsina</option>
                              <option value="Kebbi">Kebbi</option>
                              <option value="Kogi">Kogi</option>
                              <option value="Kwara">Kwara</option>
                              <option value="Lagos">Lagos</option>
                              <option value="Nasarawa">Nasarawa</option>
                              <option value="Niger">Niger</option>
                              <option value="Ogun">Ogun</option>
                              <option value="Ondo">Ondo</option>
                              <option value="Osun">Osun</option>
                              <option value="Oyo">Oyo</option>
                              <option value="Plateau">Plateau</option>
                              <option value="Rivers">Rivers</option>
                              <option value="Sokoto">Sokoto</option>
                              <option value="Taraba">Taraba</option>
                              <option value="Yobe">Yobe</option>
                              <option value="Zamfara">Zamfara</option>  
                      </select> 
                  </div>   
                  <div className="bio-form-div">
                    <div className="bio-form-label">Preferred LGA<b>*</b></div> 
                    <select className="bio-form-select">  
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
                      <input type="date" name="availability_start_date2" value={this.state.availability_start_date2} onChange={this.onChange}/>
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

          </>

        )
    }
}

export default Dashboard
