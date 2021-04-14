import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import UserBio from '../commons/UserBio';
import Modal from 'react-bootstrap/Modal';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

export class Portfolio extends Component {

    constructor() {
        super();
        this.state = {
         
          inputImageValue: '',
         
          loading: true,
         pictures: [] ,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
       
         this.onDrop = this.onDrop.bind(this);
  
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


      // async componentDidMount() {

      //   const headers = {
      //     "Content-Type": "application/json",
      //     'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
      //   }

    
      //     try 
      //     {
      //         // fetch data from a url endpoint
      //         const response = await  axios.get(`https://lit-ridge-07527.herokuapp.com/api/educations`, {headers: headers});

      //         //console.log(response.data.experiences);

      //         this.setState({ educations: response.data.educations, loading: false });

      //         // console.log(response.data.expe[0]);

      //     } 
      //     catch(error) 
      //     {
      //       console.log("error", error);
      //       // appropriately handle the error
      //     }
    
      // }


      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleImageChange(e) {
     

        let formData = new FormData();
        formData.append('file', e.target.files[0].name );

        // for (var pair of formData.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }





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

        let formData = new FormData();
        formData.append('file', e.target.inputImageValue.files[0]);

        //console.log(data);

         //Display the key/value pairs
      for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
      }


          try 
          {
              // fetch data from a url endpoint
              const response = await  axios.post(`http://127.0.0.1:8000/api/addportfolio`, formData, {headers: headers});
              //const response = await  axios.post(`https://lit-ridge-07527.herokuapp.com/api/addeducation`, data, {headers: headers});
              
              console.log(response);

              //this.setState({ educations: response.data.educations, loading: false, show: false });

              //window.location.href = "/user-dashboard-education";

              //this.props.history.push("/user-dashboard-education");

              // console.log(response.data.expe[0]);

          } 
          catch(error) 
          {
            // console.log("error", error);
            // appropriately handle the error
            console.log(error.response);
          }

      }



      onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
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
                    

            <div class="portfolio-header-container">
              
              <div class="edu-update-button-container">
                 <label for="file-input-images" class="mb-0 mt-0 mt-1 mb-1">
                   <span class="edu-update-button btn-danger py-2 px-3 mt-2 cursor">Add Image</span>
                 </label>
                 <input type="file" name="inputImageValue" id="file-input-images" onChange={this.handleImageChange} value={this.state.inputImageValue} accept='image/*' hidden/>     
               
              </div>      
                 
           </div> 


           <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />

          <div>
              {this.state.loading || !this.state.experiences ? 
              (<div>Loading</div>) :
               (
               <div>{
                this.state.educations.map(education =>
                  
                  <div>
                          <div id="experience-post-container" style={{width: '69.4%'}}>
                              <section className="user-experience card mb-5">
                                  <div className="experience-post-container">
                                      <div className="exp-cont">
                                      <div className>     
                                          <div className="row">
                                          <div className="col">
                                              <span className="exp-date ">{education.start}</span> - 
                                              <span className="exp-date">{education.end}</span>
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
                                          <p className="mt-3 mb-2"><span className="exp-position">{education.position}</span> </p>
                                          <span className="company">{education.company_name}</span><br /><br />
                                          <ul className="roles-and-respon">';
                                         
                                              <li>'.$role.'</li>
                                         
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
               <Modal.Header className="modal-header py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Education Details</strong>
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
                       <label className="company-label mt-3 mb-0">School&nbsp;or&nbsp;Institution <span className="text-danger">*</span></label><br />
                       <input id="company-or-business2" className="company-or-business form-control form-control-sm rounded-0" type="text" value={this.state.school} onChange={this.handleChange} name="school" required />
                       <label className="position-label mt-3 mb-0">
                       Course of Study <span className="text-danger">*</span></label><br />
                       <input className="position form-control form-control-sm rounded-0" type="text" value={this.state.course} onChange={this.handleChange} name="course" id="positon2" placeholder required />

                      <div>
                        <label className="degree-label mt-3 mb-0">
                          Degree&nbsp;or&nbsp;Certificate <span className="text-danger">*</span></label><br />
                        <select className="degree-certificate form-control form-control-sm rounded-0" value={this.state.class_of_degree} onChange={this.handleChange} name="class_of_degree" id="certificate" required>
                          <option value>Select one</option>
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

                       {/* <div className="row mt-3">
                           <div className="col-sm-10 col-xs-10">
                           {/* <label class="skills-and-topics-label mt-0 mb-0">Skills&nbsp;or&nbsp;Topics&nbsp;Learned</label> */}
                           {/* <div id="skills_div">
                           </div> */}
                          
                       {/* </div> */}
                       <div id="input-area3" className="row pt-2">
                       </div> 
                       <div id="add-btn3" className="add-tag-button-div mb-3">   
                           <button type="button" onClick={this.handleAddSkill} className="add-tag-button" style={{border: '1px solid #90EE90', color: '#90EE90', background: '#fff', borderRadius: 5}}>+ Add More</button>
                       </div> 
                       {/* Modal footer */}
                       <div className="modal-footer py-1">
                           <button type="submit" className="btn btn-success btn-sm">Create</button>
                       </div>
                       </form>

               </Modal.Body>
               
               </Modal>

              {/* Modal */}

          </>
        )
    }
}

export default Portfolio;
