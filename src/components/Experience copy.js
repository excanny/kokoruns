import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export class Experience extends Component {

    constructor() {
        super();
        this.state = {
          show: false,
          start_month: '',
          end_month: '',
          start_year: '',
          end_year: '',
          company_name: '',
          exposition: '',
          roles: [
            { role_name: "edfefef" }
          ],
          experiences: [],

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleRoleChange = this.handleRoleChange.bind(this);
  
      }



  //    handleRoleChange(idx, e) {
  //     let roles = [...this.state.roles];
  //     // roles[idx] = e.target.value;
  //     this.setState({ roles });
  //     console.log(roles);
  //  }

      handleRoleChange = idx => e => {
        const newRoles= this.state.roles.map((role, sidx) => {
          if (idx !== sidx) return role;
          return { ...role, name: e.target.value };
        });
    
        this.setState({ roles: newRoles });
        //console.log(e.target.value);
        //this.state.roles[idx] = e.target.value;
        //this.setState({ roles: this.state.roles });
      };

      handleAddSkill = () => {
        this.setState({
          roles: this.state.roles.concat([{ role_name: "" }])
        });
      };
    
      handleRemoveSkill = idx => () => {
        this.setState({
            roles: this.state.roles.filter((s, sidx) => idx !== sidx)
        });
      };

    
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

      
      onHide = () => {
        this.setState({ show: false });
      }


      async componentDidMount() {

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        //console.log(data);

        // async function asyncFunc() {
        //   // fetch data from a url endpoint
        //   const response = await  axios.get(`http://127.0.0.1:8000/api/experiences`, {headers: headers});
        //   const data = await response.json();
        
        //       return data;
        // }

      
        // .then((response) => {
           
        //   //  if (response.data.success === true) 
        //   //  {
        //   //     this.setState({
        //   //       isVerifyComplete: 1,
        //   //     });
             
        //   //     this.props.history.push("/get-started");
        //   //  }  
        //   //  else 
        //   //  {
        //   //     this.props.history.push('/signup'); 
        //   //  }  

        //    //this.props.history.push("/registersuccess");
        //   //  this.setState({ show: false });
         
        //    //console.log(response.data.experiences);

        //    this.setState({ experiences: response.data.experiences });

        //    console.log(this.state.experiences);

        //  })
        //  .catch( error => {
        //    console.log(error.response);
        //  });

    
          try 
          {
              // fetch data from a url endpoint
              const response = await  axios.get(`http://127.0.0.1:8000/api/experiences`, {headers: headers});

              //console.log(response.data);

              this.setState({ experiences: response.data.experiences });

              console.log(this.state.experiences);

          } 
          catch(error) 
          {
            console.log("error", error);
            // appropriately handle the error
          }
    
      }


      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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

        const data = { start_month: this.state.start_month, start_year: this.state.start_year, end_month: this.state.end_month, end_year: this.state.end_year, start_month: this.state.start_month, company_name: this.state.company_name, exposition: this.state.exposition, roles:  JSON.stringify(this.state.roles)};  

        //console.log(data);

       axios.post(`http://127.0.0.1:8000/api/addexperience`, data, {headers: headers})
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

           //this.props.history.push("/registersuccess");
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
        </div>
        </form>
    </div>
    </div>
    
    </section>



    {/*EXPERIENCE*/}

         
              <div id="user-experience" style={{paddingLeft: 59, paddingBottom: 50}}>
                      {/*EXPERIENCE*/}
                      <div>
                          <section className="user-experience card mb-4">  
                          <div className="exp-update-button-container">
                              <button className="btn btn-danger rounded-0" onClick={this.showModal}>Create Experience +</button>      
                          </div> 
                          </section>    
                      </div> 


                    

                      <div>
                        {this.state.experiences.map((person, index) => (
                            <p>Hello, !</p>
                        ))}
                        </div>

                    

                  {/* { this.state.experiences.map( experience => ( */}
                   {/* { this.state.experiences.map((experience, key) => { */}



          
                      <div>
                          <div id="experience-post-container" style={{width: '69.4%'}}>
                              <section className="user-experience card mb-5">
                                  <div className="experience-post-container">
                                      <div className="exp-cont">
                                      <div className>     
                                          <div className="row">
                                          <div className="col">
                                              <span className="exp-date ">'.date('F Y', strtotime($experience['fstart'])).'</span> - 
                                              <span className="exp-date">'.date('F Y', strtotime($experience['fend'])).'</span>
                                          </div>
                                          <div className="col text-right">
                                              <div className="dropdown dropleft">
                                              <i className="fa fa-ellipsis-v cursor" data-toggle="dropdown" />
                                              <div className="dropdown-menu rounded-0 bg-light p-0">
                                                  <a className="dropdown-item p-0 edit-experience-btn cursor" data-toggle="modal" data-exp_id="'.$experience['frecno'].'" data-exp_start_month="'.$month1.'" data-exp_start_year="'.$year1.'" data-exp_end_month="'.$month2.'" data-exp_end_year="'.$year2.'" data-company="'.$experience['fcompany_name'].'" data-position="'.$experience['fposition'].'" data-roles="'.$experience['frole'].'"><i className="fa fa-edit text-warning" /> &nbsp;Edit</a>
                                                  <a className="dropdown-item p-0 exp-delete cursor" data-exp_id="'.$experience['frecno'].'"><i className="fa fa-trash text-danger" /> Delete</a>
                                              </div>
                                              </div>
                                          </div>
                                          </div>
                                          <p className="mt-3 mb-2"><span className="exp-position">'.ucwords(strtolower($experience['fposition'])).'</span> </p>
                                          <span className="company">'.ucwords(strtolower($experience['fcompany_name'])).'</span><br /><br />
                                          <ul className="roles-and-respon">';
                                          foreach($roles_array as $role)
                                          {'{'}
                                          $output .= '<li>'.$role.'</li>';
                                          {'}'}
                                          $output .= '
                                          </ul><br />  
                                      </div>
                                      </div>
                                  </div>
                              </section>

                          </div>
                      </div>   
                     
                   {/* } )   }  */}
                    </div>

                 

            <Modal
               
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.show} handleClose={this.hideModal}>
                <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                    <strong> Experience Details</strong>
                    </Modal.Title>
                    <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.handleSubmit}>
                        <input type="hidden" name="exp_id" id="exp_id" />
                        <p className="text-center mt-0 mb-0">All fields marked <span className="text-danger">*</span> are compulsory</p> 
                        <div className="col-sm-6 pl-0">
                            <label className="exp-duration-label mt-0 mb-0">From <span className="text-danger">*</span></label>
                        </div>
                        <div style={{display: 'flex'}}>
                            <select className="exp-duration form-control form-control-sm rounded-0" style={{marginRight: 5, borderRadius: 5, width: '100%'}} value={this.state.start_month} onChange={this.handleChange} name="start_month" id="exp_start_month" required>
                                <option value>Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select id="year3" className="exp-duration form-control form-control-sm rounded-0 exp_start_year" style={{borderRadius: 5, width: '100%'}} value={this.state.start_year} onChange={this.handleChange} name="start_year" required>
                                <option value>Select Year</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                        <div className="col-sm-6 pl-0">
                            <label className="exp-duration-label mt-3 mb-0">Till <span className="text-danger">*</span></label>
                        </div>
                        <div style={{display: 'flex'}}>
                            <select className="exp-duration form-control form-control-sm rounded-0" style={{marginRight: 5, borderRadius: 5, width: '100%'}} value={this.state.end_month} onChange={this.handleChange} name="end_month" id="exp_end_month" required>
                                <option value>Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select id="year4" className="exp-duration form-control form-control-sm rounded-0 exp_end_year" style={{borderRadius: 5, width: '100%'}} value={this.state.end_year} onChange={this.handleChange} name="end_year" required>
                                <option value>Select Year</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                        <label className="company-label mt-3 mb-0">Company&nbsp;or&nbsp;Business <span className="text-danger">*</span></label><br />
                        <input id="company-or-business2" className="company-or-business form-control form-control-sm rounded-0" type="text" value={this.state.company_name} onChange={this.handleChange} name="company_name" required />
                        <label className="position-label mt-3 mb-0">
                            Position <span className="text-danger">*</span></label><br />
                        <input className="position form-control form-control-sm rounded-0" type="text" value={this.state.exposition} onChange={this.handleChange} name="exposition" id="positon2" placeholder required />
                       
                        <div className="row mt-3">
                            <div className="col-sm-10 col-xs-10">
                            <label className="roles-and-respon-label mt-0 mb-0">Roles&nbsp;and&nbsp;Responsibilities</label>
                            <div id="roles_div">
                            </div>
                           
                            {this.state.roles.map((role, idx) => (
                                <div key={idx}>

                                    <div className="input-group mb-3">
                                    <input type="text" className="form-control" value={role.role_name} onChange={e => this.handleRoleChange(e, idx)} name="role" />
                                    <div className="input-group-append">
                                        <button className="btn btn-danger" type="button" onClick={this.handleRemoveSkill(idx)}> x </button>
                                    </div>
                                    </div>

                                </div>

                                   

                                ))}

                                 
                            </div>
                        </div>
                        <div id="input-area3" className="row pt-2">
                        </div> 
                        <div id="add-btn3" className="add-tag-button-div mb-3">   
                            <button type="button" onClick={this.handleAddSkill} className="add-tag-button" style={{border: '1px solid #90EE90', color: '#90EE90', background: '#fff', borderRadius: 5}}>+ Add More</button>
                        </div> 
                        {/* Modal footer */}
                        <div className="modal-footer py-1">
                            <button type="submit" className="btn btn-success btn-sm">Update</button>
                        </div>
                        </form>

                </Modal.Body>
                
                </Modal>

           
        </>

        )
    }
}

export default Experience
