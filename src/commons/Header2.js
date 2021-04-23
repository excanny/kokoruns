import React, { Component } from 'react'

export class Header2 extends Component {
    render() {
        return (
        <header className="container-fluid bg-white" style={{borderBottom: '1px solid #ccc'}}>
            <nav className="p-1">
                <div className="row">
                <div className="col-md-3">
                    <a className="navbar-brand pl-1" href="#">
                    <img src="assets/Images/Header%20and%20Footer/Logo.png" alt="Logo" style={{width: 210}} />
                    </a>
                </div>
                <div className="col-md-6 pt-3">
                    <div className="input-group mb-2">
                    <input type="text" className="rounded-0 header-search-bar" placeholder="Search for something..." style={{backgroundImage: 'linear-gradient(45deg, #0691f8, #0691f8, #b73650)', width: '87.5% !important', border: '1px solid #ced4da', height: '2.5rem'}} />
                    <div className="input-group-append">
                        <button className="btn btn-success rounded-0" type="submit" style={{background: '#B23955', border: 'none'}}><i className="fa fa-search" /></button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <a href="<?php echo site_url(); ?>logout" className="float-right pt-4" onclick="return confirm('Are you sure you want to logout?')">
                    <i className="fa fa-power-off text-primary" data-toggle="tooltip" title="Logout" />
                    </a>
                </div>
                </div>
            </nav>
            </header>

        )
    }
}

export default Header2
