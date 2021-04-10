import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-white py-3 w-100">
                <div className="row">
                <div className="col-md-2 pl-4">
                    <img className="kokoruns-footer-logo" src="assets/Images/Header%20and%20Footer/Logo.png" width="100%" />
                </div>
                <div className="col text-center pt-3">
                    <a className="text-primary mx-2 font-weight-bold">
                    Contact Us 
                    </a>
                    <a className="text-primary mx-2 font-weight-bold">
                    About Us 
                    </a>
                    <a className="text-primary mx-2 font-weight-bold">
                    Our Community Guidelines 
                    </a>
                    <a className="text-primary mx-2 font-weight-bold">
                    FAQ
                    </a>
                    <a className="text-primary font-weight-bold">
                    Terms&nbsp;of&nbsp;Use 
                    </a>
                    <a className="text-primary font-weight-bold">
                    Terms&nbsp;of&nbsp;Service
                    </a> 
                    <a className="text-primary mx-2 font-weight-bold">
                    Privacy&nbsp;Policy 
                    </a>
                </div>
                </div> 
              </div>
        )
    }
}

export default Footer
