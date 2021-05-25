import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import UserBio from '../commons/UserBio';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Link } from "react-router-dom";

export class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id: '',
          show: false,
          show2: false,
          start_month: '',
          end_month: '',
          start_year: '',
          end_year: '',
          company_name: '',
          exposition: '',
          experience: [],
          roles: [
            { role_name: '' }
          ],
          roles_edit: '',
          roles_edit_array: [
        
          ],
          experiences: [],
          user: [],
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.hideModal2 = this.hideModal2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleRoleChangeEdit = this.handleRoleChangeEdit.bind(this);
  
      }


      handleRoleChange = (index, e) => {

        const newRoles = [...this.state.roles];
       
          newRoles[index].role_name = e.target.value;

          this.setState({ roles: newRoles });

          //console.log(this.state.roles);
       
      };

      handleRoleChangeEdit = (index, e) => {

        const newRoles = [...this.state.roles_edit_array];
       
          newRoles[index].role_name = e.target.value;

          this.setState({ roles_edit_array: newRoles });

          //console.log(this.state.roles);
       
      };


      handleAddRole = (e) => {
        this.setState((prevState) => ({
          roles: [...prevState.roles, { role_name: "" }],}));
      }
    
      handleRemoveRole = idx => () => {
        this.setState({
            roles: this.state.roles.filter((s, sidx) => idx !== sidx)
        });
      };


      handleAddRoleEdit = (e) => {
        this.setState((prevState) => ({
          roles_edit_array: [...prevState.roles_edit_array, { role_name: "" }],}));
      }
    
      handleRemoveRoleEdit = idx => () => {
        this.setState({
          roles_edit_array: this.state.roles_edit_array.filter((s, sidx) => idx !== sidx)
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

       showModal2 = () => {
        this.setState({ show2: true });
      };
    
      hideModal2 = () => {
        this.setState({ show2: false });
      };

      onHide2 = () => {
        this.setState({ show2: false });
      }

      viewBio = () => {
        //this.props.history("/user-dashboard");
        this.props.history.push("/user-dashboard");
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

              //console.log(response);

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

      convertCSVToJSON(str, delimiter = ',') {
        const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
        const rows = str.slice(str.indexOf('\n') + 1).split('\n');
        return rows.map(row => {
            const values = row.split(delimiter);
            return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
        });
    };


    async EditExperience(id)
    {
      this.setState({ show2: true });

      console.log(id);

      const headers = {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
      }

  
        try 
        {
            // fetch data from a url endpoint
            const response = await  axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/experience/${id}`, {headers: headers});

            console.log(response.data.experience);

            var start_date = response.data.experience.start;
            var end_date = response.data.experience.end;

            var arr_start_date = start_date.split('-');
            var arr_end_date = end_date.split('-');

            // console.log('date: ', arr_start_date[2]);
            // console.log('month: ', arr_start_date[1]);
            // console.log('year: ', arr_start_date[0]);


            // var roles_string = response.data.experience.roles;

            // const roles_string_array = roles_string.split(',');

            
            this.setState({ id: response.data.experience.id, start_month: arr_start_date[1], start_year:  arr_start_date[0], end_month: arr_end_date[1], end_year: arr_end_date[0], company_name: response.data.experience.company_name,
               exposition: response.data.experience.position, roles_edit: response.data.experience.roles});


               
              //  const newRoles = [...this.state.roles];

              //  roles_string_array.map(function(role, prevState){

              //       console.log(role);
              
              //    });


              // const newRoles = [...this.state.roles];
              
              // roles_string_array.map(function(role, s ){
       
              
              //   newRoles[0].role_name = role;

              //   //newRoles[1].role_name = role;

              //   //console.log(newRoles);
                   
                 
              //  });

               //console.log(roles_string_array);

              
              //  var arrayLength = roles_string_array.length;
              //   for (var i = 1; i < arrayLength; i++) {
              //       console.log(roles_string_array[i]);

              //       const newRoles = [...this.state.roles];

              //       //Do something

              //       newRoles[0].role_name = roles_string_array[i];

              //       console.log(newRoles);
              //   }

              

               //console.log(this.state.roles_edit_array);

        

        } 
        catch(error) 
        {
          console.log("error", error);
          // appropriately handle the error
        }
  
    }




      async DeleteExperience(id)
      {

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

  
        try 
        {
            // fetch data from a url endpoint
            const response = await  axios.delete(`https://sheltered-chamber-63274.herokuapp.com/api/deleteexperience/${id}`, {headers: headers});

            console.log(response);

            this.setState({  show2: false});

            window.location.href = "/user-dashboard-experience";

        } 
        catch(error) 
        {
          console.log("error", error);
          // appropriately handle the error
        }
  
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

        const data = { start_month: this.state.start_month, start_year: this.state.start_year, end_month: this.state.end_month, end_year: this.state.end_year, company_name: this.state.company_name, position: this.state.exposition, roles: JSON.stringify(this.state.roles)};  

        //console.log(data);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addexperience`, data, {headers: headers})
        .then((response) => {
           

           this.setState({ experiences: response.data.experiences, loading: true, show: false});
         
           //console.log(response);

           window.location.href = "/user-dashboard-experience";

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }



      handleSubmit2(e) {
        // Form submission logic
        e.preventDefault();

        this.setState({ isLoading: true });

        this.setState({ [e.target.name]: e.target.value });

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        //const data = { start_month: this.state.start_month, start_year: this.state.start_year, end_month: this.state.end_month, end_year: this.state.end_year, company_name: this.state.company_name, position: this.state.exposition, roles: JSON.stringify(this.state.roles)};  
        const data = { id:  this.state.id, start_month: this.state.start_month, start_year: this.state.start_year, end_month: this.state.end_month, end_year: this.state.end_year, company_name: this.state.company_name, position: this.state.exposition};
        //console.log(data);

       axios.put(`https://sheltered-chamber-63274.herokuapp.com/api/updateexperience/${data.id}`, data, {headers: headers})
        .then((response) => {
           

           //this.setState({ experiences: response.data.experiences, loading: true, show: false});
         
           console.log(response);

           //window.location.href = "/user-dashboard-experience";

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }



    render() {

      let minOffset = 0, maxOffset = 100;
      let thisYear = (new Date()).getFullYear();
      let allYears = [];
      for(let x = 0; x <= maxOffset; x++) {
          allYears.push(thisYear - x)
      }

      const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});



        return (

            <>

            <Header/>
          
           <div style={{background: '#f2f2f2'}}>
              <section id="UserInfoContainer" className="user-info-container" >  

                <NavBar/>
                
              </section>

                    <div id="user-experience">
                      <section className="user-experience">


                        <div className="user-experience-header-container">
                          {/*h2 align="center" class="user-experience-header">Experience</h2*/}
                          <div align="left" className="exp-update-button-container">
                            <button onclick="ShowExperienceForm()" className="exp-update-button" onClick={this.showModal}> + Create Experience </button> 
                            <button className="bio-button" onClick={this.viewBio}> View Bio </button>
                          </div> 
                        </div>


              { this.state.experiences ? 

               <div className="mb-5" style={{background: '#f2f2f2'}}>{
                this.state.experiences.map(experience => 
                  
          
                        <div className="experience-post-container mb-4">
                          <div className="exp-cont">
                            <div className="exp-cont-2"> 
                              <div className="row">
                                  <div className="col">
                                  
                                    {/* <i onClick={e => {this.DeleteExperience(experience.experience_id)} } className="float-right fa fa-trash text-warning cursor"></i> */}
                                    <i onClick={e => {
                                      const confirmBox = window.confirm(
                                        "Do you really want to delete this record?"
                                      )
                                      if (confirmBox === true) {
                                        this.DeleteExperience(experience.experience_id)}
                                      }
                                       } className="float-right fa fa-trash text-warning cursor">

                                    </i>
                                    <i onClick={e => {this.EditExperience(experience.experience_id)} } className="float-right fa fa-edit text-danger cursor"></i>
                                  </div>
                                </div>    
                             
                              <span className="exp-date">June</span>&nbsp;
                              <span className="exp-date">2013</span> -    
                              <span className="exp-date">&nbsp;January</span>&nbsp;
                              <span className="exp-date">2019</span><br /><br />
                              <span className="exp-position">{experience.position}</span>&nbsp;
                              <button className="position-button">View</button><br /><br />       
                              <span className="company">{experience.company_name}</span><br /><br />
                              <ul className="roles-and-respon">
            
                                {
                                  experience.roles.split(",").map(entry =>
                                    <li>{entry}</li>
                                  )}

                              </ul>
                              <br />  
                              
                            </div>       
                          </div>     
                        </div>


                      )
                      }
                      </div>
                      :

                        
                      <div className="experience-post-container mb-4">
                      <div className="exp-cont">
                        <div className="exp-cont-2">    
                        
                       
                        <p>Seems you have no job experiences yet. Create a new experience to get started.</p>
                         
                          
                        </div>       
                      </div>     
                    </div>
                    
                    }
                      </section>    
                    </div>
                
          </div>
                   



          <Modal
               
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show} handleClose={this.hideModal}>
               <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Experience Details</strong>
                   </Modal.Title>
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4 bg-light">
                   <form onSubmit={this.handleSubmit} id="expform">
                       <input type="hidden" name="exp_id" id="exp_id" />
                       <p className="text-center mt-0 mb-0">All fields marked <span className="text-danger">*</span> are compulsory</p> 
                       <div className="col-sm-6 pl-0">
                           <label className="exp-duration-label mt-0 mb-0">From <span className="text-danger">*</span></label>
                       </div>
                       <div style={{display: 'flex'}}>
                           <select className="exp-duration form-control rounded-0" style={{marginRight: 5, borderRadius: 5, width: '100%'}} value={this.state.start_month} onChange={this.handleChange} name="start_month" id="exp_start_month" required>
                               <option value="">Month</option>
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
                           <select id="year3" className="exp-duration form-control rounded-0 exp_start_year" style={{borderRadius: 5, width: '100%'}} value={this.state.start_year} onChange={this.handleChange} name="start_year" required>
                               <option value="">Select Year</option>
                               {yearList}
                           </select>
                       </div>
                       <div className="col-sm-6 pl-0">
                           <label className="exp-duration-label mt-3 mb-0">Till <span className="text-danger">*</span></label>
                       </div>
                       <div style={{display: 'flex'}}>
                           <select className="exp-duration form-control rounded-0" style={{marginRight: 5, borderRadius: 5, width: '100%'}} value={this.state.end_month} onChange={this.handleChange} name="end_month" id="exp_end_month" required>
                               <option value="">Month</option>
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
                           <select id="year4" className="exp-duration form-control rounded-0 exp_end_year" style={{borderRadius: 5, width: '100%'}} value={this.state.end_year} onChange={this.handleChange} name="end_year" required>
                               <option value="">Select Year</option>
                               {yearList}
                           </select>
                       </div>
                       <label className="company-label mt-3 mb-0">Company&nbsp;or&nbsp;Business <span className="text-danger">*</span></label><br />
                       <input id="company-or-business2" className="company-or-business form-control rounded-0" type="text" value={this.state.company_name} onChange={this.handleChange} name="company_name" required />
                       <label className="position-label mt-3 mb-0">
                           Position <span className="text-danger">*</span></label><br />
                       <input className="position form-control rounded-0" type="text" value={this.state.exposition} onChange={this.handleChange} name="exposition" id="positon2" placeholder required />
                      
                       <div className="row mt-3">
                           <div className="col-sm-12 col-xs-12">
                           <label className="roles-and-respon-label mt-0 mb-0">Roles&nbsp;and&nbsp;Responsibilities</label>
                           <div id="roles_div">
                           </div>
                          
                           {this.state.roles.map((role, index) => (
                               <div key={index}>

                                   <div className="input-group mb-3">
                                   <input type="text" className="position form-control rounded-0" value={role.role_name} onChange={e => this.handleRoleChange(index, e)} name="roles[]" required/>
                                   <div className="input-group-append">
                                       <button className="btn btn-danger rounded-0" type="button" onClick={this.handleRemoveRole(index)}> x </button>
                                   </div>
                                   </div>

                               </div>
     

                               ))}
  
                           </div>
                       </div>
                       <div id="input-area3" className="row pt-2">
                       </div> 
                       <div id="add-btn3" className="add-tag-button-div mb-3">   
                           <button type="button" onClick={this.handleAddRole} className="add-tag-button" style={{border: '1px solid #90EE90', color: '#90EE90', background: '#fff', borderRadius: 5}}>+ Add More</button>
                       </div> 
                       {/* Modal footer */}
                      
                       </form>

               </Modal.Body>

                    <div className="modal-footer py-0 text-right">
                           <button type="submit" form="expform" className="btn btn-success">Create</button>
                     </div>
               
               </Modal>


                {/* Edit Modal */}

               <Modal
               
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show2} handleClose={this.hideModal2}>
               <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Edit Experience Details</strong>
                   </Modal.Title>
                   <span onClick={this.onHide2} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4">
                   <form onSubmit={this.handleSubmit2}>
                       <input type="hidden" name="exp_id" id="exp_id" />
                       <p className="text-center mt-0 mb-0">All fields marked <span className="text-danger">*</span> are compulsory</p> 
                       <div className="col-sm-6 pl-0">
                           <label className="exp-duration-label mt-0 mb-0">From <span className="text-danger">*</span></label>
                       </div>
                       <div style={{display: 'flex'}}>
                           <select className="exp-duration form-control rounded-0" style={{marginRight: 5, borderRadius: 5, width: '100%'}} value={this.state.start_month} onChange={this.handleChange} name="start_month" id="exp_start_month" required>
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
                           <select id="year3" className="exp-duration form-control rounded-0 exp_start_year" style={{borderRadius: 5, width: '100%'}} value={this.state.start_year} onChange={this.handleChange} name="start_year" required>
                               <option value>Select Year</option>
                               {yearList}
                           </select>
                       </div>
                       <div className="col-sm-6 pl-0">
                           <label className="exp-duration-label mt-3 mb-0">Till <span className="text-danger">*</span></label>
                       </div>
                       <div style={{display: 'flex'}}>
                           <select className="exp-duration form-control rounded-0" style={{marginRight: 5, borderRadius: 5, width: '100%'}} value={this.state.end_month} onChange={this.handleChange} name="end_month" id="exp_end_month" required>
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
                           <select id="year4" className="exp-duration form-control rounded-0 exp_end_year" style={{borderRadius: 5, width: '100%'}} value={this.state.end_year} onChange={this.handleChange} name="end_year" required>
                               <option value>Select Year</option>
                               {yearList}
                           </select>
                       </div>
                       <label className="company-label mt-3 mb-0">Company&nbsp;or&nbsp;Business <span className="text-danger">*</span></label><br />
                       <input id="company-or-business2" className="company-or-business form-control rounded-0" type="text" value={this.state.company_name} onChange={this.handleChange} name="company_name" required />
                       <label className="position-label mt-3 mb-0">
                           Position <span className="text-danger">*</span></label><br />
                       <input className="position form-control rounded-0" type="text" name="exposition" value={this.state.exposition} onChange={this.handleChange}  placeholder required />
                      
                       <div className="row mt-3">
                           <div className="col-sm-12 col-xs-12">
                           <label className="roles-and-respon-label mt-0 mb-0">Roles&nbsp;and&nbsp;Responsibilities</label>
                         

                              {
                              this.state.roles_edit.split(",").map(entry =>
                    
                                <input type="text" className="position form-control rounded-0 mb-3" value={entry} name="roles[]" />
                              )}


                            {this.state.roles_edit_array.map((role, index) => (
                               <div key={index}>

                                   <div className="input-group mb-1">
                                     <input type="text" className="position form-control rounded-0 mt-1" value={role.role_name} onChange={e => this.handleRoleChangeEdit(index, e)} name="roles[]" />
                                   <div className="input-group-append">
                                       <button className="btn btn-danger rounded-0 mt-1" type="button" onClick={this.handleRemoveRoleEdit(index)}> x </button>
                                   </div>
                                   </div>

                               </div>
     

                               ))}
  
                           </div>
                       </div>
                       <div id="input-area3" className="row pt-2">
                       </div> 
                       <div id="add-btn3" className="add-tag-button-div mb-3">   
                           <button type="button" onClick={this.handleAddRoleEdit} className="add-tag-button mt-1" style={{border: '1px solid #90EE90', color: '#90EE90', background: '#fff', borderRadius: 5}}>+ Add More</button>
                       </div> 
                       {/* Modal footer */}
                       <div className="py-1 text-right">
                           <button type="submit" className="btn btn-success">Update</button>
                       </div>
                       </form>

               </Modal.Body>
               
               </Modal>


               <Footer/>

          </>
        )
    }
}

export default Experience;
