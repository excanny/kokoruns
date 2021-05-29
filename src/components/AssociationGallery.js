import React, { Component } from 'react';
import CHeader from '../commons/CHeader';
import NavBar3 from '../commons/NavBar3';
import Footer from '../commons/Footer';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router';
import axios from 'axios';

class CompanyGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          galleries: [],
          companygalleries: [],
          image_title: '',
          preview_image: '',
          loading: true,    

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        // this.showModal2 = this.showModal2.bind(this);
        // this.hideModal2 = this.hideModal2.bind(this);
        // this.showModal3 = this.showModal3.bind(this);
        // this.hideModal3 = this.hideModal3.bind(this);
        // this.showModal4 = this.showModal4.bind(this);
        // this.hideModal4 = this.hideModal4.bind(this);
        // this.changeState = this.changeState.bind(this);
        // this.changeLGA = this.changeLGA.bind(this);
        // this.changeState2 = this.changeState2.bind(this);
        // this.changeLGA2 = this.changeLGA2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleSubmit2 = this.handleSubmit2.bind(this);
        // this.handleSubmit3 = this.handleSubmit3.bind(this);
      
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


      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }


      onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };


      getImage = (image) => {

        this.setState({preview_image: image});
        console.log(image);
      }   


      async componentDidMount()
      {

 
        var id = this.props.match.params.id;    

        if(localStorage.getItem('access_token'))
        {
        this.setState({ isLogged : true });
        }

    //console.log(localStorage.getItem('access_token'));

    const headers = {

      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 

    }


    let one = `https://sheltered-chamber-63274.herokuapp.com/api/companygalleries/${id}`
    //let two = `https://sheltered-chamber-63274.herokuapp.com/api/companyevents/${id}`;
    // let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
     
    const requestOne = axios.get(one, {headers: headers});
    ///const requestTwo = axios.get(two, {headers: headers});
    // const requestThree = axios.get(three, {headers: headers});
     
    axios.all([
      requestOne, 
      ///requestTwo, 
      //requestThree
    ]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      //const responseTwo = responses[1]
      // const responesThree = responses[2]
      // use/access the results 

      this.setState({ companygalleries : responseOne.data.companygalleries});

      console.log(responseOne.data.companygalleries);

    })).catch(errors => {
      // react on errors.
      console.log(errors);
    })


  }




      async handleSubmit(e) {
        // Form submission logic
        e.preventDefault();

       /// this.hideModal;

       this.setState({ show: false });

        ///console.log(localStorage.getItem('access_token'));

      


       // var id = this.props.match.params.id;
       
       const  url = window.location.href;
       const id = url.substring(url.lastIndexOf('/') + 1);


        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        let formData = new FormData();
        formData.append('gallery', e.target.myImage.files[0]);
        formData.append('image_title', e.target.image_title.value);

        //console.log(data);

        //Display the key/value pairs
          for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
          }

        

          try 
          {
              // fetch data from a url endpoint
              const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/addcompanygallery/${id}`, formData, {headers: headers});
              //const response = await  axios.post(`https://lit-ridge-07527.herokuapp.com/api/addeducation`, data, {headers: headers});
              
              console.log(response);

             

              //this.setState({ educations: response.data.educations, loading: false, show: false });

    

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
            <div style={{background:'#f5f5dc'}}>

            <CHeader/>

                <div className="company-dashboard-body">

                    <NavBar3/>


                     <div className="row mt-2 mb-5" id="gallery-box">
                        <div className="col">
                            <div className="portfolio_box">
                            <div className="row">
                                <div className="col-md-4">
                                <button className="btn btn-block rounded-0 mb-3 text-white" style={{background: '#3090C7'}} onClick={this.showModal}>Add Image</button>
                                </div>
                            </div>
                            <div className="row images-box">
                                <div className="col-md-4 pr-0" style={{overflowY: 'scroll', height: 500}}>
                                {/* <div class="pt-5 m-3">
                                            <label for="file-input-images"><i class="fas fa-upload fa-5x border p-3 border-dark"></i></label>
                                            <input type="hidden" id="company_id" value="<?php echo $company_details['fcompany_id']; ?>">
                                            <form id="image_upload_form">
                                            
                                                <input type="file" id="file-input-images" hidden/>
                                            
                                            </form>
                                            </div> */}
                                {/*?php 
                                            //    if(end($company_gallery) == $portfolio)
                                            //    {
                                            
                                            //    //    }
                                            //            echo end($company_gallery);
                                            //            $lastElement = end($company_gallery);
                                            
                                            //             //Print it out!
                                            //             echo $lastElement;
                                            ?*/}
                                    {this.state.companygalleries.map(gallery => 

                                        // <img className="image" src="https://images.pexels.com/photos/6519363/pexels-photo-6519363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt width="100%" />
                                         <img className="image" src={`https://sheltered-chamber-63274.herokuapp.com/uploads/companygalleries/${gallery.image}`} alt width="100%" onClick={() => {this.getImage(gallery.image)}}/>
                                        )
                                 }
                                {/* <span data-image_id="<?php echo $portfolio['fimage_id'];?>" data-image_name="<?php echo $portfolio['fimage'];?>" class="fa fa-times text-danger cursor delete-image" style="position:relative;top: -15rem;lesft:170rem;"></span> */}
                             
                                </div>
                                <div className="col-lg-8">
                                  <img  style={{width: '100%'}} src={`https://sheltered-chamber-63274.herokuapp.com/uploads/companygalleries/${this.state.preview_image}`} />
                                  {/* <div id="imgtext" className="centered">
                                      <p className="bg-white w-100 border border-primary"> Image Caption </p>
                                  </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    


                </div>


                <Footer/>

                
                <Modal
               
               size="md"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show} handleClose={this.hideModal}>
               <Modal.Header className="modal-header rounded-0 py-3 text-white" style={{background: '#70a1B9'}}>
                  
                   <strong> Upload Image</strong>
                  
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body className="px-4 bg-light">
                   <form onSubmit={this.handleSubmit} id="myform">

                  <div>
                        <div className="row">
                            <div className="col">
                            <label htmlFor="email" className="mt-2 mb-0">Add Caption</label>
                            <input type="text" className="form-control form-control-sm rounded-0" name="image_title" value={this.state.image_title} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                            <input type="file" className="file input-id" data-preview-file-type="text" data-browse-on-zone-click="true" accept="image/*" name="myImage" onChange={this.onImageChange} required />
                            </div>
                        </div>
                </div>


                      
                       {/* Modal footer */}
                    
                    </form>

               </Modal.Body>

               <div className="modal-footer p-0">
                        <button type="submit" className="btn btn-success" form="myform">Upload</button>
                    </div>
               
               </Modal>


            </div>


        );
    }
}

export default CompanyGallery;
