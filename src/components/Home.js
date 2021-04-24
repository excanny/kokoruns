import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
                <div>
                <section className="landing-page-section-1">
                    <header className="header-class-landing-page">
                    <div style={{float: 'left'}}>
                        <a href="index.html">
                        <img className="landing-page-header-logo" src="assets/Images/Header%20and%20Footer/Logo.png" /></a>
                    </div>
                    <div className="landing-page-nav">
                        <a href>About</a><br style={{lineHeight: '1.3'}} />
                    </div>    
                    <div className="landing-page-nav">
                        <a href>Contact&nbsp;Us</a><br style={{lineHeight: '1.3'}} /> 
                    </div>
                    <div className="landing-page-nav">
                        <a href>Help</a><br style={{lineHeight: '1.3'}} /> 
                    </div>
                    </header>
                    <br /><br />
                    <div className="whoever-div">
                    {/*Whoever You Are, Whatev<b class="your-job">er Your Job...</b*/}
                    Whoever You Are, Whatever your Job... 
                    </div>  
                    <div className="lets-brand-div">
                    <b className="weve-got-you">We've Got You!</b> Let's Brand You.       
                    </div>  
                    <div align="center" className="register-as-container">
                    <div align="center" className="register-as-label">Register As</div>
                    <div align="center" className="register-as-sections">
                    <div align="center" className="register-as-sections">
                        <Link style={{textDecoration: 'none'}} to={"/register"}><div align="center" className="register-children">User</div></Link>
                        &nbsp;&nbsp;&nbsp;
                        {/* <Link style={{textDecoration: 'none'}} to={"/cregister"}><div align="center" className="register-children">Company</div></Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link style={{textDecoration: 'none'}} to={"/sregister"}><div align="center" className="register-children">School</div></Link>
                        &nbsp;&nbsp;&nbsp; 
                        <Link style={{textDecoration: 'none'}} to={"/aregister"}><div align="center" className="register-children">Association</div></Link>      */}
                    </div>
                        &nbsp;&nbsp;&nbsp;     
                    </div>
                    <br /><br />
                    <div align="center" className="have-an-account">Already have an account?</div>
                    <div align="center" className="landing-page-login-button"><Link to={"/login"}>Login</Link> </div>
                    </div>   
                </section>   
                <section className="landing-page-section-2">
                    <div className="multi-talented-div">Multi-Talented? Multi-Skilled?</div>
                    <div className="find-kokoruns-div">Find Your Kokoruns</div>
                    <div className="landing-page-categories-div">
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Entertainment</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Art &amp; Crafts</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Agriculture</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Marketing</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">IT</div></a> 
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Education</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Artisanship</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Engineering</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Advertising</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Banking</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Politics</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Health</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Finance</div></a>
                    <a style={{textDecoration: 'none'}} href><div className="landing-page-categories">Human Resources</div></a>        
                    </div>
                    <div align="right" className="illustration-div">
                    <img className="illustration-1" src="assets/Images/Index/Illustration%201.png" />
                    </div>
                </section>
                <section className="landing-page-section-3">
                    <div className="register-sponsored-events-div">
                    Register For Sponsored Events    
                    </div>
                    <div className="landing-events-container">
                    <div className="landing-events-div">
                        <div className="event-image-container">
                        <img className="event-company-logo" src="assets/Images/Index/index.jpg" />
                        <img className="event-image" src="assets/Images/Index/45069394-young-office-workers-in-a-meeting-inside-the-office-reviewing-the-compiled-documents-on-top-the-tabl.jpg" />    
                        </div>
                        <div className="event-name-div">Diamond Bank Career Fair</div> 
                        <div className="date-location-div">
                        <div className="event-date-div"><img className="date-icon" src /><span className="event-date">Feb 19</span>-<span className="event-date">Feb 20</span></div>  
                        &nbsp;|&nbsp;  
                        <div className="event-location-div"><img className="location-icon" src /><span className="event-location">Ikeja G.R.A Lagos</span></div>    
                        </div> 
                        <div className="website-div"><img className="website-icon" src /><a href>www.greyinsightng/careers/fair</a></div>  
                        <a style={{textDecoration: 'none'}} href><div align="center" className="learn-more-div">Learn More</div></a>
                    </div>
                    </div>
                    <div className="landing-events-container">
                    <div className="landing-events-div">
                        <div className="event-image-container">
                        <img className="event-company-logo" src="assets/Images/Index/index.jpg" />
                        <img className="event-image" src="assets/Images/Index/45069394-young-office-workers-in-a-meeting-inside-the-office-reviewing-the-compiled-documents-on-top-the-tabl.jpg" />    
                        </div>
                        <div className="event-name-div">Diamond Bank Career Fair</div> 
                        <div className="date-location-div">
                        <div className="event-date-div"><img className="date-icon" src /><span className="event-date">Feb 19</span>-<span className="event-date">Feb 20</span></div>  
                        &nbsp;|&nbsp;  
                        <div className="event-location-div"><img className="location-icon" src /><span className="event-location">Ikeja G.R.A Lagos</span></div>    
                        </div> 
                        <div className="website-div"><img className="website-icon" src /><a href>www.greyinsightng/careers/fair</a></div>  
                        <a style={{textDecoration: 'none'}} href><div align="center" className="learn-more-div">Learn More</div></a>
                    </div>
                    </div>
                    <div className="landing-events-container">
                    <div className="landing-events-div">
                        <div className="event-image-container">
                        <img className="event-company-logo" src="assets/Images/Index/index.jpg" />
                        <img className="event-image" src="assets/Images/Index/45069394-young-office-workers-in-a-meeting-inside-the-office-reviewing-the-compiled-documents-on-top-the-tabl.jpg" />    
                        </div>
                        <div className="event-name-div">Diamond Bank Career Fair</div> 
                        <div className="date-location-div">
                        <div className="event-date-div"><img className="date-icon" src /><span className="event-date">Feb 19</span>-<span className="event-date">Feb 20</span></div>  
                        &nbsp;|&nbsp;  
                        <div className="event-location-div"><img className="location-icon" src /><span className="event-location">Ikeja G.R.A Lagos</span></div>    
                        </div> 
                        <div className="website-div"><img className="website-icon" src /><a href>www.greyinsightng/careers/fair</a></div>  
                        <a style={{textDecoration: 'none'}} href><div align="center" className="learn-more-div">Learn More</div></a>
                    </div>
                    </div>
                    <div className="landing-events-container">
                    <div className="landing-events-div">
                        <div className="event-image-container">
                        <img className="event-company-logo" src="assets/Images/Index/index.jpg" />
                        <img className="event-image" src="assets/Images/Index/45069394-young-office-workers-in-a-meeting-inside-the-office-reviewing-the-compiled-documents-on-top-the-tabl.jpg" />    
                        </div>
                        <div className="event-name-div">Diamond Bank Career Fair</div> 
                        <div className="date-location-div">
                        <div className="event-date-div"><img className="date-icon" src /><span className="event-date">Feb 19</span>-<span className="event-date">Feb 20</span></div>  
                        &nbsp;|&nbsp;  
                        <div className="event-location-div"><img className="location-icon" src /><span className="event-location">Ikeja G.R.A Lagos</span></div>    
                        </div> 
                        <div className="website-div"><img className="website-icon" src /><a href>www.greyinsightng/careers/fair</a></div>  
                        <a style={{textDecoration: 'none'}} href><div align="center" className="learn-more-div">Learn More</div></a>
                    </div>
                    </div>
                    <div className="landing-events-container">
                    <div className="landing-events-div">
                        <div className="event-image-container">
                        <img className="event-company-logo" src="assets/Images/Index/index.jpg" />
                        <img className="event-image" src="assets/Images/Index/45069394-young-office-workers-in-a-meeting-inside-the-office-reviewing-the-compiled-documents-on-top-the-tabl.jpg" />    
                        </div>
                        <div className="event-name-div">Diamond Bank Career Fair</div> 
                        <div className="date-location-div">
                        <div className="event-date-div"><img className="date-icon" src /><span className="event-date">Feb 19</span>-<span className="event-date">Feb 20</span></div>  
                        &nbsp;|&nbsp;  
                        <div className="event-location-div"><img className="location-icon" src /><span className="event-location">Ikeja G.R.A Lagos</span></div>    
                        </div> 
                        <div className="website-div"><img className="website-icon" src /><a href>www.greyinsightng/careers/fair</a></div>  
                        <a style={{textDecoration: 'none'}} href><div align="center" className="learn-more-div">Learn More</div></a>
                    </div>
                    </div>
                    <div className="landing-events-container">
                    <div className="landing-events-div">
                        <div className="event-image-container">
                        <img className="event-company-logo" src="assets/Images/Index/index.jpg" />
                        <img className="event-image" src="assets/Images/Index/45069394-young-office-workers-in-a-meeting-inside-the-office-reviewing-the-compiled-documents-on-top-the-tabl.jpg" />    
                        </div>
                        <div className="event-name-div">Diamond Bank Career Fair</div> 
                        <div className="date-location-div">
                        <div className="event-date-div"><img className="date-icon" src /><span className="event-date">Feb 19</span>-<span className="event-date">Feb 20</span></div>  
                        &nbsp;|&nbsp;  
                        <div className="event-location-div"><img className="location-icon" src /><span className="event-location">Ikeja G.R.A Lagos</span></div>    
                        </div> 
                        <div className="website-div"><img className="website-icon" src /><a href>www.greyinsightng/careers/fair</a></div>  
                        <a style={{textDecoration: 'none'}} href><div align="center" className="learn-more-div">Learn More</div></a>
                    </div>
                    </div>
                </section>
                <section className="landing-page-section-4">
                    <div className="find-join-create">Find, Join or Create a Team. Work With Professionals &amp; Colleagues on Projects</div>
                    <div className="illustration-container">
                    <div align="center" className="get-started-div">
                        <a style={{textDecoration: 'none'}} href><div className="get-started">Get Started</div></a> 
                        <div className="send-us-email">Send&nbsp;us&nbsp;an&nbsp;E-mail: customerservice@kokoruns.com </div>
                        <div className="call-us">Call&nbsp;Us: +234 891 273 9229</div>    
                    </div> 
                    <div className="illustration-2-div">
                        <img className="illustration-2" src="assets/Images/Index/Illustration%202.png" />   
                    </div>    
                    </div>
                </section>
                </div>

        )
    }
}

export default Home
