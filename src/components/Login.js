import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Footer from '../commons/Footer';
import axios from 'axios';
import jwt from 'jwt-decode'; // import dependency


export class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        
            user_email_or_phone_number: '',
            password: '',
            loggedIn: false,
            isLoading: false,
    
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
    
    
      handleSubmit(e) {
        // Form submission logic
        e.preventDefault();


        this.setState({isLoading : true });

  
        const headers = {
          "Content-Type": "application/json",
        }
    
        //const form_data = new FormData(e.target);
    
       // Display the key/value pairs
        // for (var pair of form_data.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }
    
        this.setState({ [e.target.name]: e.target.value });
    
        const data = { email: this.state.user_email_or_phone_number, password: this.state.password };  
    
        //console.log(data);
    
    
        axios.post(`https://sheltered-chamber-63274.herokuapp.com/api/login`, data, {headers: headers})
        //axios.post(`http://127.0.0.1:8000/api/login`, data, {headers: headers})
        .then( (response) => {
    
          
          localStorage.setItem('access_token', response.data.access_token);
  
    
          //this.props.history.push("/user-dashboard-experience");
          

            if(response.data.user.active === 0)
            {
              this.props.history.push("/profile-setup");
              //window.location.href = "/profile-setup";
            }
            else
            {
              this.props.history.push("/user-dashboard");
              //window.location.href = "/user-dashboard";
            }

            //this.props.history.push("/user-dashboard");

            console.log(response.data.user.active);
    
        })
        .catch( error => {
          console.log(error);
        });
    
      }
  
    
      componentDidMount() {
        
      }

      parseJwt(token){
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      }; 


    render() {

      const { stateobj } = this.props.location;

      

        return (
                <>
                <header className="container-fluid bg-white">
                    <nav className="p-2">
                    <a className="navbar-brand" href="/">
                        <img src="assets/Images/Header%20and%20Footer/Logo.png" alt="Logo" style={{width: 200}} />
                    </a>
      
                    </nav>
                </header>
                <div className="container mx-auto" style={{margin: '4rem', marginTop: '8rem'}}>
                    <div className="row bg-white w-50 mx-auto">
                    <div className="col">
                        <div className="pt-4 pl-4 pr-4">
                        <h2 className="mb-3 text-center">Login Into Your Account</h2>
                        {stateobj}
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="form-group">
                            <input type="text" className="form-control rounded-0" value={this.state.user_email_or_phone_number} onChange={this.handleChange} id="user_email_or_phone_number" name="user_email_or_phone_number" placeholder="Enter Email or Phone Number" autoComplete="off" required />
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control rounded-0" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" id="password" name="password" autoComplete="off" required />
                            </div>
                            <div className="form-group">
                            {this.state.isLoading ? <button type="submit" className="btn btn-block rounded-0 text-white w-50 mx-auto disabled" style={{background: 'red'}} id="submit">Login <i className="fa fa-spinner fa-spin"></i></button> : <button type="submit" className="btn btn-block rounded-0 text-white w-50 mx-auto" style={{background: 'red'}} id="submit">Login</button> }
                            </div>
                        </form>
                        <h5 className="text-center text-primary">OR</h5>
                        <div className="row">
                            <div className="col">
                            <button type="button" className="btn btn-white btn-block rounded-0 border w-100">
                                <img className="float-left" src="assets/Images/Index/Google%20Logo.png" alt width="5%" /> <span className="text-primary"> Continue with Google</span>
                            </button>
                            <button type="button" className="btn btn-block rounded-0 border w-100" style={{background: '#3C5A99'}}>
                                <img className="float-left" src="assets/Images/Index/Facebook%20Logo.png" alt width="5%" /> <span className="text-white"> Continue with Facebook</span>
                            </button>
                            <button type="button" className="btn btn-dark btn-block rounded-0 border w-100" style={{background: '#000'}}>
                                <img className="float-left" src="data:image/png;base64,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" alt width="5%" /> <span className="text-white"> Sign Up with Apple</span>
                            </button>
                            </div>
                        </div>
                            <p className="text-center mt-2 mb-1">Dont have an account? 
                                <Link to={"/register"}>  Register</Link>
                            </p>
                            <p className="text-center"> 
                                <Link to={"/forgot"}>  Forgot Password?</Link>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>   

                <Footer/>   
            </>

        )
    }
}

export default Login
