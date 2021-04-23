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
                            <a className="dropdown-item" href="user-dashboard">Dashboard</a>
                            <a className="dropdown-item" href="user-teams">Teams</a>
                            <a className="dropdown-item" href="user-messages">Messages</a>
                            <div className="dropdown-divider" />
                            <div className="dropdown-header pl-3">Job Dash</div>
                            <a className="dropdown-item" href="user-jobs">Your Jobs</a>
                            <a className="dropdown-item" href="user/jobdash">Job Invites</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="user-events">Events</a>
                            <a className="dropdown-item" href="user-allaboutyou">All About You</a>
                            <a className="dropdown-item" href="user-jobs">Jobs Board</a>
                            <a className="dropdown-item" href="user-recommendations">Recommendations</a>
                            <a className="dropdown-item" href="user-settings">Settings</a>
                            <a className="dropdown-item" href="logout">Logout</a>
                    </div>
                    </div>
                </div>
                </div>       
            </section> 

        )
    }
}

export default NavBar2
