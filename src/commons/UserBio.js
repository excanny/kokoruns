import React, { Component } from 'react'

export class UserBio extends Component {
    render() {
        return (
            <div id="user-bio" align="center" className="user-bio"> 
              <div id="bio-info" className="bio-info border rounded-bottom">
                <div id="user-bio-dp-container" className="user-bio-dp-container">
                  <div align="center" className="bio-dp-div">
                    {/* <img className="dp" src="assets/profilepics/600/" />  */}
                    <img className="dp" src="data:image/png;base64,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" />
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
                  </div>
                  </form>
              </div>
              </div>
        )
    }
}

export default UserBio
