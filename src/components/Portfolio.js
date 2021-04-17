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

          show: false,
          inputImageValue: '',
          filename: '',
          loading: true,
          pictures: [] ,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    
  
      }


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

        this.setState({ filename : e.target.files[0].name });

        for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
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

        let formData = new FormData();
        formData.append('file', e.target.filename.files[0]);

        //console.log(data);

         //Display the key/value pairs
          // for (var pair of formData.entries()) {
          //   console.log(pair[0]+ ', ' + pair[1]); 
          // }

          alert("efef");


          // try 
          // {
          //     // fetch data from a url endpoint
          //     const response = await  axios.post(`http://127.0.0.1:8000/api/addportfolio`, formData, {headers: headers});
          //     //const response = await  axios.post(`https://lit-ridge-07527.herokuapp.com/api/addeducation`, data, {headers: headers});
              
          //     console.log(response);

          //     //this.setState({ educations: response.data.educations, loading: false, show: false });

          //     //window.location.href = "/user-dashboard-education";

          //     //this.props.history.push("/user-dashboard-education");

          //     // console.log(response.data.expe[0]);

          // } 
          // catch(error) 
          // {
          //   // console.log("error", error);
          //   // appropriately handle the error
          //   console.log(error.response);
          // }

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
          
            <div style={{background: '#f2f2f2'}}>
                <section id="UserInfoContainer" className="user-info-container" >  

                    <NavBar/>

                </section>


                  <div id="user-portfolio" className="mb-5">
                    <section className="user-portfolio">
                      <div className="portfolio-header-container">
                        <div className="edu-update-button-container">
                          <button onclick="ShowEducationForm()" className="edu-update-button" onClick={this.showModal}>+ Add Image</button> 
                          <button onclick="ViewBio(); return false;" className="bio-button"> View Bio </button>
                        </div>      
                      </div> 
                      <div className="porfolio-container-images" align="center">
                        {/*button onclick="" class="delete-image-button">
                          <img class="image-button" src="Images/User%20Profile/add%20image.png">
                          </button*/}
                        <a className="image-padding" href="assets/Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="assets/Images/User%20Profile/sample%20image.jpg" /></a>
                        <a className="image-padding" href="assets/Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="assets/Images/User%20Profile/sample%20image.jpg" /></a>
                        <a className="image-padding" href="assets/Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="assets/Images/User%20Profile/sample%20image.jpg" /></a>
                        <a className="image-padding" href="assets/Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="assets/Images/User%20Profile/sample%20image.jpg" /></a>
                        <a className="image-padding" href="assets/Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="assets/Images/User%20Profile/sample%20image.jpg" /></a>  
                        <a className="image-padding" href="assets/Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="assets/Images/User%20Profile/sample%20image.jpg" /></a>
                        <a className="image-padding" href="assets/Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="assets/Images/User%20Profile/sample%20image.jpg" /></a>
                        <a className="image-padding" href="assets/Images/User%20Profile/sample%20image.jpg" target="_blank"><img className="image" src="assets/Images/User%20Profile/sample%20image.jpg" /></a>
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
                        <a className="image-padding" href><img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" /></a>
                        <a className="image-padding" href><img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" /></a>    
                        <a className="image-padding" href><img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" /></a>
                        <a className="image-padding" href><img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" /></a>
                        <a className="image-padding" href><img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" /></a>
                        <a className="image-padding" href><img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" /></a>
                        <a className="image-padding" href><img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" /></a>
                        <a className="image-padding" href><img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" /></a>
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
           
            {/* Modal */}


            <Modal
               
              //  size="sm"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               show={this.state.show} handleClose={this.hideModal}>
               <Modal.Header className="modal-header py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Upload Image</strong>
                   </Modal.Title>
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body>
                   <form onSubmit={this.handleSubmit}>


                        {/* <div className="custom-file ">
                          <input type="file" className="custom-file-input" id="customFile" onChange={this.handleImageChange} value={this.state.filename} name="filename"/>
                          <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div> */}

                          <input type="file" onChange={this.handleImageChange} value={this.state.filename} name="filename" />

                        <div className="mt-4 text-center">
                             <button type="button" class="btn btn-primary">Upload</button>
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
