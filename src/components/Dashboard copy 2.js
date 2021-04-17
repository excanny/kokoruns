import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';


export class Dashboard extends Component {
    render() {
        return (
            <>
       <Header/>


    <section id="UserInfoContainer" className="user-info-container">  


        <div style={{ background: '#f5f5dc'}}>
        <div className="banner">
          <div className="dp-icons">
            <div align="center" className="inbox-div">
              <button className="menu-bar-button-left" href><img className="menu-bar" src="Images/User%20Profile/Inbox%20Logo.png" /></button>
            </div>
            <div align="center" className="dp-div">  
              <img className="dp" src="Images/User%20Profile/User%20DP.png" /> 
            </div>
            <div align="center" className="menu-bar-div">
              <button className="menu-bar-button-right" href><img className="menu-bar" src="Images/User%20Profile/Bars.png" /></button>
            </div> 
          </div>    
          {/*a style="text-decoration: none" href=""><div align="center" class="user-link">kokoruns.com/alfredgreg</div></a*/}
          <div align="center" className="user-name">Demilade Oyeyele<img src className="verification" /> </div> 
          <div align="center" className="user-profession">Accountant</div>
          {/*-------VIEW AND HIDE BIO BUTTONS-------*/}       
          {/*div id="view-bio-div" onclick="ViewBio()" align="center" class="view-bio-div">
        <button align="center" class="view-bio-button">View Bio</button></div*/}
          {/*div id="hide-bio-div" onclick="HideBio()" align="center" class="hide-bio-div">
            <button align="center" class="hide-bio-button">Hide Bio</button></div*/}  
          {/*-------VIEW AND HIDE BIO BUTTONS-------*/}            
          <div align="center" className="sections">
            <div>    
              <button id="exp-b" onclick="ExperienceFunction(); ExperienceButtonsOnclick();" className="sections-div-active">Experience</button> 
            </div>
            <div>      
              <button id="edu-b" onclick="EducationFunction(); EducationButtonsOnclick();" className="sections-div">Education</button>
            </div>
            <div>    
              <button id="port-b" onclick="PortfolioFunction(); PortfolioButtonsOnclick();" className="sections-div">Portfolio</button>
            </div>  
            {/*SECTION BUTTONS WHITE ONLICK SCRIPT*/}
            {/*SECTION BUTTONS WHITE ONLICK SCRIPT*/}      
          </div>    
        </div>
        {/*USER BIO*/}    
        <div id="user-bio" align="center"> 
          <div id="bio-info" className="bio-info">
            <div id="user-bio-dp-container" className="user-bio-dp-container">
              <div align="left" className="bio-dp-div">  
                <img className="bio-dp" src="Images/User%20Profile/User%20DP.png" /> 
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
              <button onclick="ShowEditBioForm(); return false;" className="edit-bio-button">Edit Bio</button> 
            </div>
          </div>
          <div id="bio-form-div" className="bio-info-form-div">
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
                <button onclick="CancelBioForm(); return false;" className="cancel-bio-button">Cancel</button>
                <button onclick="FinishBioForm(); return false;" className="submit-bio-button">Finish</button>    
              </div>    
            </form>
          </div>
        </div>
        {/*USER BIO*/}     
        {/*EXPERIENCE*/}
        <div id="user-experience">
          <section className="user-experience">
            <div className="user-experience-header-container">
              {/*h2 align="center" class="user-experience-header">Experience</h2*/}
              <div align="left" className="exp-update-button-container">
                <button onclick="ShowExperienceForm()" className="exp-update-button"> + Create Experience </button> 
                <button onclick="ViewBio(); return false;" className="bio-button"> View Bio </button>
              </div> 
            </div>
            <div id="exp-update-form-div" className="exp-update-form-div">
              <div className="exp-update-form-container">
                <form className="exp-update-form">
                  <label className="exp-duration-label">From</label>
                  <br />
                  <div style={{display: 'flex'}}>
                    <select className="exp-duration">
                      <option>Month</option>
                    </select>
                    <select className="exp-duration">
                      <option>Year</option>
                    </select>
                  </div>
                  <br />
                  <label className="exp-duration-label">Till</label>
                  <br />
                  <div style={{display: 'flex'}}>
                    <select className="exp-duration">
                      <option>Month</option>
                    </select>
                    <select className="exp-duration">
                      <option>Year</option>
                    </select>
                  </div>
                  <br /><br />
                  <label className="company-label">Company&nbsp;or&nbsp;Business</label><br />
                  <input id="company-or-business" className="company-or-business" type name placeholder required />
                  <br /><br /><br />
                  <label className="position-label">
                    Position</label><br />
                  <input className="position" type name id="positon" placeholder required />
                  <br />
                  <button className="letter-button">Add Employment Letter</button>
                  <br /><br /><br />
                  <label className="roles-and-respon-label">Roles&nbsp;and&nbsp;Responsibilities
                    <b className="b-label">Max 10</b></label>
                  <br />
                  <textarea onclick="Expinit();" id="roles-text-area" className="roles-text-area" placeholder defaultValue={""} /><br className="br-area" />
                  <br />
                  <div className="exp-button-container">
                    <div className="exp-button-right">
                      <button onclick="CancelExperience(); return false" className="exp-cancel-button" action>Cancel</button>
                      <button className="exp-finish-button" action onclick="location.reload()">Finish</button>
                    </div>
                  </div>
                </form> 
              </div> 
            </div> 
            <div className="experience-post-container">
              <div className="exp-cont">
                <div className="exp-cont-2">     
                  <span className="exp-date">June</span>&nbsp;
                  <span className="exp-date">2013</span> - 
                  <span className="exp-date">January</span>&nbsp;
                  <span className="exp-date">2019</span><br /><br />
                  <span className="exp-position">Senior Project Manager</span>&nbsp;
                  <button className="position-button">View</button><br /><br />       
                  <span className="company">Google Alphabet Corp.</span><br /><br />
                  <ul className="roles-and-respon">
                    <li>Programming in HTML</li>
                    <li>Programming in CSS</li>
                    <li>Server-Side Scripting with PHP and Node.js</li>
                    <li>Programming in HTML</li>
                    <li>Programming in CSS</li>
                    <li>Server-Side Scripting with PHP and Node.js</li>
                  </ul>
                  <br />  
                  <div>
                    <button className="exp-edit"><img className src />Edit</button>&nbsp;&nbsp;<button className="exp-delete">Delete</button></div>
                </div>       
              </div>     
            </div>
          </section>    
        </div>   
        {/*EDUCATION*/}
        <div id="user-education">
          <section className="user-education">
            <div className="user-education-header-container">
              <div className="edu-update-button-container">
                <button onclick="ShowEducationForm()" className="edu-update-button"> + Create Education </button>      
                <button onclick="ViewBio(); return false;" className="bio-button"> View Bio </button>
              </div>    
            </div>
            <div id="edu-update-form-div" className="edu-update-form-div">
              <div className="edu-update-form-container">
                <form className="edu-update-form">
                  <label className="edu-duration-label">From</label>
                  <br />
                  <div style={{display: 'flex'}}>
                    <select className="edu-duration">
                      <option>Month</option>
                    </select>
                    <select className="edu-duration">
                      <option>Year</option>
                    </select>
                  </div>
                  <br />
                  <label className="edu-duration-label">Till</label>
                  <br />
                  <div style={{display: 'flex'}}>
                    <select className="edu-duration">
                      <option>Month</option>
                    </select>
                    <select className="edu-duration">
                      <option>Year</option>
                    </select>
                  </div>
                  <br /><br />
                  <label className="school-label">School&nbsp;or&nbsp;institution</label><br />
                  <input id="edu-position" className="school-or-institution" type name placeholder required />
                  <br /><br /><br />
                  <label className="degree-label">
                    Degree&nbsp;or&nbsp;Certificate</label><br />
                  <input className="degree-certificate" type name id="edu-company-name" placeholder required />
                  <br />
                  <button className="certificate-button">Add Certificate</button>
                  <br /><br /><br />
                  <label className="skills-and-topics-label">Skills&nbsp;and&nbsp;Topics&nbsp;Learned<b className="b-label">Max 10</b></label>
                  <br />
                  <textarea onclick="Eduinit();" id="edu-text-area" className="skills-topics-text-area" placeholder defaultValue={""} />
                  <br className="br-area" />
                  <br />
                  <div className="edu-button-container">
                    <div className="edu-button-right">
                      <button onclick="CancelEducation(); return false" className="ed-cancel-button" action>Cancel</button>
                      <button className="ed-finish-button" action onclick="location.reload()">Finish</button>
                    </div>
                  </div>
                </form> 
              </div> 
            </div>    
            <div className="education-post-container">
              <div className="edu-cont">
                <div className="edu-cont-2">
                  <span className="edu-date">June</span>&nbsp;
                  <span className="edu-date">2013</span> - 
                  <span className="edu-date">January</span>&nbsp;&nbsp;<span className="edu-date">2019</span><br /><br />
                  <span className="degree">BS.c Architecture</span>&nbsp;
                  <button className="degree-button">View</button>
                  <br /><br />            
                  <span className="school">Convenant University</span><br /><br />
                  <ul className="skills-topics">
                    <li>Programming in HTML</li>
                    <li>Programming in CSS</li>
                    <li>Server-Side Scripting with PHP and Node.js</li>
                    <li>Programming in HTML</li>
                    <li>Programming in CSS</li>
                    <li>Server-Side Scripting with PHP and Node.js</li>
                  </ul>
                  <br />        
                  <div>
                    <button className="edu-edit"><img className src />Edit</button>&nbsp;&nbsp;<button className="edu-delete">Delete</button></div>
                </div>        
              </div>     
            </div>
            <div className="skills-container">
              <div className="skills-cont-2">
                <h2 className="professional-label">Professional Skills</h2>    
                <div className="skill-padding"><div className="skill">Numerical Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Creative Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Design Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Legal knowledge&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Communication Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Team working Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Commercial Awareness&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Artistic Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Problem Solving Skills&nbsp;<button className="delete-skill-button">x</button></div></div>   
                <div id="add-skill-prof" className="skill-padding">
                  <button onclick="AddProfSkill()" className="add-skill-button">Add skill +</button></div> 
                <div id="form-div-prof" className="form-div">
                  <form className="add-skill-form">
                    <input className="skills-input" type="text" id="skill-input-prof" />&nbsp;
                    <button onclick="CancelAddProfSkill()" className="cancel-add-skill">Cancel</button>
                    <button onclick="FinishAddProfSkill()" className="finish-add-skill">Done</button>
                  </form>
                </div>   
              </div>
            </div>
            <div className="skills-container">
              <div className="skills-cont-2">
                <h2 className="other-label">Other Skills</h2>    
                <div className="skill-padding"><div className="skill">Numerical Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Creative Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Design Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Legal knowledge&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Communication Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Team working Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Commercial Awareness&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Artistic Skills&nbsp;<button className="delete-skill-button">x</button></div></div>
                <div className="skill-padding"><div className="skill">Problem Solving Skills&nbsp;<button className="delete-skill-button">x</button></div></div>   
                <div id="add-skill-other" className="skill-padding">
                  <button onclick="AddOtherSkill()" className="add-skill-button">Add skill +</button></div> 
                <div id="form-div-other" className="form-div">
                  <form className="add-skill-form">
                    <input className="skills-input" type="text" id="skill-input-other" />&nbsp;
                    <button onclick="CancelAddOtherSkill()" className="cancel-add-skill">Cancel</button>
                    <button onclick="FinishAddOtherSkill()" className="finish-add-skill">Done</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/*SKILLS*/}
        {/*section id="user-skills" class="user-skills">
          
          <h1 class="skills-header" align="center">Skills</h1>      
                
        <br>
            
            <div class="skills-container">
                
            <h2 class="professional-label">Professional Skills</h2>    
        
            <div class="skill-padding"><div class="skill">Numerical Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Creative Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Design Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Legal knowledge&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Communication Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Team working Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Commercial Awareness&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Artistic Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Problem Solving Skills&nbsp;<button class="delete-skill-button">x</button></div></div>   
            
              
                
            <div id="add-skill-prof" class="skill-padding">
            <button onclick="AddProfSkill()" class="add-skill-button">Add skill +</button ></div> 
                
                
            <div id="form-div-prof" class="form-div">
                
            <form class="add-skill-form">
            <input class="skills-input" type="text" id="skill-input-prof">&nbsp;
                
                <button onclick="CancelAddProfSkill()" class="cancel-add-skill">Cancel</button>
                
                <button onclick="FinishAddProfSkill()" class="finish-add-skill">Done</button>
                
                </form>
            </div>   
          
            </div>
            
            
                <br><br><br><br>
            
            
            
            
            <div class="skills-container">
                
            <h2 class="other-label">Other Skills</h2>    
        
            <div class="skill-padding"><div class="skill">Numerical Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Creative Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Design Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Legal knowledge&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Communication Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Team working Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Commercial Awareness&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Artistic Skills&nbsp;<button class="delete-skill-button">x</button></div></div>
                
            <div class="skill-padding"><div class="skill">Problem Solving Skills&nbsp;<button class="delete-skill-button">x</button></div></div>   
            
                
                
                
            <div id="add-skill-other" class="skill-padding">
            <button onclick="AddOtherSkill()" class="add-skill-button">Add skill +</button ></div> 
                
                
            <div id="form-div-other" class="form-div">
                
            <form class="add-skill-form">
            <input class="skills-input" type="text" id="skill-input-other">&nbsp;
                
                <button onclick="CancelAddOtherSkill()" class="cancel-add-skill">Cancel</button>
                
                <button onclick="FinishAddOtherSkill()" class="finish-add-skill">Done</button>
                
                </form>
            </div>
                  

            </div>
                
                </section*/}
        {/*PORTFOLIO*/}
        <div id="user-portfolio">
          <section className="user-portfolio">
            <div className="portfolio-header-container">
              <div className="edu-update-button-container">
                <button onclick="ShowEducationForm()" className="edu-update-button">+ Add Image</button> 
                <button onclick="ViewBio(); return false;" className="bio-button"> View Bio </button>
              </div>      
            </div> 
            <div className="porfolio-container-images" align="center">
              {/*button onclick="" class="delete-image-button">
            <img class="image-button" src="Images/User%20Profile/add%20image.png">
            </button*/}
              <a className="image-padding" href="Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="Images/User%20Profile/sample%20image.jpg" /></a>
              <a className="image-padding" href="Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="Images/User%20Profile/sample%20image.jpg" /></a>
              <a className="image-padding" href="Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="Images/User%20Profile/sample%20image.jpg" /></a>
              <a className="image-padding" href="Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="Images/User%20Profile/sample%20image.jpg" /></a>
              <a className="image-padding" href="Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="Images/User%20Profile/sample%20image.jpg" /></a>  
              <a className="image-padding" href="Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="Images/User%20Profile/sample%20image.jpg" /></a>
              <a className="image-padding" href="Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="Images/User%20Profile/sample%20image.jpg" /></a>
              <a className="image-padding" href="Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="Images/User%20Profile/sample%20image.jpg" /></a>
            </div>
            <div className="portfolio-header-container">
              <div className="edu-update-button-container">
                <button onclick="ShowEducationForm()" className="edu-update-button">+ Add Document</button>
                <button onclick="ViewBio(); return false;" className="bio-button"> View Bio </button>
              </div>         
            </div> 
            <div className="porfolio-container-documents" align="center">
              {/*button onclick="" class="delete-image-button">
            <img class="image-button" src="Images/.png">
            </button*/}    
              <a className="image-padding" href><img className="image" src="Images/User%20Profile/sample%20document.jpg" /></a>
              <a className="image-padding" href><img className="image" src="Images/User%20Profile/sample%20document.jpg" /></a>    
              <a className="image-padding" href><img className="image" src="Images/User%20Profile/sample%20document.jpg" /></a>
              <a className="image-padding" href><img className="image" src="Images/User%20Profile/sample%20document.jpg" /></a>
              <a className="image-padding" href><img className="image" src="Images/User%20Profile/sample%20document.jpg" /></a>
              <a className="image-padding" href><img className="image" src="Images/User%20Profile/sample%20document.jpg" /></a>
              <a className="image-padding" href><img className="image" src="Images/User%20Profile/sample%20document.jpg" /></a>
              <a className="image-padding" href><img className="image" src="Images/User%20Profile/sample%20document.jpg" /></a>
            </div>
            <div className="online-links-container">
              <div className="link-cont-2">
                <h2 className="online-links-header">Online Links</h2>     
                <a href><div className="skill-padding"><div className="skill">Instagram&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                <a href><div className="skill-padding"><div className="skill">Twitter&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                <a href><div className="skill-padding"><div className="skill">Facebook&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                <a href><div className="skill-padding"><div className="skill">YouTube&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                <a href><div className="skill-padding"><div className="skill">LinkedIn&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                <a href><div className="skill-padding"><div className="skill">Artstation&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                <a href><div className="skill-padding"><div className="skill">Behance&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                <a href><div className="skill-padding"><div className="skill">Tumblr&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                <a href><div className="skill-padding"><div className="skill">Pinterest&nbsp;<button className="delete-skill-button">x</button></div></div></a>   
                <div id="add-skill-prof-link" className="skill-padding">
                  <button onclick="AddProfLink()" className="add-skill-button">Add Link +</button></div> 
                <div id="form-div-prof-link" className="form-div">
                  <form className="add-skill-form">
                    <input className="link-title" placeholder="Title" type="text" id="skill-input-prof-link" />
                    <input className="link-url" type="text" id="skill-input-prof-link" placeholder="URL (e.g http://www.kokoruns.com/)" />   
                    <br />
                    <button onclick="CancelAddProfLink()" className="cancel-add-skill">Cancel</button>
                    <button onclick="FinishAddProfLink()" className="finish-add-skill">Done</button>
                  </form>
                </div>      
              </div>
            </div>
          </section>
        </div>
      </div>



    
    </section>

</>

        )
    }
}

export default Dashboard
