import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import UserBio from '../commons/UserBio';
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
          user: [],
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleRoleChange = this.handleRoleChange.bind(this);
  
      }


      handleRoleChange = idx => e => {
        const newRoles= this.state.roles.map((role, sidx) => {
          if (idx !== sidx) return role;
          return { ...role, name: e.target.value };
        });
    
        this.setState({ roles: newRoles });

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

    
          try 
          {
              // fetch data from a url endpoint
              const response = await  axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/experiences`, {headers: headers});

              console.log(response);

              this.setState({ experiences: response.data.experiences, loading: false });

              // console.log(response.data.expe[0]);

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

        const data = { start_month: this.state.start_month, start_year: this.state.start_year, end_month: this.state.end_month, end_year: this.state.end_year, company_name: this.state.company_name, position: this.state.exposition, roles:  JSON.stringify(this.state.roles)};  

        //console.log(data);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addexperience`, data, {headers: headers})
        .then((response) => {
           

           this.setState({ experiences: response.data.experiences, loading: true, show: false});
         
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

           


              <UserBio />
              
              </section>


          <div id="user-experience" style={{paddingLeft: 59, paddingBottom: 50}}>
                      {/*EXPERIENCE*/}
                      <div style={{paddingTop: 15, paddingBottom: 15, width: '69.4%'}}>
                          <section className="user-experience card mb-4">  
                          <div className="exp-update-button-container">
                              <button className="btn btn-danger rounded-0" onClick={this.showModal}>Create Experience +</button>      
                          </div> 
                          </section>    
                      </div> 

          <div>
              {this.state.loading || !this.state.experiences ? 
              (<div>Loading</div>) :
               (
               <div>{
                this.state.experiences.map(experience =>
                  
                  <div>
                          <div id="experience-post-container" style={{width: '69.4%'}}>
                              <section className="user-experience card mb-5 py-5 px-3">
                                  <div className="experience-post-container">
                                      <div className="exp-cont">
                                      <div className>     
                                          <div className="row">
                                          <div className="col">
                                              <span className="exp-date ">{experience.start}</span> - &nbsp;
                                               <span className="exp-date">{experience.end}</span>
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
                                          <p className="mt-3 mb-2"><span className="exp-position">{experience.position}</span> </p>
                                          <span className="company">{experience.company_name}</span><br /><br />
                                          <ul className="roles-and-respon">';
                                         
                                              {/* <li>'.$role.'</li> */}
                                         
                                          </ul>
                                          <br />  
                                      </div>
                                      </div>
                                  </div>
                              </section>

                          </div>
                      </div>   
                )
                }
               </div>)}
          </div>

          </div>

            {/* Modal */}


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

              {/* Modal */}

          </>
        )
    }
}

export default Experience;
