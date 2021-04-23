import React, { Component } from 'react'
import Header2 from '../commons/Header2';
import NavBar2 from '../commons/NavBar2';
import UserBio from '../commons/UserBio';
import Modal from 'react-bootstrap/Modal';
import  { states } from "../nigeria-states-and-local-govts.js";
import axios from 'axios';


export class UserJobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          job_title: '',
          employment_type: '',
          salary: '',
          //states: [],
          lgas: [],
          job_description: '',
          languages: [],
          skills: [],
      	  countries : [],
		  states : [],
		 lgas : [],
		  selectedCountry : '--Choose Country--',
			selectedState : '--Choose State--',
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
  
    }


    changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
		this.setState({lgas : stats.find(stats => stats.name === event.target.value).lgas});
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


                this.setState({
                    // countries : [
                    //     { name: 'Nigeria', code: '243', 
                        states: [ {name: 'Abia', code: '1', 
                        lgas: [
                                {name: "Aba North", code: '1'},
                                {name: "Aba South", code: '2'},
                                
                ]}, {name: 'Adamawa', code: '2', 
                        lgas: [
                                {name: 'Demsa', code: '1'},
                                {name: 'Fufure', code: '2'},
                ]}, {name: 'AkwaIbom', code: '3', 
                lgas: [
                                {name: 'Abak', code: '1'},
                                {name: 'Eastern Obolo', code: '2'},
            ]}, {name: 'Anambra', code: '4', 
                lgas: [
                                {name: 'Aguata', code: '1'},
                                {name: 'Anambra East', code: '2'},
                                {name: 'Anambra West', code: '3'},
            ]}, {name: 'Bauchi', code: '5', 
                lgas: [
                                {name: 'Alkaleri', code: '1'},
                                {name: 'Bauchi', code: '2'},
                                
            ]}, {name: 'Bayelsa', code: '6', 
                    lgas: [
                                {name: 'Brass', code: '1'},
                                {name: 'Ekeremor', code: '2'},
                                {name: 'Kolokuma Opokuma', code: '3'},
                                {name: 'Nembe', code: '4'},
                                {name: 'Ogbia', code: '5'},
                                {name: 'Sagbama', code: '6'},
                                {name: 'Southern Ijaw', code: '7'},
                                {name: 'Yenagoa', code: '8'}
            ]}, {name: 'Benue', code: '7', 
                    lgas: [
                                {name: 'Agatu', code: '1'},
                                {name: 'Apa', code: '2'},
                                
            ]}, {name: 'Borno', code: '8', 
                    lgas: [
                                {name: 'Abadam', code: '1'},
                                {name: 'Askira-Uba', code: '2'},
            ]} ],
        //     },	
        // ]
    });


    

        

        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

    
        // try 
        // {
        //     // fetch data from a url endpoint
        //     const response = await  axios.get(`/src/nigeria-states-and-local-govts.js`, {headers: headers});
        //     ///Users/godsonihemere/Desktop/KokorunsProject/KokorunsUI/src/nigeria-states-and-local-govts.js
        //     console.log(response);

        //     //this.setState({ teams: response.data.teams, loading: false });

        //     // console.log(response.data.expe[0]);

        // } 
        // catch(error) 
        // {
        // console.log("error", error);
        // // appropriately handle the error
        // }

        
    
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


        const data = { job_title:this.state.job_title, employment_type: this.state.employment_type, salary: this.state.salary, job_description: this.state.job_description, state: this.state.states, lga: this.state.lgas, languages: this.state.languages, skills: this.state.skills };  

        console.log(data);
       

    //    axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/createteam`, data, {headers: headers})
    //     .then((response) => {
           

    //        //this.setState({ experiences: response.data.experiences, loading: true, show: false});
         
    //        console.log(response);

    //        //window.location.href = "/user-dashboard-experience";

    //        this.setState({ show: false });

    //      })
    //      .catch( error => {
    //        console.log(error.response);
    //      });
    

      }



    render() {

        // const states = this.state.states;

        // let statesList = states.map((state, i) => {
        //     return (
        //         <option key={i}>
        //             {/* {state.state}
        //              */}
        //              rfrfrggrgrrgrg
        //             </option>
        //     )
        // }, this);  

        //console.log(states[0].state);


      

        return (
            <>

            <Header2/>


            <NavBar2/>

          
                <div className="your-job-posts-header">
                    <div className="your-job-posts">Your Job Posts</div>
                    <div className="empty-space">h</div>
                    <a className="link cursor" onClick={this.showModal}><div className="create-job-posts">Create Job Post ✚</div></a></div> 
                <div className="your-job-posts-container">
                    <div className="left">
                    <div className="job-posts-list">
                        <div className="search-bar"><input placeholder="Search Job Posts" /><button><img className="search" src="assets/Images/Your%20Job%20Posts/search.png" /></button></div>    
                        {/*?php foreach ($my_jobs as $job) { ?*/}
                        <div className="job-post job-post-list" data-job_title="<?php echo $job['fjob_title']; ?>" data-employment_type="<?php echo $job['femployment_type']; ?>" data-salary="<?php echo $job['fsalary']; ?>" data-location="<?php echo $job['flocation']; ?>" data-job_description="<?php echo $job['fjob_description']; ?>" data-languages="<?php echo $job['flanguages']; ?>" data-skills="<?php echo $job['fskills']; ?>">
                        <img src="assets/Images/Your%20Job%20Posts/Job%20Icon.png" />{/*?php echo $job['fjob_title']; ?*/}<br /> 
                        <span>{/*?php echo date('d/m/Y', strtotime($job['created_at'])); ?*/}</span>    
                        <b>45 Applicants</b>    
                        </div>
                        {/*?php } ?*/}
                    </div>    
                    </div>    
                    <div className="right">
                    <div align="center" id="blank">
                        <div align="center" className="blank-page">
                        Click on a Job Post 👈 and the details will appear here 👇
                        </div>    
                    </div>   
                    {/*CARPENTRY*/}
                    <div className="sub" id="show-job-details">   
                        <div className="job-posts-details">
                        <div className="job-title"><img src="assets/Images/Your%20Job%20Posts/Job%20Icon.png" /><span id="job_title" /></div>
                        <div className="employment-type">Employment type: <span id="employment_type" /> </div>   
                        <div className="salary">Salary: ₦ <span id="salary" /></div>
                        <div className="job-location">Location: <span id="location" /></div> 
                        <div className="job-description">
                            Job Description: <span id="job_description" />
                        </div>  
                        <div className="languages">
                            Languages    
                            <ul>
                            <li>Yoruba</li>
                            <li>Igbo</li>
                            <li>Hausa</li>
                            <li>Japanese</li>
                            <li>English</li>    
                            </ul></div>  
                        <div className="skills">
                            Skills
                            <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Project Management</li>
                            <li>Graphics Design</li>
                            <li>SQL</li>    
                            </ul></div>     
                        <div className="buttons">
                            <button><img className="icon" src="assets/Images/Your%20Job%20Posts/Edit%20icon.png" /></button> 
                            <button><img className="icon" src="assets/Images/Your%20Job%20Posts/Share.png" /></button>
                            <button><img className="icon" src="assets/Images/Your%20Job%20Posts/Delete%20icon.png" /></button>    
                        </div>
                        </div>
                        <div className="job-posts-applicants-container">
                        Applications<br />    
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div>     
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div> 
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div>     
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div>
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div>     
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div>
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div> 
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div>
                        <div className="job-posts-applicants">
                            <div className="dp"><img src="assets/Images/Your%20Job%20Posts/User%20DP.png" /></div>
                            <div className="username">Ellen Temitope</div>    
                            <div className="professions">Carpenter at <a href>Love "K"</a></div>
                            <div className="reommendations">35 Recommendations</div>     
                            <div className="view-profile"><button>View Profile</button></div>
                            <div className="delete-application"><button>Delete</button></div>    
                        </div>       
                        </div> 
                    </div>
                    {/*CARPENTRY*/}
                    </div>    
                </div>



                 {/* Add User Job Modal */}
        

            <Modal
               
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show} handleClose={this.hideModal}>
            
               <Modal.Body style={{ padding: '.5rem'}}>

                        <form onSubmit={this.handleSubmit}>
                        <div align="center" className="post-job-container w-100 m-0">
                            <div className="hire mt-0 mb-0">Hire Fast!!! Hire Now!!!</div>
                            <h3 className="text-white mt-1"> Hire Here!!!....No Regrets</h3>
                            <div align="left" className="post-job" style={{background: 'linear-gradient(180deg, #a92244, #c66a89)'}}>
                            <div className="post-job-children">
                                Job Title <b>*</b><br />
                                <input name="job_title" value={this.state.job_title} onChange={this.handleChange} required />      
                            </div>
                            <div className="post-job-children">
                                Employment Type <b>*</b><br />
                                <select name="employment_type" value={this.state.employment_type} onChange={this.handleChange}>
                                <option>Full-Time</option>
                                <option>Part-Time / Occasional</option>
                                <option>Daily Pay</option>
                                <option>Weekend Only</option>
                                <option>Temporary</option>
                                <option>Volunteer</option> 
                                <option>Apprentice / Trainee</option>  
                                </select>      
                            </div>
                            <div className="post-job-children">
                                Salary <b>*</b><br />
                                <input type="number" name="salary" value={this.state.salary} onChange={this.handleChange} required />
                            </div>  
                            <div className="post-job-location">
                                Job Location <b>*</b><br />
                                <div className="radio">
                                <input id="onsite" name="location" defaultValue="onsite" type="radio" onchange="OnsiteFunction()" />
                                <label htmlFor="onsite">On Site</label>
                                &nbsp;&nbsp;&nbsp;
                                <input id="remote" name="location" defaultValue="remote" type="radio" onchange="RemoteFunction()" />
                                <label htmlFor="remote">Remote</label>  
                                </div><br /> 
                                <div id="locationdiv" className="location-div">  

                               
                                <select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                                    <option>--Choose Country--</option>
                                    {this.state.countries.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>

                                <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                                        <option>--Choose State--</option>
                                            {this.state.states.map((e, key) => {
                                                return <option key={key}>{e.name}</option>;
                                            })}
                                    </select>
                                    <select value={this.state.selectedLga}>

                                    <option>--Choose LGA--</option>
                                            {this.state.lgas.map((e, key) => {
                                                return <option key={key}>{e.name}</option>;
                                            })}
                                    </select>
                                        {/* <select
                                            onChange="toggleLGA(this);"
                                            name="state"
                                            id="state"
                                            class="form-control"
                                            >
                                            <option value="" selected="selected">- Select -</option>
                                            <option value="Abia">Abia</option>
                                            <option value="Adamawa">Adamawa</option>
                                            <option value="AkwaIbom">AkwaIbom</option>
                                            <option value="Anambra">Anambra</option>
                                            <option value="Bauchi">Bauchi</option>
                                            <option value="Bayelsa">Bayelsa</option>
                                            <option value="Benue">Benue</option>
                                            <option value="Borno">Borno</option>
                                            <option value="Cross River">Cross River</option>
                                            <option value="Delta">Delta</option>
                                            <option value="Ebonyi">Ebonyi</option>
                                            <option value="Edo">Edo</option>
                                            <option value="Ekiti">Ekiti</option>
                                            <option value="Enugu">Enugu</option>
                                            <option value="FCT">FCT</option>
                                            <option value="Gombe">Gombe</option>
                                            <option value="Imo">Imo</option>
                                            <option value="Jigawa">Jigawa</option>
                                            <option value="Kaduna">Kaduna</option>
                                            <option value="Kano">Kano</option>
                                            <option value="Katsina">Katsina</option>
                                            <option value="Kebbi">Kebbi</option>
                                            <option value="Kogi">Kogi</option>
                                            <option value="Kwara">Kwara</option>
                                            <option value="Lagos">Lagos</option>
                                            <option value="Nasarawa">Nasarawa</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Ogun">Ogun</option>
                                            <option value="Ondo">Ondo</option>
                                            <option value="Osun">Osun</option>
                                            <option value="Oyo">Oyo</option>
                                            <option value="Plateau">Plateau</option>
                                            <option value="Rivers">Rivers</option>
                                            <option value="Sokoto">Sokoto</option>
                                            <option value="Taraba">Taraba</option>
                                            <option value="Yobe">Yobe</option>
                                            <option value="Zamfara">Zamafara</option>
                                    </select> */}
                                   
                                
                                <select id="lga" name="lgas" value={this.state.lgas} onChange={this.handleChange}>
                                    <option>Select LGA</option>
                                </select>
                                </div>   
                            </div>  
                            <div>

                            </div>
                           {/* {stateData} */}
                           {/* .map((data, key) => {
          return ( */}
            {/* <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })} */} 
                            <div className="job-description">
                                Description <br />  
                                <textarea placeholder="Describe your job offer..." className="form-control" name="job_description" id cols={30} rows={5} required value={this.state.job_description} onChange={this.handleChange} /> 
                            </div>      
                            <div className="langx">
                                Languages <b>Max 5</b><br />   
                                <select id="languages" name="languages[]" className="form-control" value={this.state.languages} onChange={this.handleChange} multiple>
                                <option value="Yoruba">Yoruba</option>
                                <option value="English">English</option>
                                </select>
                             
                            </div> 
                            <div className="skill">
                                Skills <b>Max 5</b><br />    
                                <select id="skills" name="skills[]" className="form-control" value={this.state.skills} onChange={this.handleChange} multiple>
                                <option value="a">A</option>
                                <option value="b">B</option>
                                </select>    
                              
                            </div>    
                            <div className="post-job-button">
                                <button type="submit">Create Job Posting</button>
                            </div>
                            </div>  
                        </div>
                    </form>


               </Modal.Body>
               
               </Modal>
           

        
            </>
        )
    }
}

export default UserJobs
