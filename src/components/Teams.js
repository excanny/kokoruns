import React, { Component } from 'react'
import Header2 from '../commons/Header2';
import NavBar2 from '../commons/NavBar2';
import UserBio from '../commons/UserBio';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export class Teams extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          team_name: '',
          team_description: '',
          inputImageValue: '',
          teams: [],
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
  
    }


    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }


      handleImageChange(e) {
        this.setState({inputImageValue: e.target.value });
        this.setState({ file: e.target.files[0].name });
      }

      async componentDidMount() {

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

    
          try 
          {
              // fetch data from a url endpoint
              const response = await  axios.get(`https://sheltered-chamber-63274.herokuapp.com/api/teams`, {headers: headers});

              console.log(response.data.teams);

              this.setState({ teams: response.data.teams, loading: false });

              // console.log(response.data.expe[0]);

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


        let formData = new FormData();
        formData.append('file', e.target.inputImageValue.files[0]);
        formData.append('team_name', e.target.team_name.value);
        formData.append('team_description', e.target.team_description.value);
        formData.append('team_privacy', 1);
    
  
        //Display the key/value pairs
        // for (var pair of formData.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }

       

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/createteam`, formData, {headers: headers})
        .then((response) => {
           

           //this.setState({ experiences: response.data.experiences, loading: true, show: false});
         
           console.log(response);

           //window.location.href = "/user-dashboard-experience";

           this.setState({ show: false });

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }


    render() {
        return (
            <>

              <Header2/>


            <NavBar2/>


            
            <div className="px-5 mt-3">

            

                <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-primary btn-block rounded-0 font-weight-bold" onClick={this.showModal}>Create Team +</button>
                    
                    <div className="bg-white mt-2 p-2 mb-5" style={{overflowY: 'scroll', height: 470}}>
                    <h5 className="text-info">TEAMS</h5>
                    {/*?php $first = current($my_teams); ?*/}
                    {/*?php if(empty($my_teams)){?*/}
                    <p>You have no teams yet. Use the Create Team button above to get started.</p>
                    {/*?php }else{ foreach($my_teams as $team){?*/}
                    {/*?php  
                
                        if($first['frecno'] == $team['frecno'])
                        {
                            $selected_class = "active";
                            $selected_box = "active_box";
                        }
                        else
                        {
                            $selected_class = "";
                            $selected_box = "";
                        }
                        ; ?*/}
                        {this.state.loading || !this.state.experiences ? 
                         <div style={{background: '#f2f2f2'}}>Loading...</div> :
                        <div>
                        {this.state.teams.map(team => 
                            <div className="team_icon cursor my-1 <?php echo $selected_class;?> <?php echo $selected_box;?>" data-team_id="<?php echo $team['fteam_id']; ?>">
                                {/* <div class="">
                                        <div> */}
                                <img src="https://images.pexels.com/photos/6916640/pexels-photo-6916640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt width="100%" height="152rem" />
                                <p className="text-primary">{team.team_name}</p>
                                {/* </div>
                                    </div> */}
                            </div>
                        )}
                        </div>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div id="team_messages">
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card rounded-0">
                    <div className="card-header font-weight-bold text-white py-2 rounded-0" style={{background: '#5F9EA0'}}><span id="team_members_count" /></div>
                    <div className="card-body" style={{overflowY: 'scroll', height: 360}} id="team_member_names">
                    </div>
                    <div className="p-3"> 
                        {/*?php if(!empty($my_teams)){?*/}
                        <div className="row">
                        <div className="col">
                            <h5>Add New Member</h5>
                            <form id="add-team-member">
                            <div className="input-group mb-3">
                                <input type="text" id="member_name" className="form-control search_applicants" placeholder="Search For Names" autoComplete="off" />
                                <input type="hidden" name="member_name" id="member_name_team" />
                                <input type="hidden" name="member_id" id="member_id" />
                                <input type="hidden" name="team_id" id="team_id_store" />
                                <div className="input-group-append">
                                <button type="submit" className="input-group-text">ADD</button>
                                </div>
                                <div className="w3-light-grey" id="users_name-box">
                                </div>
                            </div>
                            </form> 
                        </div>
                        </div>
                        {/*?php } ?*/}
                        <h5>Discover Teams</h5>
                        <form className id="discover-team">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="form-group">
                                <div className="input-group mb-3">
                                <input type="search" className="form-control search_teams" placeholder="Find Teams" />
                                <input type="hidden" name="user_id" defaultValue="<?php echo $user_details['fuser_id']; ?>" />
                                <input type="hidden" name="user_name" defaultValue="<?php echo $user_details['ffirst_name'] . ' '. $user_details['flast_name']; ?>" />
                                <input type="hidden" name="team_id" id="team_id_discover" />
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="submit">Ask To Join</button>
                                </div>
                                </div>
                                <ul className="w3-light-grey" id="team_suggestion-box">
                                </ul>
                            </div>
                            </div>
                        </div>
                        <br />
                        </form> 
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Add Team Modal */}
        

            <Modal
               
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               show={this.state.show} handleClose={this.hideModal}>
               <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                   <Modal.Title id="contained-modal-title-vcenter">
                   <strong> Team Details</strong>
                   </Modal.Title>
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               <Modal.Body>
               <form onSubmit={this.handleSubmit}>
                        <div className="row">
                        <div className="col-lg-8">
                            <div className="form-group">
                            <label htmlFor>Team Name  <span className="text-danger">*</span></label>
                            <input type="text" className="form-control  rounded-0" name="team_name" value={this.state.team_name} onChange={this.handleChange} required style={{width: '100%'}} />
                            
                            </div>
                            <div className="form-group">
                            <label htmlFor>Team Description  <span className="text-danger">*</span></label> <br />
                            <textarea className="form-control rounded-0" name="team_description" value={this.state.team_description} onChange={this.handleChange} cols={30} rows={5} required defaultValue={""} />
                            </div>
                            <div className="form-group">
                            <label htmlFor>Set Team Privacy <span className="text-danger">*</span></label> <br />
                            <input type="radio" className="w3-radio" name="team_privacy" defaultValue={0} required /> Public <br />
                            <input type="radio" className="w3-radio" name="team_privacy" defaultValue={1} /> Private
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className>
                            <label className="mt-3 mb-0">Upload Team Icon</label>
                            <input type="file" className="input-id" id="event_logo" name="inputImageValue" onChange={this.handleImageChange} value={this.state.inputImageValue} data-browse-on-zone-click="true" accept="image/*" />
                            </div>
                        </div>
                        </div>
                        <div className="text-right pb-2">
                        <button type="submit" className="btn btn-success">Create</button>
                        </div>                 
                    </form> 

               </Modal.Body>
               
               </Modal>


            </>
        )
    }
}

export default Teams
