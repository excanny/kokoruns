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
              const response = await  axios.get(`https://lit-ridge-07527.herokuapp.com/api/experiences`, {headers: headers});

              //console.log(response.data.experiences);

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

        const data = { start_month: this.state.start_month, start_year: this.state.start_year, end_month: this.state.end_month, end_year: this.state.end_year, company_name: this.state.company_name, exposition: this.state.exposition, roles:  JSON.stringify(this.state.roles)};  

        //console.log(data);

       axios.post(`http://127.0.0.1:8000/api/addexperience`, data, {headers: headers})
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



            <section id="UserInfoContainer" className="user-info-containerx">  


            <NavBar/>

           


              <UserBio />




              <div id="user-pordtfolio" style={{paddingBottom: 50, marginTop: 20, display: 'none', paddingLeft: 59}}>
                <section className="user-portfolio">
                  <div className="portfolio-header-container">
                    <div className="edu-update-button-container">
                      <label htmlFor="file-input-images" className="mb-0 mt-0 mt-1 mb-1">
                        <span className="edu-update-button btn-danger py-2 px-3 mt-2">Add Imageswswsw</span>
                      </label>
                      <input type="file" name="file-input-images" id="file-input-images" accept="image/*" hidden />     
                    </div>      
                  </div> 
                  <div className="porfolio-container-imagesss bg-light" align="center">
                    <div className="row p-3" id="portfolio_images">
                    </div>
                  </div>
                </section>


                  </div>

            
              </section>


             
              
             


          </>
        )
    }
}

export default Experience;
