import React, { Component } from 'react'

export class NavBar2 extends Component {
    render() {
        return (

            <section>    
                <div className="row">
                <div className="col">
                    <div className="dropdown dropleft float-right pt-3 pr-4">
                    <i className="fa fa-bars cursor" data-toggle="dropdown" style={{fontSize: 25}}/>&nbsp;&nbsp;
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="<?php echo site_url();?>user/dashboard">Dashboard</a>
                        <a className="dropdown-item" href="<?php echo site_url();?>user/teams">Teams</a>
                        <a className="dropdown-item" href="<?php echo site_url();?>user/messages">Messages</a>
                        <a className="dropdown-item" href="<?php echo site_url();?>user/jobdash">JobDash</a>
                        <a className="dropdown-item" href="<?php echo site_url();?>user/allaboutyou">All About You</a>
                        <a className="dropdown-item" href="<?php echo site_url();?>user/jobs">Jobs Board</a>
                        <a className="dropdown-item" href="<?php echo site_url();?>user/recommendations">Recommendations</a>
                        <a className="dropdown-item" href="<?php echo site_url();?>user/settings">Settings</a>
                        <a className="dropdown-item" href="<?php echo site_url();?>user/logout">Logout</a>
                    </div>
                    </div>
                </div>
                </div>       
            </section> 

        )
    }
}

export default NavBar2
