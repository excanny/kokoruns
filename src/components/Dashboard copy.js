import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';


export class Dashboard extends Component {
    render() {
        return (
            <>
       <Header/>


<section id="UserInfoContainer" className="user-info-container">  


 <NavBar/>

  <div id="user-bio" align="center" className="user-bio"> 
    <div id="bio-info" className="bio-info border rounded-bottom">
      <div id="user-bio-dp-container" className="user-bio-dp-container">
        <div align="center" className="bio-dp-div">
          <img className="dp" src="<?php echo base_url('/public/profilepics/600/'. $user_details['fprofile_image']);?>" /> 
        </div>   
        <div align="center" className="bio-user-name">  {/*?php echo ucwords(strtolower($user_details['ffirst_name'])); ?*/} {/*?php echo ucwords(strtolower($user_details['flast_name'])); ?*/} <img src className="verification" /> </div> 
        <div align="center" className="bio-user-profession">{/*?php echo ucwords(strtolower($user_details['fprofession'])); ?*/}</div>       
      </div> 
      <div id="user_bio_box">
      </div>   
      <div className="edit-bio-button-div">
        <button onclick="ShowEditBioForm(); return false;" className="edit-bio-button">Edit Bio</button> 
      </div>
    </div>
    <div id="bio-form-div" className="bio-info-form-div">
      <form className="bio-info-form" id="bio-info-form">
        <div className="edit-bio-label">
          Edit Bio    
        </div>  
        <input type="hidden" name="id" defaultValue="<?php echo $user_details['frecno']; ?>" />
        <div className="gender-div">
          <div className="gender-padding-right">   
            <div className="bio-form-label">Your Gender<b>*</b></div> 
            <input type="radio" id="male" name="gender" value="Male"/> 
            <label htmlFor="male">Male</label><br />
            <input type="radio" id="female" name="gender" value="Female"/>
            <label htmlFor="female">Female</label> 
          </div>    
        </div>
        <div>    
          <div className="bio-form-label">Married<b>*</b></div> 
          <input type="radio" id="male" name="marital_status" defaultValue="Yes"  />
          <label htmlFor="male">Yes</label><br />
          <input type="radio" id="female" name="marital_status" defaultValue="No" />
          <label htmlFor="female">No</label>
        </div>
        <div className="disabled-div mt-2">
          <div className="bio-form-label">Disabled<b>*</b></div>
          <input type="radio" id="yes" name="disabled" defaultValue="Yes"  />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="disabled" defaultValue="No" />
          <label htmlFor="no">No</label>     
        </div>    
        <div className="bio-form-div">
          <div className="bio-form-label">Your Academic Level<b>*</b></div> 
          <select className="bio-form-select" name="certificate">
            <option value>Select one</option>
            
          </select>    
        </div>
        <div className="bio-form-div">
          <div className="bio-form-label">Other Profession 1</div> 
          <input type="text" className="bio-form-select" name="other_professions1" id="search_professions" defaultValue="<?php echo $user_details['fother_professions1']; ?>" autoComplete="off" />
          <div className="suggestion-box" style={{overflow: 'auto'}}>
          </div>
        </div> 
        <div className="bio-form-div">
          <div className="bio-form-label">Other Profession 2</div> 
          <input type="text" className="bio-form-select" name="other_professions2" id="search_professions2" defaultValue="<?php echo $user_details['fother_professions2']; ?>" autoComplete="off" />
          <div className="suggestion-box2" style={{overflow: 'auto'}}>
          </div>
        </div>
        <div className="bio-form-div">
          <div className="bio-form-label">Other Profession 3</div> 
          <input type="text" className="bio-form-select" name="other_professions3" id="search_professions3" defaultValue="<?php echo $user_details['fother_professions3']; ?>" autoComplete="off" /> 
          <div className="suggestion-box3" style={{overflow: 'auto'}}>
          </div>
        </div>
        <div className="bio-form-div">
          <div className="bio-form-label">Other Profession 4</div> 
          <input type="text" className="bio-form-select" name="other_professions4" id="search_professions4" defaultValue="<?php echo $user_details['fother_professions4']; ?>" autoComplete="off" /> 
          <div className="suggestion-box4" style={{overflow: 'auto'}}>
          </div>   
        </div>
        <div className="bio-form-div">
          <div className="bio-form-label">Language 1<b>*</b></div> 
          <select className="bio-form-select" name="languages1">
            <option value>Select one</option>
          
          </select>      
        </div>   
        <div className="bio-form-div">
          <div className="bio-form-label">Language 2</div> 
          <select className="bio-form-select" name="languages2">
            <option value>Select one</option>
        
          </select>      
        </div>

        <div className="bio-form-div">
          <div className="bio-form-label">Language 3</div> 
          <select className="bio-form-select" name="languages3">
            <option value>Select one</option>
           
          </select>      
        </div>

        <div className="bio-form-div">
          <div className="bio-form-label">Language 4</div> 
          <select className="bio-form-select" name="languages4">
            <option value>Select one</option>
           
          </select>      
        </div>
        <div className="bio-form-div">
          <div className="bio-form-label">Language 5</div> 
          <select className="bio-form-select" name="languages5">
            <option value>Select one</option>
           
          </select>      
        </div>        
        <div className="bio-form-div">
          <div className="bio-form-label">Current Employer (Company / Brand)<b>*</b></div> 
          <input className="bio-form-input" name="current_employer" defaultValue="<?php echo $user_details['fcurrent_employer']; ?>" />        
        </div>
        <div className="bio-form-div">
          <div className="bio-form-label">Your Location </div> 
          <p className="mb-0 mt-0">State: {/*?php if(empty($user_details['fpreferred_job_location_state'])){ echo "<span style='text-decoration: none;  color: #dc3545;'*/}Not Set"; {'}'}else{'{'} echo "<span style={{textDecoration: 'none', color: '#0991ff'}}>" .$user_details['fpreferred_job_location_state']. "</span>";{'}'} ?&gt;, </p>
          <p>LGA: {/*?php if(empty($user_details['fpreferred_job_location_lga'])){ echo "<span style='text-decoration: none;  color: #dc3545;'*/}Not Set"; {'}'}else{'{'} echo "<span style={{textDecoration: 'none', color: '#0991ff'}}>" .$user_details['fpreferred_job_location_lga']. "</span>";{'}'} ?&gt;</p>
          <a className="btn btn-secondary">Change</a> 
          <div className="job-preferences-div">
            <div className="job-preferences-label">Your Job Preferences</div>
            <div className="bio-form-div">
              <div className="bio-form-label">Type<b>*</b></div> 
              <select className="bio-form-select" id="employment_type" name="employment_type" required>
                <option value>Select one</option>
               
              </select>    
            </div>
            <div className="bio-form-div">
              <div className="bio-form-label">Job Preferences<b>*</b></div> 
              <input type="text" className="bio-form-select" name="preferred_job1" id="preferred_job1" defaultValue="<?php echo $user_details['fother_professions4']; ?>" autoComplete="off" /> 
              <div className="job-options-box" style={{overflow: 'auto'}}>
              </div> 
            </div>
            <div className="bio-form-div">
              <div className="bio-form-label">Preferred Location<b>*</b></div>  
              <p className="mb-0 mt-3">State: {/*?php if(empty($user_details['fpreferred_job_location_state'])){ echo "<span style='text-decoration: none;  color: #dc3545;'*/}Not Set"; {'}'}else{'{'} echo "<span style={{textDecoration: 'none', color: '#0991ff'}}>" .$user_details['fpreferred_job_location_state']. "</span>";{'}'} ?&gt;, </p>
              <p>LGA: {/*?php if(empty($user_details['fpreferred_job_location_lga'])){ echo "<span style='text-decoration: none;  color: #dc3545;'*/}Not Set"; {'}'}else{'{'} echo "<span style={{textDecoration: 'none', color: '#0991ff'}}>" .$user_details['fpreferred_job_location_lga']. "</span>";{'}'} ?&gt;</p>
              <span><button>Change</button></span> 
            </div>   
            <div className="start-date-main-div">
              <div className="bio-form-label">Start Date<b>*</b></div>    
              <input type="radio" id="immediately" name="availability_start_date" defaultValue="now" onclick="HideStartDate();" required />
              <label htmlFor="immediately">Immediately</label>
              <br />
              <input type="radio" id="not_yet" name="availability_start_date" defaultValue="not_yet" onclick="HideStartDate();"  />
              <label htmlFor="not_yet">Not Yet</label><br />    
              <input type="radio" id="select_date" name="availability_start_date" onclick="ShowStartDate();"  />
              <label htmlFor="select_date">Select Date</label>
              <div id="StartDateDiv" className="start-date-div"> 
                <input type="date" name="availability_start_date2" />
              </div>  
            </div>
            <div className="bio-form-button-div">
              <button onclick="CancelBioForm(); return false;" className="cancel-bio-button">Cancel</button>
              <button type="submit" className="submit-bio-button">Save</button>    
            </div>  
          </div>
        </div></form>
    </div></div>
    
    </section>

</>

        )
    }
}

export default Dashboard
