import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import UserBio from '../commons/UserBio';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export class Education extends Component {

    constructor() {
        super();
        this.state = {
          show: false,
          start_month: '',
          end_month: '',
          start_year: '',
          end_year: '',
          school: '',
          class_of_degree: '',
          course: '',
          skills: [
            { skill_name: '' }
          ],
          educations: [],
          user: [],
          show_pro_skill: false,
          pro_skill: '',
          proskills: [],
          show_other_skill: false,
          other_skill: '',
          otherskills: [],
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.AddProfSkill = this.AddProfSkill.bind(this);
        this.AddOtherSkill = this.AddOtherSkill.bind(this);
  
      }


      handleSkillChange = (index, e) => {

          const newSkills = [...this.state.skills];
       
          newSkills[index].skill_name = e.target.value;

          this.setState({ skills: newSkills });

          //console.log(this.state.skills);

        //alert("Hi");
        
       
      };

      handleAddSkill = (e) => {
        this.setState((prevState) => ({
          skills: [...prevState.skills, { skill_name: "" }],}));
      }
    
      handleRemoveSkill = idx => () => {
        this.setState({
            skills: this.state.skills.filter((s, sidx) => idx !== sidx)
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


      AddProfSkill(e)
      {
        this.setState({ show_pro_skill: true });
      }


      AddOtherSkill(e)
      {
        this.setState({ show_other_skill: true });
      }


      async componentDidMount() {

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }


          let one = "https://sheltered-chamber-63274.herokuapp.com/api/educations"
          let two = "https://sheltered-chamber-63274.herokuapp.com/api/proskills";
          let three = "https://sheltered-chamber-63274.herokuapp.com/api/otherskills"
          
          const requestOne = axios.get(one, {headers: headers});
          const requestTwo = axios.get(two, {headers: headers});
          const requestThree = axios.get(three, {headers: headers});
          
          axios.all([
            requestOne, 
            requestTwo, 
            requestThree
          ]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseThree = responses[2]
            // use/access the results 

            this.setState({ educations: responseOne.data.educations, proskills: responseTwo.data.proskills, otherskills: responseThree.data.otherskills, loading: false });

            console.log(responseOne);


          })).catch(errors => {
            // react on errors.
            console.log(errors);
          });
    
      }


      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        //console.log(this.state);
      }


      async EditEducation(id)
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
              const response = await  axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/education/${id}`, {headers: headers});
  
              console.log(response.data.education);
  
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
  
  
  
  
        async DeleteEducation(id)
        {
  
          const headers = {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
          }
  
    
          try 
          {
              // fetch data from a url endpoint
              const response = await  axios.delete(`https://sheltered-chamber-63274.herokuapp.com/api/deleteeducation/${id}`, {headers: headers});
  
              console.log(response);
  
              this.setState({  show2: false});

              window.location.href = "/user-dashboard-education";
  
          } 
          catch(error) 
          {
            console.log("error", error);
            // appropriately handle the error
          }
    
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

        const data = { start_month: this.state.start_month, start_year: this.state.start_year, end_month: this.state.end_month, end_year: this.state.end_year, school: this.state.school, course: this.state.course, class_of_degree: this.state.class_of_degree, skills: JSON.stringify(this.state.skills)};  

        //console.log(data);


          try 
          {
              // fetch data from a url endpoint
              //const response = await  axios.post(`http://127.0.0.1:8000/api/addeducation`, data, {headers: headers});
              const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addeducation`, data, {headers: headers});
              
              console.log(response);

              this.setState({ educations: response.data.educations, loading: false, show: false });

              window.location.href = "/user-dashboard-education";

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



      async handleSubmit2(e) {
        // Form submission logic
        e.preventDefault();

        this.setState({ show_pro_skill: false });


        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        const data = { pro_skill: this.state.pro_skill };  

        //console.log(data);


          try 
          {
              // fetch data from a url endpoint
              //const response = await  axios.post(`http://127.0.0.1:8000/api/addeducation`, data, {headers: headers});
              const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addproskill`, data, {headers: headers});
              
              console.log(response);


              window.location.href = "/user-dashboard-education";

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




      async handleSubmit3(e) {
        // Form submission logic
        e.preventDefault();

        this.setState({ show_other_skill: false });


        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        const data = { other_skill: this.state.other_skill };  

        //console.log(data);


          try 
          {
              // fetch data from a url endpoint
              //const response = await  axios.post(`http://127.0.0.1:8000/api/addeducation`, data, {headers: headers});
              const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addotherskill`, data, {headers: headers});
              
              console.log(response);


              window.location.href = "/user-dashboard-education";

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


              <div id="user-education">
                  <section className="user-education">
                    <div className="user-education-header-container">
                      <div className="edu-update-button-container">
                        <button className="edu-update-button" onClick={this.showModal}> + Create Education </button>      
                        <button onClick={this.viewBio} className="bio-button" > View Bio </button>
                      </div>    
                    </div>
                  </section>

            {this.state.educations ?
               
               <div>
                 
               { this.state.educations.map(education =>

                    <div className="education-post-container mb-5">
                      <div className="edu-cont">
                        <div className="edu-cont-2">

                             <div className="row">
                                  <div className="col">
                                  
                                    <i onClick={e => {
                                      const confirmBox = window.confirm(
                                        "Do you really want to delete this record?"
                                      )
                                      if (confirmBox === true) {
                                        this.DeleteEducation(education.education_id)}
                                      }
                                       } className="float-right fa fa-trash text-warning cursor">

                                    </i>
                                    <i onClick={e => {this.EditEducation(education.education_id)} } className="float-right fa fa-edit text-danger cursor"></i>
                                  </div>
                              </div> 

                          <span className="edu-date">June</span>&nbsp;
                          <span className="edu-date">2013</span> - 
                          <span className="edu-date">January</span>&nbsp;&nbsp;<span className="edu-date">2019</span><br /><br />
                          <span className="degree">{education.class_of_degree} {education.course}</span>&nbsp;
                          <button className="degree-button">View</button>
                          <br /><br />            
                          <span className="school">{education.school}</span><br /><br />
                          <ul className="skills-topics">
                             {
                                  education.skills.split(",").map(entry =>
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

                     
                          <div className="experience-post-containerx mb-4">
                          <div className="exp-cont">
                            <div className="exp-cont-2">    
                            
                          
                            <p className="my-4">Seems you have no educations yet. Create a new education to get started.</p>
                            
                              
                            </div>       
                          </div>     
                        </div>

                      }

                      <div className="skills-container">
                        <div className="skills-cont-2">
                          <h2 className="professional-label">Professional Skills
                          <button onClick={this.AddProfSkill} className="add-skill-button" style={{outline: 'none'}}>Add skill +</button>
                          
                          </h2>    
                          {this.state.show_pro_skill ?

                          <div id="form-div-prof" className="form-divx">
                            <form className="add-skill-form" onSubmit={this.handleSubmit2}>
                              <input className="form-control" type="text" id="skill-input-prof" name="pro_skill" value={this.state.pro_skill} onChange={this.handleChange}/>&nbsp;
                              <button onclick="CancelAddProfSkill()" className="cancel-add-skill">Cancel</button>
                              <button type="submit" className="finish-add-skill bg-success">Save</button>
                            </form>
                          </div>
                          :
                          null
                          } 


                        {this.state.proskills ? 
                        
                          
                          <div>
                 
                        { this.state.proskills.map(proskill =>
                       
                       <div className="skill-padding mt-3"><div className="skill">{proskill.pro_skill} &nbsp;<button className="delete-skill-button">x</button></div></div>
                       
                        )
                          }
                          </div>
                          :
                            
                            
                           
                            <p className="mt-4">Seems you have no professional skills yet. Create a new professional skill to get started.</p>
                             
                              
                          
                         }  

                         
                          
                         

                           
                        </div>
                      </div>


                      <div className="skills-container mt-5 mb-5">
                        <div className="skills-cont-2">
                          <h2 className="other-label">Other Skills  <button onClick={this.AddOtherSkill} className="add-skill-button" style={{outline: 'none'}}>Add skill +</button></h2>    
                          
                          {this.state.show_other_skill ?

                            <div id="form-div-other" className="form-divx">
                              <form className="add-skill-form" onSubmit={this.handleSubmit3}>
                                <input className="form-control" type="text" id="skill-input-other" name="other_skill" value={this.state.other_skill} onChange={this.handleChange}/>&nbsp;
                                <button onclick="CancelAddOtherSkill()" className="cancel-add-skill">Cancel</button>
                                <button className="finish-add-skill bg-success">Save</button>
                              </form>
                            </div>
                            :
                            null
                              }



                      {this.state.otherskills ? 
                          
                          
                          <div>
                 
                        { this.state.otherskills.map(otherskill =>


                          <div className="skill-padding mt-3"><div className="skill">{otherskill.other_skill}&nbsp;<button className="delete-skill-button">x</button></div></div>
                          
                          )
                        }
                        </div>
                        :
                        <p className="mt-4">Seems you have no other skills yet. Create a new other skill to get started.</p>
                       }  

                     
                        </div>
                      </div>
                    </div>




                </div>


            {/* Modal */}


            <Modal
               
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show} handleClose={this.hideModal}>
               <Modal.Header className="modal-header py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Education Details</strong>
                   </Modal.Title>
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4 bg-light">
                   <form onSubmit={this.handleSubmit} id="eduform">
                       <input type="hidden" name="exp_id" id="exp_id" />
                       <p className="text-center mt-0 mb-0">All fields marked <span className="text-danger">*</span> are compulsory</p> 
                       <div className="col-sm-6 pl-0">
                           <label className="exp-duration-label mt-0 mb-0">From <span className="text-danger">*</span></label>
                       </div>
                       <div style={{display: 'flex'}}>
                           <select className="exp-duration form-control  rounded-0" style={{marginRight: 5, borderRadius: 5, width: '100%'}} value={this.state.start_month} onChange={this.handleChange} name="start_month" id="exp_start_month" required>
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
                           <select id="year3" className="exp-duration form-control  rounded-0 exp_start_year" style={{borderRadius: 5, width: '100%'}} value={this.state.start_year} onChange={this.handleChange} name="start_year" required>
                               <option value>Select Year</option>
                               {yearList}
                           </select>
                       </div>
                       <div className="col-sm-6 pl-0">
                           <label className="exp-duration-label mt-3 mb-0">Till <span className="text-danger">*</span></label>
                       </div>
                       <div style={{display: 'flex'}}>
                           <select className="exp-duration form-control  rounded-0" style={{marginRight: 5, borderRadius: 5, width: '100%'}} value={this.state.end_month} onChange={this.handleChange} name="end_month" id="exp_end_month" required>
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
                           <select id="year4" className="exp-duration form-control  rounded-0 exp_end_year" style={{borderRadius: 5, width: '100%'}} value={this.state.end_year} onChange={this.handleChange} name="end_year" required>
                               <option value>Select Year</option>
                               {yearList}
                           </select>
                       </div>
                       <label className="company-label mt-3 mb-0">School&nbsp;or&nbsp;Institution <span className="text-danger">*</span></label><br />
                       <input id="company-or-business2" className="company-or-business form-control  rounded-0" type="text" value={this.state.school} onChange={this.handleChange} name="school" required />
                       <label className="position-label mt-3 mb-0">
                       Course of Study <span className="text-danger">*</span></label><br />
                       <input className="position form-control  rounded-0" type="text" value={this.state.course} onChange={this.handleChange} name="course" id="positon2" placeholder required />

                      <div>
                        <label className="degree-label mt-3 mb-0">
                          Degree&nbsp;or&nbsp;Certificate <span className="text-danger">*</span></label><br />
                        <select className="degree-certificate form-control rounded-0" value={this.state.class_of_degree} onChange={this.handleChange} name="class_of_degree" id="certificate" required>
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

                       <div className="row mt-3">
                           <div className="col-sm-12 col-xs-12">
                          <label class="skills-and-topics-label mt-0 mb-0">Skills&nbsp;or&nbsp;Topics&nbsp;Learned</label> 
                            <div id="skills_div">
                           </div> 

                           {this.state.skills.map((skill, index) => (
                               <div key={index}>

                                   <div className="input-group mb-3">
                                   {/* <input type="text" className="position form-control rounded-0" value={skill.skill_name} onChange={e => this.handleSkillChange(index, e)} name="skills[]" /> */}
                                   <input type="text" className="position form-control rounded-0" value={skill.skill_name} onChange={e => this.handleSkillChange(index, e)} name="skills[]" />
                                   <div className="input-group-append">
                                       <button className="btn btn-danger rounded-0" type="button" onClick={this.handleRemoveSkill(index)}> x </button>
                                   </div>
                                   </div>

                               </div>
     

                               ))}

                            <div id="input-area3" className="row pt-2">
                            </div> 
                            <div id="add-btn3" className="add-tag-button-div mb-3">   
                                <button type="button" onClick={this.handleAddSkill} className="add-tag-button" style={{border: '1px solid #90EE90', color: '#90EE90', background: '#fff', borderRadius: 5}}>+ Add More</button>
                            </div> 

                           
                          </div>
                        </div>

                    </form>

               </Modal.Body>

                <div className="modal-footer py-0 text-right">
                           <button type="submit" form="eduform" className="btn btn-success">Create</button>
                     </div>
               
               </Modal>

              {/* Modal */}

              <Footer/>

          </>
        )
    }
}

export default Education;
