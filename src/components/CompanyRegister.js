import React, { Component } from 'react'
import axios from 'axios';

export class CompanyRegister extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
        
            company_name: '',
            company_number: '',
            company_email: '',
            cac: '',
            company_type:'',
            company_size:'',
            website:'',
            company_address:'',
            states: [],
            lgas: [],
            selectedState : '',
            selectedLGA : '',
            company_logo:'',
            isLoading: false,
            category1 : [],
            category2 : [],
            category3 : [],
            selectedCat1 : '',
            selectedCat2 : '',
            selectedCat3 : '',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeLGA = this.changeLGA.bind(this);
        this.changeCat1 = this.changeCat1.bind(this);
        this.changeCat2 = this.changeCat2.bind(this);
        this.changeCat3 = this.changeCat3.bind(this);
      
      }


      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      changeCat1(e) {
        this.setState({selectedCat1: e.target.value});
        this.setState({category2 : this.state.category1.find(cat => cat.name === e.target.value).category2});
            //console.log(e.target.value);
      }
    
      changeCat2(e) {
        this.setState({selectedCat2: e.target.value});
        const cat2 = this.state.category1.find(cat => cat.name === this.state.selectedCat1).category2;
		this.setState({category3 : cat2.find(cat2 => cat2.name === e.target.value).category3});
        //console.log(cat2);
      }

      changeCat3(e) 
      {
        this.setState({selectedCat3: e.target.value});
        console.log(e.target.value);
      }

      changeState(e) {
        this.setState({selectedState: e.target.value});
        this.setState({lgas : this.state.states.find(state => state.name === e.target.value).lgas});
            console.log(e.target.value);
      }
    
      changeLGA(e) {
        this.setState({selectedLGA: e.target.value});
            //console.log(e.target.value);
      }


      async componentDidMount()
        {

            this.setState({
                category1: [ 
                    {name: 'Agriculture',  
                        category2: [ 
                            {name: 'Animal Production',  
                                category3: [
                                    {name: "Cattle Ranching & Farming"},
                                    {name: "Hog & Pig Farming"}, 
                            ]}, 
                            {name: 'Crop Production', 
                                category3: [
                                            {name: 'Demsa'},
                                            {name: 'Fufure'},
                            ]}, 
                            {name: 'Forestry and Logging', 
                                category3: [
                                            {name: 'Abak'},
                                            {name: 'Eastern Obolo'},
                            ]}, 
                            {name: 'Fishing, Hunting and Trapping', 
                                category3: [
                                            {name: 'Aguata'},
                                            {name: 'Anambra East'},
                                            {name: 'Anambra West'},
                            ]}, 
                            {name: 'Support Activities For Agriculture', 
                                category3: [
                                            {name: 'Alkaleri'},
                                            {name: 'Bauchi'},
                                            
                            ]}, 
                        
                        ]},

                        {name: 'Mining, Quarrying and Oil& Gas Industry',  
                        category2: [ 
                            {name: 'Oil and Gas Extraction',  
                                category3: [
                                    {name: "Aba North"},
                                    {name: "Aba South"}, 
                            ]}, 
                            {name: 'Mining', 
                                    category3: [
                                            {name: 'Demsa'},
                                            {name: 'Fufure'},
                            ]}, 
                        ]},

                    ] //countries block

             });


             this.setState({
      
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
          
            });
             

        

            if(localStorage.getItem('access_token'))
            {
            this.setState({ isLogged : true });
            }

            //console.log(localStorage.getItem('access_token'));

            const headers = {

            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 

            }


            let one = "https://sheltered-chamber-63274.herokuapp.com/api/userdetails"
            // let two = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt";
            // let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
            
            const requestOne = axios.get(one, {headers: headers});
            // const requestTwo = axios.get(two);
            // const requestThree = axios.get(three);
            
            axios.all([
            requestOne, 
            //requestTwo, 
            //requestThree
            ]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            // const responseTwo = responses[1]
            // const responesThree = responses[2]
            // use/access the results 

            this.setState({ first_name : responseOne.data.user_details.first_name, last_name : responseOne.data.user_details.last_name, gender : responseOne.data.user_details.gender, profession: responseOne.data.user_details.profession, marital_status : responseOne.data.user_details.marital_status, disabled : responseOne.data.user_details.disabled, current_employer : responseOne.data.user_details.current_employer, other_professions1 :  responseOne.data.user_details.other_professions1,
                other_professions2 :  responseOne.data.user_details.other_professions2, other_professions3 :  responseOne.data.user_details.other_professions3, employment_type: responseOne.data.user_details.employment_type, preferred_job: responseOne.data.user_details.preferred_job,
                other_professions4 :  responseOne.data.user_details.other_professions4, educational_qualification :  responseOne.data.user_details.educational_qualification, languages1 : responseOne.data.user_details.languages1, 
               email: responseOne.data.user_details.email, current_employer: responseOne.data.user_details.current_employer, employment_status: responseOne.data.user_details.employment_status,
                languages2 : responseOne.data.user_details.languages2, languages3 : responseOne.data.user_details.languages3, languages4 : responseOne.data.user_details.languages4, languages5 : responseOne.data.user_details.languages5, about : responseOne.data.user_details.about,
                });

            console.log(this.state);

            })).catch(errors => {
            // react on errors.
            console.log(errors);
            })


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


        this.setState({ isLoading: true });
        
        let formData = new FormData();
        //formData.append('file', e.target.uploaded_id_card.files[0]);
        //formData.append('uploadIDPath', this.state.file);
        formData.append('company_name', e.target.company_name.value);
        formData.append('company_number', e.target.company_number.value);
        formData.append('company_email', e.target.company_email.value);
        formData.append('cac', e.target.cac.value);
        formData.append('company_type', e.target.company_type.value);
        formData.append('company_size', e.target.company_size.value);
        formData.append('website', e.target.website.value);
        formData.append('company_industry', e.target.selectedCat1.value);
        formData.append('company_industry2', e.target.selectedCat2.value);
        formData.append('company_industry3', e.target.selectedCat3.value);
        formData.append('company_address', e.target.company_address.value);
        formData.append('state', this.state.selectedState);
        formData.append('lga', this.state.selectedLGA);
        formData.append('company_logo', e.target.company_logo.value);


       // Display the key/value pairs
        for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
        }

        //const data = { email: this.state.user_email_or_phone_number, password: this.state.password };  

        //console.log(data);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/cregister`, formData, {headers: headers})
        .then((response) => {
           
          //  if (response.data.success === true) 
          //  {
          //     this.setState({
          //       isVerifyComplete: 1,
          //     });
             
          //     this.props.history.push("/get-started");
          //  }  
          //  else 
          //  {
          //     this.props.history.push('/signup'); 
          //  }  

          this.props.history.push(`/company-dashboard/${response.data.company.company_id}`);
         
           //console.log(response.data.company.company_id);

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }



    render() {
        return (
   <div className="container mx-auto" style={{margin: '4rem'}}>
                <div className="row bg-white mx-auto">
                    <div className="col-md-8">
                    <div className="pt-4 pl-4 pr-4">
                        <h3 className="mb-4">Create A Company Account</h3>
                        <p><span className="text-danger">*</span> Required Information</p>
                     
                        <form encType="multipart/form-data" onSubmit={this.handleSubmit} className="needs-validation">
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <input type="text" className="form-control rounded-0" id="company_name" name="company_name" placeholder="Enter Company Name*" aria-label="Company Name" maxLength={45} autoComplete="off" value={this.state.company_name} onChange={this.handleChange} required />
                                <label className="text-primary">Enter Company Name <span className="text-danger">*</span></label>
                                <input type="hidden" name="company_id" id="company_id" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <input type="number" min={0} name="company_number" id="company_number" className="form-control rounded-0" placeholder="Enter Company Phone No.*" value={this.state.company_number} onChange={this.handleChange} required />
                                <label className="text-primary">Enter Company Phone No. <span className="text-danger">*</span></label>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <input type="text" name="cac" id="cac" value={this.state.cac} onChange={this.handleChange} className="form-control rounded-0" placeholder="Enter CAC Reg. No." />
                                <label className="text-primary">Enter CAC Reg. No </label>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <label className="text-primary">Select Company Type* </label>
                                <select name="company_type" className="form-control rounded-0" value={this.state.company_type} onChange={this.handleChange} required>
                                <option value> Select Company Type*</option>
                                <option value="Not Registered">Not Registered</option>
                                <option value="Sole Proprietorship (Enterprise)">Sole Proprietorship (Enterprise)</option>
                                <option value="Limited Liability Company (LTD)">Limited Liability Company (LTD)</option>
                                <option value="Public Company (PLC)">Public Company (PLC)</option>
                                <option value="Unlimited Company (Unltd)">Unlimited Company (Unltd)</option>
                                <option value="Partnership Business ">Partnership Business </option>
                                <option value="Non-Government Organization (NGO)">Non-Government Organization (NGO)</option>
                                <option value="Cooperative Business">Cooperative Business</option>
                                <option value="Corporation">Corporation</option>
                                <option value="International Company">International Company</option>
                                <option value="State Government Company">State Government Company</option>
                                <option value="Federal Government Company">Federal Government Company</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <select name="company_size" value={this.state.company_size} onChange={this.handleChange} className="form-control rounded-0" required>
                                <option value>Select Company Size*</option>
                                <option value="1-10">1-10</option>
                                <option value="11-50">11-50</option>
                                <option value="51-200">51-200</option>
                                <option value="201-500">201-500</option>
                                <option value="501-1000">501-1000</option>
                                <option value="501-1000">501-1000</option>
                                <option value="5001-10000">5001-10000</option>
                                <option value="10000+">Above 10000</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <input type="text" className="form-control rounded-0" placeholder="Enter Website" name="website" value={this.state.website} onChange={this.handleChange} autoComplete="off" />
                                <label className="text-primary">Enter Website </label>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <input type="email" className="form-control rounded-0" placeholder="Enter Email" name="company_email" value={this.state.company_email} onChange={this.handleChange} autoComplete="off" />
                                <label className="text-primary">Enter Email </label>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center text-primary">
                            <h6>Industry Type</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <div className="form-gfroup">
                                  <select value={this.state.selectedCat1} name="selectedCat1" onChange={this.changeCat1} className="form-control" required>
                                    <option>Select one</option>
                                    {this.state.category1.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="form-group">
            
                                <select value={this.state.selectedCat2} name="selectedCat2" onChange={this.changeCat2} className="form-control" required>
                                    <option>Select one</option>
                                        {this.state.category2.map((e, key) => {
                                            return <option key={key}>{e.name}</option>;
                                        })}
                                </select> 
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="form-group">
                                <select value={this.state.selectedCat3} name="selectedCat3" onChange={this.changeCat3} className="form-control" required>
                                    <option>Select one</option>
                                        {this.state.category3.map((e, key) => {
                                            return <option key={key}>{e.name}</option>;
                                        })}
                                </select> 
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center text-primary">
                            <h6>Main Office Location</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group p-floating-container">
                                <input type="text" className="form-control rounded-0" placeholder="Enter Main Office Address" id="company_address" name="company_address" value={this.state.company_address} onChange={this.handleChange} autoComplete="off" />
                                <label className="text-primary">Enter Main Office Address </label>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group">
                                <select name="selectedState" value={this.state.selectedState} onChange={this.changeState} className="form-control">
                                    <option >Select State</option>
                                    {this.state.states.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <select name="selectedLGA" value={this.state.selectedLGA} onChange={this.changeLGA} className="form-control">
                                    <option>Select LGA</option>
                                    {this.state.lgas.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                    })}
                                </select>
                            </div>
                            </div>
                           
                        </div>
                        <div className="row mt-2">
                            <div className="col text-center text-primary">
                            <h6>Upload Logo</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                            <div className="mx-auto">
                                {/* <i class="fa fa-upload fa-5x text-white"></i> */}
                                <input type="file" className="input-id" id="company_logo" name="company_logo" value={this.state.company_logo} onChange={this.handleChange} data-browse-on-zone-click="true" accept="image/*" />
                            </div>
                            </div>
                        </div>
                        <p className="text-center mt-2"> <input type="checkbox" name="agree" required /> I agree to the <a href>Terms &amp; Conditions</a>*</p>
                        <div className="form-group mt-3 mb-4">
                            <button type="submit" className="btn btn-block rounded-0 text-white w-50 mx-auto" style={{background: 'red'}} id="submit">Register</button>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-md-4" style={{backgroundImage: 'url("assets/Images/Login%20and%20Sign%20up/illustration_register.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 958}}>
                    <div className="text-white " style={{marginTop: '9rem', paddingRight: '4rem'}}>
                        <h4 className="mb-3"> - Create Gallery</h4>
                        <h4 className="mb-3">  - Find Talents</h4>
                        <h4 className="mb-3">- Create Events</h4>
                        <h4 className="mb-3"> - Post Jobs</h4>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}

export default CompanyRegister
