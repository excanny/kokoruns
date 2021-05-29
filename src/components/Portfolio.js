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
          onlinelinks: [],
          show_online_links: false,
          link_title: '',
          link_address: '',

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showModal2 = this.showModal2.bind(this);
        this.hideModal2 = this.hideModal2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.onDocChange = this.onDocChange.bind(this);
        this.AddOnlineLink = this.AddOnlineLink.bind(this);
  
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


      AddOnlineLink(e)
      {
        this.setState({ show_online_links: true });
      }


      async componentDidMount() {

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }


          let one = "https://sheltered-chamber-63274.herokuapp.com/api/portfolios"
          let two = "https://sheltered-chamber-63274.herokuapp.com/api/documents";
          let three = "https://sheltered-chamber-63274.herokuapp.com/api/onlinelinks"
          
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

            this.setState({ portfolios: responseOne.data.portfolios, documents: responseTwo.data.documents, onlinelinks: responseThree.data.onlinelinks, loading: false });

            //console.log(responseOne);


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


      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }


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
        //  `       for (var pair of formData.entries()) {
        //           console.log(pair[0]+ ', ' + pair[1]); 
        //         }`

              


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




        async handleSubmit3(e) {
              // Form submission logic
              e.preventDefault();

              this.setState({ isLoading: true, show2: false });
            

              const headers = {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
              }

              //console.log(data);

              const data = { link_title: this.state.link_title, link_address: this.state.link_address};  

              


                try 
                {
                    // fetch data from a url endpoint
                    const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addonlinelink`, data, {headers: headers});
                    
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


                      {this.state.portfolios.length > 0 ? 
                          
                          
                          <div>
                 
                        { this.state.portfolios.map(portfolio =>
                       
                        // <a className="image-padding" target="_blank"><img className="image img-thumbnail" src={`https://sheltered-chamber-63274.herokuapp.com/uploads/userportfolios/images/${portfolio.image}`} width="100%"/></a>
                        <a className="image-padding" target="_blank"><img className="image img-thumbnail" src={`https://kokoruns.s3.us-east-2.amazonaws.com/userportfolios/images/${portfolio.image}`} width="100%"/></a>
                       
                        )
                      }
                      </div>
                      :

                      <p>No images yet</p>

                      }   
                      </div>
                      <div className="portfolio-header-container">
                        <div className="edu-update-button-container">
                          <button onclick="ShowEducationForm()" className="edu-update-button w-100" onClick={this.showModal2}>+ Add Document</button>
                          
                        </div>         
                      </div> 
                      <div className="porfolio-container-documents" align="center">
                           
                        {/* <a className="image-padding" href>
                          <img className="image" src="assets/Images/User%20Profile/sample%20document.jpg" />
                          </a> */}


                          {this.state.documents.length > 0 ? 
                         
                          <div>
                 
                        { this.state.documents.map(document =>
                       
                        // <a className="image-padding" target="_blank"><img className="image img-thumbnail" src={`https://kokoruns.s3.us-east-2.amazonaws.com/userportfolios/documents/${document.doc}`} width="100%"/></a>
                          <a className="image-padding" target="_blank"><img className="image img-thumbnail" src={`https://kokoruns.s3.us-east-2.amazonaws.com/userportfolios/documents/${document.doc}`} width="100%"/></a>
                        
                        )
                          }
                          </div>

                          :
                          <p>No documents yet</p>
                         }  
                      </div>
                      <div className="online-links-container">
                        <div className="link-cont-2">
                          <h2 className="online-links-header">Online Links  <button onClick={this.AddOnlineLink} className="add-skill-button" style={{outline: 'none'}}>Add Link +</button></h2>   

                            {this.state.show_online_links ?
                          <div id="form-div-prof-link" className="form-div">
                            <form className="add-skill-form" onSubmit={this.handleSubmit3}>
                              <input className="form-control" placeholder="Title" type="text" id="skill-input-prof-link" name="link_title" value={this.state.link_title} onChange={this.handleChange} required/>
                              <input className="form-control mt-1" type="text" id="skill-input-prof-link" placeholder="URL (e.g http://www.kokoruns.com/)" name="link_address" value={this.state.link_address} onChange={this.handleChange} required />   
                              <br />
                              <button type="reset" className="cancel-add-skill">Cancel</button>
                              <button className="finish-add-skill bg-success">Save</button>
                            </form>
                          </div> 
                          :
                          null
                            }   



                  {this.state.onlinelinks.length > 0 ? 
                         
                          <div>
                 
                        { this.state.onlinelinks.map(link =>
                          
                          <a href><div className="skill-padding"><div className="skill">{link.link_title}&nbsp;<button className="delete-skill-button">x</button></div></div></a>
                          
                     
                          )
                        }
                        </div>

                        :

                        <p className="mt-4">Seems you have no online links yet. Create a new link to get started.</p>
  
                        } 
                        

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
               <Modal.Body className="bg-light">
                   <form onSubmit={this.handleSubmit} id="form">


                              

                              <div className="row mt-2">
                                <div className="col-md-4 mx-auto">
                                      <img src={this.state.image} width="100%" /> 
                                </div>
                              </div>

                    
                                
                          <input type="file" name="myImage" onChange={this.onImageChange} required/>
                                

                        

                  </form>

               </Modal.Body>

               <div className="modal-footer py-0 text-right">
                           <button type="submit" form="form" className="btn btn-success">Upload</button>
                     </div>
               
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
                <Modal.Body className="bg-light">
                    <form onSubmit={this.handleSubmit2} id="form2">
 
 
                               
 
                               <div className="row mt-2">
                                 <div className="col-md-4 mx-auto">
                                       <img src={this.state.doc} width="100%"  />
 
                                       
                                 </div>
                               </div>
 
                            
                        <input type="file" name="myImage2" onChange={this.onDocChange} required/>
                              
 
                         
 
                   </form>
 
                </Modal.Body>

                    <div className="modal-footer py-0 text-right">
                           <button type="submit" form="form2" className="btn btn-success">Upload</button>
                     </div>
                
                </Modal>
 
               {/* Modal */}

               <Footer/>

          </>
        )
    }
}

export default Portfolio;
