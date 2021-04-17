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
        isLoading: false,

    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.showEditBioForm = this.showEditBioForm.bind(this);
    this.cancelEditBioForm = this.cancelEditBioForm.bind(this);
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

    try
    {
      
        // fetch data from a url endpoint
        // const response = axios.get(`https://api-business.azurewebsites.net/api/BusinessInfos/get`, {headers: headers});
       const response = await axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/userdetails`, {headers: headers});

        // this.setState({ bankAccountNumber : response.data.data.bankAccountNo });

        // console.log(this.state.bankAccountNo);
        
        // console.log(response.data.data.bankAccountNo);

        //this.setState({ firstname : response.data.data.firstName });

        console.log(response);


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
              <form className="bio-info-form">
                <div className="edit-bio-label">
                  Edit Bio    
                </div>    
                <div className="gender-div">
                  <div className="gender-padding-right">   
                    <div className="bio-form-label">Your Gender<b>*</b></div> 
                    <input type="radio" id="male" name="gender" defaultValue="male" />
                    <label htmlFor="male">Male</label><br />
                    <input type="radio" id="female" name="gender" defaultValue="female" />
                    <label htmlFor="female">Female</label> 
                  </div>
                  <div>    
                    <div className="bio-form-label">Married<b>*</b></div> 
                    <input type="radio" id="male" name="gender" defaultValue="male" />
                    <label htmlFor="male">Yes</label><br />
                    <input type="radio" id="female" name="gender" defaultValue="female" />
                    <label htmlFor="female">No</label>
                  </div>    
                </div>
                <div className="disabled-div">
                  <div className="bio-form-label">Disabled<b>*</b></div>
                  <input type="radio" id="yes" name="disabled" defaultValue="yes" />
                  <label htmlFor="yes">Yes</label>
                  <input type="radio" id="no" name="disabled" defaultValue="no" />
                  <label htmlFor="no">No</label>     
                </div>    
                <div className="bio-form-div">
                  <div className="bio-form-label">Your Academic Level<b>*</b></div> 
                  <select className="bio-form-select" />    
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Other Profession 1</div> 
                  <select className="bio-form-select" /> 
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Other Profession 2</div> 
                  <select className="bio-form-select" />
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Other Profession 3</div> 
                  <select className="bio-form-select" />  
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Other Profession 4</div> 
                  <select className="bio-form-select" />    
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 1<b>*</b></div> 
                  <select className="bio-form-select" />    
                </div>   
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 2</div> 
                  <select className="bio-form-select" />    
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 3</div> 
                  <select className="bio-form-select" />    
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 4</div> 
                  <select className="bio-form-select" />    
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Language 5</div> 
                  <select className="bio-form-select" />    
                </div>    
                <div className="bio-form-div">
                  <div className="bio-form-label">Current Employer (Company / Brand)<b>*</b></div> 
                  <input className="bio-form-input" />    
                </div>
                <div className="bio-form-div">
                  <div className="bio-form-label">Your State<b>*</b></div> 
                  <select className="bio-form-select" />    
                </div>    
                <div className="bio-form-div">
                  <div className="bio-form-label">Your LGA<b>*</b></div> 
                  <select className="bio-form-select" />    
                </div> 
                <div className="job-preferences-div">
                  <div className="job-preferences-label">Your Job Preferences</div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Type<b>*</b></div> 
                    <select className="bio-form-select" />    
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Job Option 1<b>*</b></div> 
                    <select className="bio-form-select" /> 
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Job Option 2</div> 
                    <select className="bio-form-select" />
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Job Option 3</div> 
                    <select className="bio-form-select" />  
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Job Option 4</div> 
                    <select className="bio-form-select" />    
                  </div>
                  <div className="bio-form-div">
                    <div className="bio-form-label">Preferred State<b>*</b></div> 
                    <select className="bio-form-select" />    
                  </div>   
                  <div className="bio-form-div">
                    <div className="bio-form-label">Preferred LGA<b>*</b></div> 
                    <select className="bio-form-select" />    
                  </div>    
                </div>  
                <div className="start-date-main-div">
                  <div className="bio-form-label">Start Date<b>*</b></div>    
                  <input type="radio" id="immediately" name="start_date" defaultValue="immediately" onclick="HideStartDate();" />
                  <label htmlFor="immediately">Immediately</label><br />
                  <input type="radio" id="not_yet" name="start_date" defaultValue="not_yet" onclick="HideStartDate();" />
                  <label htmlFor="not_yet">Not Yet</label><br />    
                  <input type="radio" id="select_date" name="start_date" defaultValue="select_date" onclick="ShowStartDate();" />
                  <label htmlFor="select_date">Select Date</label>
                  <div id="StartDateDiv" className="start-date-div"> <select className="start-date-day">
                      <option>Day</option></select>
                    <select className="start-date-month">
                      <option>Month</option></select>
                    <select className="start-date-year">
                      <option>Year</option></select>    
                  </div>  
                </div>
                <div className="bio-form-button-div">
                  <button onClick={this.cancelEditBioForm} className="cancel-bio-button">Cancel</button>
                  <button onclick="FinishBioForm(); return false;" className="submit-bio-button">Finish</button>    
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
