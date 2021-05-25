import React, { Component } from 'react';
import CHeader from '../commons/CHeader';
import Modal from 'react-bootstrap/Modal';
import NavBar3 from '../commons/NavBar3';
import Footer from '../commons/Footer';
import axios from 'axios';

class CompanyEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          show2: false,
          show3: false,
          show4: false,
          company_id: '',
          company_name: '',
          from: '', 
          to: '', 
           author : '', 
           event_title: '' ,
           description: '', 
           event_type: '' ,
          event_industry: '', 
          event_address: '', 
          event_state: '', 
          event_lga: '', 
          event_price1: '', 
          event_price2: '', 
          event_image1: '', 
          event_logo: '', 
          event_link: '',
          states : [],
          lgas : [],
          selectedState : '',
          selectedLGA : '',
          paid_event: false,
          paid_single_price :false ,
          paid_multiple_price :false ,
          event_price: '',
          event_price_from2: '',
          event_price_from3: '',
          event_price_to: '',
          companyevents: [],
          loading: true,

        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        // this.showModal2 = this.showModal2.bind(this);
        // this.hideModal2 = this.hideModal2.bind(this);
        // this.showModal3 = this.showModal3.bind(this);
        // this.hideModal3 = this.hideModal3.bind(this);
        // this.showModal4 = this.showModal4.bind(this);
        // this.hideModal4 = this.hideModal4.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeLGA = this.changeLGA.bind(this);
        // this.changeState2 = this.changeState2.bind(this);
        // this.changeLGA2 = this.changeLGA2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

      changeState(e) {
        this.setState({selectedState: e.target.value});
        this.setState({lgas : this.state.states.find(state => state.name === e.target.value).lgas});
            console.log(e.target.value);
      }
    
      changeLGA(e) {
        this.setState({selectedLGA: e.target.value});
        // const stats = this.state.states.find(cntry => cntry.name === this.state.selectedState).lgas;
        // this.setState({lgas : stats.find(stats => stats.name === event.target.value).lgas});
            console.log(e.target.value);
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.sub_admin_id)
      }

     
      setEventPrice(e) {
        if(e.target.value === 'free')
        {
            this.setState({paid_event:false, event_price: 'free' });
        }
        else if(e.target.value === 'on')
        {
            this.setState({paid_event:true, event_price: '' });
        }
        //
        console.log(e.target.value);
      }

      setEventPriceRange(e) {
        if(e.target.value === 'single_price')
        {
            this.setState({paid_multiple_price: false });
            this.setState({paid_single_price :true });
        }
        else if(e.target.value === 'multiple_price')
        {
            this.setState({paid_single_price :false });
            this.setState({paid_multiple_price: true });
        }
        
        console.log(e.target.value);
      }

      async componentDidMount()
      {



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



        this.setState({
      
            states2: [ {name: 'Abia', code: '1', 
            lgas2: [
                    {name: "Aba North", code: '1'},
                    {name: "Aba South", code: '2'},
                    
              ]}, {name: 'Adamawa', code: '2', 
                      lgas2: [
                              {name: 'Demsa', code: '1'},
                              {name: 'Fufure', code: '2'},
              ]}, {name: 'AkwaIbom', code: '3', 
              lgas2: [
                              {name: 'Abak', code: '1'},
                              {name: 'Eastern Obolo', code: '2'},
          ]}, {name: 'Anambra', code: '4', 
              lgas2: [
                              {name: 'Aguata', code: '1'},
                              {name: 'Anambra East', code: '2'},
                              {name: 'Anambra West', code: '3'},
          ]}, {name: 'Bauchi', code: '5', 
              lgas2: [
                              {name: 'Alkaleri', code: '1'},
                              {name: 'Bauchi', code: '2'},
                              
          ]}, {name: 'Bayelsa', code: '6', 
                  lgas2: [
                              {name: 'Brass', code: '1'},
                              {name: 'Ekeremor', code: '2'},
                              {name: 'Kolokuma Opokuma', code: '3'},
                              {name: 'Nembe', code: '4'},
                              {name: 'Ogbia', code: '5'},
                              {name: 'Sagbama', code: '6'},
                              {name: 'Southern Ijaw', code: '7'},
                              {name: 'Yenagoa', code: '8'}
          ]}, {name: 'Benue', code: '7', 
                  lgas2: [
                              {name: 'Agatu', code: '1'},
                              {name: 'Apa', code: '2'},
                              
          ]}, {name: 'Borno', code: '8', 
                  lgas2: [
                              {name: 'Abadam', code: '1'},
                              {name: 'Askira-Uba', code: '2'},
          ]} ],
        
        });

 
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


    let one = `https://sheltered-chamber-63274.herokuapp.com/api/company/${id}`
    let two = `https://sheltered-chamber-63274.herokuapp.com/api/companyevents/${id}`;
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

      this.setState({  company_id : responseOne.data.companydetails.company_id, company_name : responseOne.data.companydetails.company_name, founded_month : responseOne.data.companydetails.founded_month, founded_year : responseOne.data.companydetails.founded_year, field : responseOne.data.companydetails.field,
        company_about : responseOne.data.companydetails.about, company_number : responseOne.data.companydetails.phone,
        cac : responseOne.data.companydetails.cac, company_director : responseOne.data.companydetails.company_director, 
        website : responseOne.data.companydetails.website, company_address : responseOne.data.companydetails.company_address,
        selectedState : responseOne.data.companydetails.main_office_location_state, selectedLGA : responseOne.data.companydetails.main_office_location_lga,
         });

      this.setState({ companyevents : responseTwo.data.companyevents});

    })).catch(errors => {
      // react on errors.
      console.log(errors);
    })


  }


  async handleSubmit(e) {
    // Form submission logic
    e.preventDefault();

    this.setState({ isLoading: true, show2: false });

    var id = this.props.match.params.id;  
  

    const headers = {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
    }

    let formData = new FormData();
    formData.append('event_image', e.target.event_image.files[0]);
    formData.append('event_logo', e.target.event_logo.files[0]);
    formData.append('from', e.target.from.value);
    formData.append('to', e.target.to.value);
    formData.append('event_title', e.target.event_title.value);
    formData.append('event_link', e.target.event_link.value);
    formData.append('event_description', e.target.event_description.value);
    formData.append('event_type', e.target.event_type.value);
    formData.append('event_industry', e.target.event_industry.value);
    formData.append('event_address', e.target.event_address.value);
    formData.append('event_state', e.target.event_state.value);
    formData.append('event_lga', e.target.event_lga.value);
    formData.append('event_price', this.state.event_price);
    formData.append('event_price2', this.state.event_price_from2);
    formData.append('event_price3', this.state.event_price_from3);
    formData.append('event_priceto', this.state.event_price_to);
   

    //console.log(data);

    //Display the key/value pairs
    //   for (var pair of formData.entries()) {

    //     console.log(pair[0]+ ', ' + pair[1]); 
    //   }

    


      try 
      {
          // fetch data from a url endpoint
          const response = await  axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/createcompanyevent/${id}`, formData, {headers: headers});
          //const response = await  axios.post(`https://lit-ridge-07527.herokuapp.com/api/addeducation`, data, {headers: headers});
          
          console.log(response);

        this.setState({ show: false });

          ///window.location.href = "/user-dashboard-portfolio";

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
            <div style={{background:'#f5f5dc'}}>

                <CHeader/>

                <div className="company-dashboard-body">
                   
                <NavBar3/>


                    <div id="events-box" className="company-events-container mb-5">
                <div className="mb-5 mt-1" style={{marginLeft: '.08rem', marginRight: '.009rem'}}>
                    <div className="row">
                    <div className="events-button-container">
                        <button className="create-event-button" id="add-event-btn" onClick={this.showModal}>Create Event</button>
                        <button className="published-events-button">
                        Find Published Events
                        {/*i class="fas fa-search ml-2 text-white"></i>
                                        <i class="fas fa-caret-down fa-lg float-right mt-1  text-white" id="caret-icon"></i*/}
                        </button>
                    </div>

                    <div id="collapseOne" className="collapse" data-parent="#accordion">
                        <div className="card-body p-2">
                        <form id="events_filter">
                            <div className="event-date">
                            <div className="col-lg-1 pt-4">
                                <i className="far fa-calendar-alt" style={{fontSize: '1.6rem', marginRight: 10}} />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor className="mt-0 mb-0">Start Date</label>
                                <input type="text" className="form-control form-control-sm rounded-0" name="from" id="event_start" autoComplete="off" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor className="mt-0 mb-0">End Date</label>
                                <input type="text" className="form-control form-control-sm rounded-0" name="event_end" id="event_end" autoComplete="off" />
                            </div>
                            </div>
                            <div className="event-type">
                            <div className="col-lg-1 pt-4">
                                <i className="fas fa-sort" style={{fontSize: '1.6rem', marginRight: 10}} />
                            </div>
                            <div className="col">
                                <label htmlFor className="mt-2 mb-0">Event Type</label>
                                {/* <input type="text" class="form-control form-control-sm rounded-0" id="event_start3"> */}
                                <select name="event_type" id="event_type" className="form-control form-control-sm rounded-0">
                                <option value>Select one</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Gala">Gala</option>
                                <option value="Social">Social</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor className="mt-2 mb-0">Industry</label>
                                <select name="event_industry" id="event_industry" className="form-control form-control-sm rounded-0">
                                <option value>Select one</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Gala">Gala</option>
                                <option value="Social">Social</option>
                                </select>
                            </div>
                            <div className="col-lg-3">
                                <label htmlFor className="mt-2 mb-0">Free/Paid?</label>
                                <select name="event_price" id="event_price" className="form-control form-control-sm rounded-0">
                                <option value>Select one</option>
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                                </select>
                            </div>
                            </div>
                            <br />
                            <div className="event-clear-apply">
                            <div className="clear-div">
                                <button className="clear-button" id="reset_btn" type="reset">Clear</button>
                            </div>
                            <div className="apply-div">
                                <button className="apply-button" type="submit">Apply</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>

                    <div className="published-events-title">
                         Published-events-title
                    </div>
                    <div id="posted-event-container" style={{paddingLeft: 0}}>

                    {this.state.companyevents.map(event => 

                     <div className="card mb-5">
                        <img className="card-img-top" src="https://images.pexels.com/photos/5461647/pexels-photo-5461647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image" width="100%" height="300rem" />
                        <div className="card-body pb-0">
                            <div className="row">
                            <div className="col-lg-3 text-right">
                                <img src="https://images.pexels.com/photos/5461647/pexels-photo-5461647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt width="50%" />
                            </div>
                            <div className="col-lg-9">
                                <h4 className="card-title">{event.title}</h4>
                                <p><i className="far fa-calendar-alt" /> &nbsp;{event.from} - {event.to}</p>
                                <p><i className="fas fa-map-marker-alt" /> &nbsp;{event.event_address} | {event.event_lga}, {event.event_state}</p>
                                <p><i className="fas fa-money-bill" /> &nbsp;{event.event_price1} {event.event_price2}</p>
                                <p>{event.event_description}</p>
                                <div className="row">
                                <div className="col">
                                    <p className="text-primary">{event.event_link}</p>
                                </div>
                                <div className="col">
                                    <p className="text-right">
                                    <i className="far fa-edit cursor fa-lg text-warning edit-event-button" data-toggle="tooltip" title="edit" /> &nbsp;&nbsp;
                                    <i className="far fa-trash-alt cursor fa-lg text-danger delete-event-button" data-toggle="tooltip" title="delete" data-delete_id="'.$event['frecno'].'" /></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    )}

                    </div>
                </div>
                </div>
                
                </div>

                <Footer/>



                <Modal
               
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
               scrollable={true}
               show={this.state.show} handleClose={this.hideModal}
               className="rounded-0">
               <Modal.Header className="modal-header rounded-0 py-2 text-white" style={{background: '#70a1B9'}}>
                
                   <strong> Event Details</strong>
                 
                   <span onClick={this.onHide} className="close-modal-btn cursor">x</span>
               </Modal.Header>
               

               <Modal.Body className="px-4 bg-light">
               <form onSubmit={this.handleSubmit} id="myform">
                        <div id="create-event-box">
                            <div className="row">
                                <div className="col">
                                <div className="pt-0">
                                    <label htmlFor className="mb-0 mt-0">Title</label><span className="text-danger">*</span><br />
                                    <input type="text" name="event_title" id="event_title" className="form-control form-control-sm rounded-0 mt-0" value={this.state.event_title} onChange={this.handleChange} required />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <div className="pt-0">
                                    <label htmlFor className="mb-0 mt-3">Event Link</label><br />
                                    <input type="url" name="event_link" className="form-control form-control-sm rounded-0 mt-0" value={this.state.event_link} onChange={this.handleChange}/>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3">
                                <div className>
                                    <label htmlFor className="mb-0 mt-3">Start Date/Time</label><span className="text-danger">*</span><br />
                                    <input type="text" className="form-control form-control-sm rounded-0" name="from" id="event_start" value={this.state.from} onChange={this.handleChange} required autoComplete="off" />
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                <div className>
                                    <label htmlFor className="mb-0  mt-3">End Date/Time</label><span className="text-danger">*</span><br />
                                    <input type="text" className="form-control form-control-sm rounded-0" name="to" id="event_end" value={this.state.to} onChange={this.handleChange} required autoComplete="off" />
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                <div className>
                                    <label htmlFor className="mb-0  mt-3">Event Type</label><span className="text-danger">*</span><br />
                                    <select name="event_type" id="event_type" className="form-control form-control-sm rounded-0" value={this.state.event_type} onChange={this.handleChange} required>
                                    <option value>Select one</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Gala">Gala</option>
                                    <option value="Social">Social</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-3">
                                <div className>
                                    <label htmlFor className="mb-0  mt-3">Industry</label><span className="text-danger">*</span><br />
                                    <select name="event_industry" id="event_industry" className="form-control form-control-sm rounded-0" value={this.state.event_industry} onChange={this.handleChange} required>
                                    <option value>Select one</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Gala">Gala</option>
                                    <option value="Social">Social</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                <div className>
                                    <label htmlFor className="mb-0  mt-3">Location</label><span className="text-danger">*</span><br />
                                    <input type="text" className="form-control form-control-sm rounded-0" name="event_address" id="event_address" placeholder="Enter Event Address" value={this.state.event_address} onChange={this.handleChange} required />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <div className>
                        
                                    <select name="event_state" value={this.state.selectedState} onChange={this.changeState} className="form-control form-control-sm rounded-0">
                                    <option>Select State</option>
                                    {this.state.states.map((e, key) => {
                                        return <option key={key}>{e.name}</option>;
                                            })}
                                    </select>
                                </div>
                                </div>
                                <div className="col">
                                <div className>
                                    {/* <label for="" class="mb-0 mt-1">LGA</label><span class="text-danger">*</span><br> */}
                                    {/* <select className="form-control form-control-sm rounded-0" id="lga" name="event_lga" required>
                                    <option value={0}>Select LGA:</option>
                                    </select> */}
                                    <select name="event_lga" value={this.state.selectedLGA} onChange={this.changeLGA} className="form-control form-control-sm rounded-0">
                                    <option>Select LGA</option>
                                        {this.state.lgas.map((e, key) => {
                                            return <option key={key}>{e.name}</option>;
                                        })}
                                    </select> 
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <div className>
                                    <label htmlFor className="mb-0 mt-3">Description</label><span className="text-danger">*</span><br />
                                    <textarea cols={30} rows={3} className="form-control form-control-sm rounded-0" name="event_description" id="event_description" required />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <div className>
                                    <label className="mt-3 mb-0">Upload Logo</label>
                                    <input type="file" className="input-id" id="event_logo" name="event_logo" data-browse-on-zone-click="true" accept="image/*" />
                                </div>
                                </div>
                                <div className="col">
                                <div className>
                                    <label className="mt-3 mb-0">Upload Event Image</label>
                                    <input type="file" className="input-id" id="event_image" name="event_image" data-browse-on-zone-click="true" accept="image/*" />
                                </div>
                                </div>
                            </div>
                            <div className="row mb-3 mt-2">
                                <div className="col">
                                    <label htmlFor className="mb-0  mt-2">Price</label><span className="text-danger">*</span>
                                </div>
                                
                                    <div className="col pt-2">
                                        <div onChange={e => this.setEventPrice(e)}>
                                            <label htmlFor className="mb-0  mt-2" />
                                            <input type="radio" name="event_price" id="free_event" value="free" required /> Free 
                                    
                                            <label htmlFor className="mb-0  mt-2" />
                                            <input type="radio" name="event_price" id="paid_event" /> Paid
                                        </div>
                                    </div>
                               
                            </div>

                            {this.state.paid_event ?
                            <div onChange={e => this.setEventPriceRange(e)}>
                                <div className="row" id="paid_price">
                                    <div className="col" />
                                    <div className="col" />
                                    <div className="col text-right">
                                        <input type="radio" name="price_range" id="single_price" value="single_price"/> Single Price

                                        {this.state.paid_single_price ?
                                            <div id="single_price_value">
                                                <div className="row pb-2">
                                                <label htmlFor className="text-left mt-0 mb-0">Value:</label>  
                                                <input type="number" min={1} className="form-control form-control-sm rounded-0" name="event_price_from2" value={this.state.event_price_from2} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            :
                                            null
                                        }

                                    </div>
                                    <div className="col text-right">
                                    <input type="radio" name="price_range" id="multi_price" value="multiple_price" /> Multiple Prices
                                    </div>
                                </div>
                              </div>
                            :
                            null
                            }

                        {this.state.paid_multiple_price ?
                            <div id="multi_price_value">
                                <div className="row p-0">
                                <div className="col">
                                    <div className="form-group">
                                    <label htmlFor className="mt-0 mb-0">Min: </label> 
                                    <input type="number" min={1} className="form-control form-control-sm rounded-0" name="event_price_from3" value={this.state.event_price_from3} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                    <label htmlFor className="mt-0 mb-0">Max: </label>
                                    <input type="number" min={1} className="form-control form-control-sm rounded-0" name="event_price_to" value={this.state.event_price_to} onChange={this.handleChange} />
                                    </div>
                                </div>
                                </div>
                            </div>
                            :
                            null
                            }

                          </div>
                    
                    </form>

               </Modal.Body>
                    <div className="modal-footer p-0">
                        <button type="submit" className="btn btn-success" form="myform" onclick="return confirm('Are you sure you want to create this event?')">Create</button>
                    </div>

              
               </Modal>
                
       


            </div>

        );
    }
}

export default CompanyEvents;