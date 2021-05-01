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
          experiences: [],
          user: [],
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
  
      }


      handleRoleChange = (index, e) => {

        const newRoles = [...this.state.roles];
       
          newRoles[index].role_name = e.target.value;

          this.setState({ roles: newRoles });

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

      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

      onHide = () => {
        this.setState({ show: false });
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

      const headers = {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
      }

  
        try 
        {
            // fetch data from a url endpoint
            const response = await  axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/experiences/${id}`, {headers: headers});

            console.log(response.data.experience);

            //this.setState({ experience: response.data.experience, loading: false });

        

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


          {this.state.loading || !this.state.experiences ? 

              
               
               <div className="mb-5" style={{background: '#f2f2f2'}}>{
                this.state.experiences.map(experience => 
                  
                  
                  
                        <div className="experience-post-container mb-4">
                          <div className="exp-cont">
                            <div className="exp-cont-2">    
                            <button onClick={e => {this.EditExperience(experience.id)} } >Edit</button> 
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
               <Modal.Body className="px-4">
                   <form onSubmit={this.handleSubmit}>
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
                       <input className="position form-control rounded-0" type="text" value={this.state.exposition} onChange={this.handleChange} name="exposition" id="positon2" placeholder required />
                      
                       <div className="row mt-3">
                           <div className="col-sm-12 col-xs-12">
                           <label className="roles-and-respon-label mt-0 mb-0">Roles&nbsp;and&nbsp;Responsibilities</label>
                           <div id="roles_div">
                           </div>
                          
                           {this.state.roles.map((role, index) => (
                               <div key={index}>

                                   <div className="input-group mb-3">
                                   <input type="text" className="position form-control rounded-0" value={role.role_name} onChange={e => this.handleRoleChange(index, e)} name="roles[]" />
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
                       <div className="py-1 text-right">
                           <button type="submit" className="btn btn-success">Create</button>
                       </div>
                       </form>

               </Modal.Body>
               
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
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4">
                   <form onSubmit={this.handleSubmit}>
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
                       <input className="position form-control rounded-0" type="text" value={this.state.exposition} onChange={this.handleChange} name="exposition" id="positon2" placeholder required />
                      
                       <div className="row mt-3">
                           <div className="col-sm-12 col-xs-12">
                           <label className="roles-and-respon-label mt-0 mb-0">Roles&nbsp;and&nbsp;Responsibilities</label>
                           <div id="roles_div">
                           </div>
                          
                           {this.state.roles.map((role, index) => (
                               <div key={index}>

                                   <div className="input-group mb-3">
                                   <input type="text" className="position form-control rounded-0" value={role.role_name} onChange={e => this.handleRoleChange(index, e)} name="roles[]" />
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
                       <div className="py-1 text-right">
                           <button type="submit" className="btn btn-success">Create</button>
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
