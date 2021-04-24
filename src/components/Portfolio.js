import React, { Component } from 'react';
import Header from '../commons/Header';
import NavBar from '../commons/NavBar';
import Footer from '../commons/Footer';
import UserBio from '../commons/UserBio';
import Modal from 'react-bootstrap/Modal';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

export class Portfolio extends Component {

    constructor() {
        super();
        this.state = {

          show: false,
          show2: false,
          filename: null,
          docname: null,
          loading: true,
          loading2: true,
          portfolios: [] ,
          documents: [] ,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showModal2 = this.showModal2.bind(this);
        this.hideModal2 = this.hideModal2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onDocChange = this.onDocChange.bind(this);
  
      }


 
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

    
          // try 
          // {
          //     // fetch data from a url endpoint
          //     const response = await  axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/portfolios`, {headers: headers});

          //     console.log(response.data.portfolios);

          //    this.setState({ portfolios: response.data.portfolios, loading: false });

          //     // console.log(response.data.expe[0]);

          // } 
          // catch(error) 
          // {
          //   console.log("error", error);
          //   // appropriately handle the error
          // }

          let one = "https://sheltered-chamber-63274.herokuapp.com/api/portfolios"
          let two = "https://sheltered-chamber-63274.herokuapp.com/api/documents";
          // let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
          
          const requestOne = axios.get(one, {headers: headers});
          const requestTwo = axios.get(two, {headers: headers});
          // const requestThree = axios.get(three, {headers: headers});
          
          axios.all([
            requestOne, 
            requestTwo, 
            //requestThree
          ]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            // const responesThree = responses[2]
            // use/access the results 

            this.setState({ portfolios: responseOne.data.portfolios, documents: responseTwo.data.documents, loading: false });

            //console.log(responseTwo);


          })).catch(errors => {
            // react on errors.
            console.log(errors);
          });
    
      }


      onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };



      onDocChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            doc: URL.createObjectURL(img)
          });
        }
      };


      async handleSubmit(e) {
        // Form submission logic
        e.preventDefault();


        console.log(localStorage.getItem('access_token'));

        this.setState({ isLoading: true, show: false });

       

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        let formData = new FormData();
        formData.append('portfolio', e.target.myImage.files[0]);

        //console.log(data);

         //Display the key/value pairs
          for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
          }

         


          try 
          {
              // fetch data from a url endpoint
              const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addportfolio`, formData, {headers: headers});
              //const response = await  axios.post(`https://lit-ridge-07527.herokuapp.com/api/addeducation`, data, {headers: headers});
              
              console.log(response);

              //this.setState({ educations: response.data.educations, loading: false, show: false });

              window.location.href = "/user-dashboard-portfolio";

              //this.props.history.push("/user-dashboard-portfolio");

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

      this.setState({ isLoading: true, show2: false });
     

      const headers = {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
      }

      let formData = new FormData();
      formData.append('document', e.target.myImage2.files[0]);

      //console.log(data);

       //Display the key/value pairs
        // for (var pair of formData.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }

       


        try 
        {
            // fetch data from a url endpoint
            const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/adddocument`, formData, {headers: headers});
            //const response = await  axios.post(`https://lit-ridge-07527.herokuapp.com/api/addeducation`, data, {headers: headers});
            
            console.log(response);

            //this.setState({ educations: response.data.educations, loading: false, show: false });

            window.location.href = "/user-dashboard-portfolio";

            //this.props.history.push("/user-dashboard-portfolio");

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
                          <button onClick={this.viewBio} className="bio-button"> View Bio </button>
                        </div>      
                      </div> 
                      <div className="porfolio-container-images" align="center">


                      {this.state.loading || !this.state.portfolios ? 
                          <div>Loading</div> :
                          (
                          <div>
                 
                        { this.state.portfolios.map(portfolio =>
                       
                        <a className="image-padding" target="_blank"><img className="image img-thumbnail" src={`https://sheltered-chamber-63274.herokuapp.com/uploads/userportfolios/images/${portfolio.image}`} width="100%"/></a>
                        )
                      }
                      </div>

                      )}   
                      </div>
                      <div className="portfolio-header-container">
                        <div className="edu-update-button-container">
                          <button onclick="ShowEducationForm()" className="edu-update-button" onClick={this.showModal2}>+ Add Document</button>
                          <button onClick={this.viewBio} className="bio-button"> View Bio </button>
                        </div>         
                      </div> 
                      <div className="porfolio-container-documents" align="center">
                           
                        {/* <a className="image-padding" href>
                          <img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" />
                          </a> */}


                          {this.state.loading || !this.state.documents ? 
                          <div>Loading</div> :
                          (
                          <div>
                 
                        { this.state.documents.map(document =>
                       
                        <a className="image-padding" target="_blank"><img className="image img-thumbnail" src={`https://sheltered-chamber-63274.herokuapp.com/uploads/userportfolios/documents/${document.doc}`} width="100%"/></a>
                        )
                          }
                          </div>
                         )}  
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


                              

                              <div className="row mt-2">
                                <div className="col-md-4 mx-auto">
                                      <img src={this.state.image} width="100%" /> 
                                </div>
                              </div>

                              

                                
                                  <input type="file" name="myImage" onChange={this.onImageChange} required/>
                                 



                             

                                

                        <div className="mt-4 text-center">
                             <button type="submit" class="btn btn-primary">Upload</button>
                        </div>

                        

                  </form>

               </Modal.Body>
               
               </Modal>

              {/* Modal */}



                 {/* Modal */}


            <Modal
               
               //  size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.show2} handleClose={this.hideModal2}>
                <Modal.Header className="modal-header py-2 text-white" style={{background: '#70a1B9'}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                    <strong> Upload Document</strong>
                    </Modal.Title>
                    <span onClick={this.onHide2} className="close-modal-btn cursor">x</span>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.handleSubmit2}>
 
 
                               
 
                               <div className="row mt-2">
                                 <div className="col-md-4 mx-auto">
                                       <img src={this.state.doc} width="100%"  />
 
                                       
                                 </div>
                               </div>
 
                               
 
                                 
                                   <input type="file" name="myImage2" onChange={this.onDocChange} required/>
                                  
 
 
 
                              
 
                                 
 
                         <div className="mt-4 text-center">
                              <button type="submit" class="btn btn-primary">Upload</button>
                         </div>
 
                         
 
                   </form>
 
                </Modal.Body>
                
                </Modal>
 
               {/* Modal */}

               <Footer/>

          </>
        )
    }
}

export default Portfolio;
