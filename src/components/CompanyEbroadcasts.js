import React, { Component } from 'react';
import CHeader from '../commons/CHeader';
import NavBar3 from '../commons/NavBar3';
import Footer from '../commons/Footer';
import axios from 'axios';

class CompanyEbroadcasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      subject: '',
      message: '',
      companyebroadcasts: [],
      loading: true,    

    };

   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit2 = this.handleSubmit2.bind(this);
    // this.handleSubmit3 = this.handleSubmit3.bind(this);
  
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.sub_admin_id)
  }



  async componentDidMount()
  {


    var id = this.props.match.params.id;    

  const headers = {

    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 

  }


let one = `https://sheltered-chamber-63274.herokuapp.com/api/companyebroadcasts/${id}`
//let two = `https://sheltered-chamber-63274.herokuapp.com/api/companyevents/${id}`;
// let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
 
const requestOne = axios.get(one, {headers: headers});
//const requestTwo = axios.get(two, {headers: headers});
// const requestThree = axios.get(three, {headers: headers});
 
axios.all([
  requestOne, 
  //requestTwo, 
  //requestThree
]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  //const responseTwo = responses[1]
  // const responesThree = responses[2]
  // use/access the results 

  this.setState({ companyebroadcasts : responseOne.data.companyebroadcasts});

})).catch(errors => {
  // react on errors.
  console.log(errors);
})


}


   handleSubmit(e) {
        // Form submission logic
        e.preventDefault();

        var id = this.props.match.params.id;   

        this.setState({ isLoading: true, show : false });


        const headers = {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 
        }

        const data = { subject: this.state.subject, message : this.state.message};  

        //  console.log(data);

       axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/createcompanyebroadcast/${id}`, data, {headers: headers})
        .then((response) => {
           

           this.setState({ loading: true, show: false});
         
           console.log(response);

           //window.location.href = "/user-dashboard-experience";

         })
         .catch( error => {
           console.log(error.response);
         });
    

      }


    render() {
        return (
            <div style={{background:'#f5f5dc'}}>

            <CHeader/>

            <div className="company-dashboard-body">

                <NavBar3/>


     <div className="mt-5 mb-5" id="ebroadcast-box">
  {/*- Start of Ebroadcast box */}
  <div className="p-3 border bg-white card" style={{marginLeft: '.08rem', marginRight: '.009rem'}}>
    <h4 className="text-center title">Send Out Important Message To a Large Audience</h4>
    <br />
    <form onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="col">
          <div className="border p-3">
            <label htmlFor className="mt-2  mb-0 text-primary"><strong>Subject</strong></label>
            <input type="text" name="subject" id="subject" className="form-control form-control-sm rounded-0" placeholder="Enter Subject of Message" value={this.state.subject} onChange={this.handleChange} required />
            <br />
          
            <label htmlFor className="mt-2  mb-0 text-primary"><strong> Message </strong></label>
            <textarea name="message" id="message" className="form-control rounded-0" cols={30} rows={8} placeholder="Start typing..." value={this.state.message} onChange={this.handleChange} required/>
            <br />
            <label className="mt-2  mb-0 text-primary"><strong>Select Target Group</strong></label> <br />
            <input type="radio" name="target" /> Staff &nbsp; <input type="radio" name="target" id="target" /> Followers
            <br />
            <button className="float-right btn btn-success btn-sm rounded-0  text-white " type="submit">SEND TO ALL</button>
            <br />
          </div>
        </div>
      </div>
    </form>
  </div>
  <div className="border bg-white mt-5 p-3 card">
    <h4 className="title">Sent Broadcasts</h4>

    <div>
      <table className="table table-bordered table-sm datatable">
        <thead className="table-primary">
          <tr className="text-center">
            <th>Subject</th>
            <th>Content</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>

           {this.state.companyebroadcasts.map(broadcast => 
          <tr className="text-center">
            <td>{broadcast.subject}</td>
            <td>{broadcast.message}</td>
            <td>{broadcast.created_at}</td>
          </tr>
           )}

        </tbody>
      </table>
    </div>
  </div>
</div>



            </div>

            <Footer/>


            </div>
        );
    }
}

export default CompanyEbroadcasts;