import React, { Component } from 'react'
import axios from 'axios';

export class CompanyRegister extends Component {


    constructor(props) {
        super(props);
        
        this.state = {
        
            company_name: '',
            company_number: '',
            cac: '',
            company_type:'',
            company_size:'',
            website:'',
            industry1: '',
            company_address:'',
            state:'',
            lga: '',
            company_logo:'',
            isLoading: false,

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    //    this.validatePassword = this.validatePassword.bind(this);
      
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
        }


        this.setState({ isLoading: true });
        
        let formData = new FormData();
        //formData.append('file', e.target.uploaded_id_card.files[0]);
        //formData.append('uploadIDPath', this.state.file);
        formData.append('company_name', e.target.company_name.value);
        formData.append('company_number', e.target.company_number.value);
        formData.append('cac', e.target.cac.value);
        formData.append('company_type', e.target.company_type.value);
        formData.append('company_size', e.target.company_size.value);
        formData.append('dob', e.target.dob.value);
        formData.append('website', e.target.website.value);
        formData.append('industry1', e.target.industry1.value);
        formData.append('company_address', e.target.company_address.value);

        formData.append('state', e.target.state.value);
        formData.append('lga', e.target.lga.value);
        formData.append('company_logo', e.target.company_logo.value);


       // Display the key/value pairs
        for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
        }

        //const data = { email: this.state.user_email_or_phone_number, password: this.state.password };  

        //console.log(data);

    //    axios.post(`https://lit-ridge-07527.herokuapp.com/api/register`, data, {headers: headers})
    //     .then((response) => {
           
    //       //  if (response.data.success === true) 
    //       //  {
    //       //     this.setState({
    //       //       isVerifyComplete: 1,
    //       //     });
             
    //       //     this.props.history.push("/get-started");
    //       //  }  
    //       //  else 
    //       //  {
    //       //     this.props.history.push('/signup'); 
    //       //  }  

    //        this.props.history.push("/registersuccess");
         
    //        console.log(response);

    //      })
    //      .catch( error => {
    //        console.log(error.response);
    //      });
    

      }



    render() {
        return (
   <div className="container mx-auto" style={{margin: '4rem'}}>
                <div className="row bg-white mx-auto">
                    <div className="col-md-8">
                    <div className="pt-4 pl-4 pr-4">
                        <h3 className="mb-4">Create A Company Account</h3>
                        <p><span className="text-danger">*</span> Required Information</p>
                     
                        <form encType="multipart/form-data" onSubmit={this.handleSubmit} className="needs-validation" noValidate>
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
                        </div>
                        <div className="row">
                            <div className="col text-center text-primary">
                            <h6>Industry Type</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group">
                                <select name="industry1" id="industry1" value={this.state.industry1} onChange={this.handleChange} className="form-control rounded-0" required>
                                <option value>Select one*</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Construction">Construction</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Financial Services">Financial Services</option>
                                <option value="Health Care">Health Care</option>
                                <option value="Information and Communication Technology">Information and Communication Technology</option>
                                <option value="Oil and Gas">Oil and Gas</option>
                                <option value="Natural Resources">Natural Resources</option>
                                <option value="Services">Services</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Conglomorate">Conglomorate</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <select name="industry2" id="industry2" className="form-control rounded-0">
                                <option value>Select one*</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <select name="industry3" id="industry3" className="form-control rounded-0">
                                <option value>Select one*</option>
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
                                <select name="state" id="state" className="form-control rounded-0" value={this.state.state} onChange={this.handleChange} required>
                                <option value selected="selected"> Select State* </option>
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
                                <option value="Zamfara">Zamfara</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <select name="lga" id="lga" value={this.state.lga} onChange={this.handleChange} className="form-control rounded-0" required>
                                <option value>Select LGA*</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <select name="area" id="area" className="form-control rounded-0">
                                <option value>Select Area*</option>
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
