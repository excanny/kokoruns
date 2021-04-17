import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
       <header className="bg-white" style={{borderBottom: '1px solid #ccc', height: '4rem'}}>
            <div className="row">
                <div className="col-md-3">
                <div className="pt-2 pl-2">
                    <a href="/">
                    <img src="assets/Images/Header%20and%20Footer/Logo.png" width="55%" /></a>
                    
                </div>
                </div>
                <div className="col-md-6">
                {/* <div class="mt-3" style="paddin7g-right: 4rem">
                        <input class="header-search-bar border" type="text" placeholder="Search for Something...." style="width: 79.5%"><button class="header-search-bar-button"><img class="search-icon" src="<?php echo base_url();?>/public/assets/Images/Header%20and%20Footer/search.png"></button>
                    </div> */}
                <div className="mt-3 input-group mb-3">
                    <input type="text" className="form-controld header-search-bar" placeholder="Search for Something..." style={{width: '86.3%', display: 'block', height: 34, padding: '7px 12px', fontSize: 14, lineHeight: '1.42857143', border: '1px solid #ccc'}} />
                    <div className="input-group-append">
                    <button className="btn p-0 pr-3 rounded-0" type="submit" style={{background: '#A63E5F'}}><i className="fa fa-search m-0 text-white" style={{fontSize: '.5rem'}} /></button>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="pt-4">
                    <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle p-0 font-weight-bold" data-toggle="dropdown">
                        Pages
                    </button>
                    <div className="dropdown-menu pt-0 shadow border-0">
                        <h1 className="dropdown-header mt-0 mb-0" style={{fontSize: '1.1rem'}}>Admin roles</h1>
                        {/*?php foreach ($association_admin_pages as $page) { ?*/}
                        <div className="pl-2">
                        <a className="dropdown-item text-danger mt-0 font-weight-bold" href="<?php echo base_url('association/dashboard/'. $page['fassociation_id']); ?>">{/*?php echo strtoupper($page['fassociation_name']); ?*/}</a>
                        </div>
                        {/*?php } ?*/}
                        {/*?php foreach ($company_admin_pages as $page) { ?*/}
                        <div className="pl-2">
                        <a className="dropdown-item text-info font-weight-bold" href="<?php echo base_url('company/dashboard/'. $page['fcompany_id']); ?>">{/*?php echo strtoupper($page['fcompany_name']); ?*/}</a>
                        </div>
                        {/*?php } ?*/}
                        {/*?php foreach ($school_admin_pages as $page) { ?*/}
                        <div className="pl-2">
                        <a className="dropdown-item text-sucess font-weight-bold" href="<?php echo base_url('school/dashboard/'.$page['fschool_id']); ?>">{/*?php echo strtoupper($page['fschool_name']); ?*/}</a>
                        </div>
                        {/*?php } ?*/}
                        <div className="dropdown-divider" />
                        <h1 className="dropdown-header mt-0" style={{fontSize: '1.1rem'}}>Sub-admin roles</h1>
                        {/*?php foreach ($association_subadmin_pages as $page) { ?*/}
                        <div className="pl-2">
                        <a className="dropdown-item text-danger font-weight-bold" href="<?php echo base_url('association/dashboard/'. $page['fassociation_id']); ?>">{/*?php echo strtoupper($page['fassociation_name']); ?*/}</a>
                        </div>
                        {/*?php } ?*/}
                        {/*?php foreach ($company_subadmin_pages as $page) { ?*/}
                        <div className="pl-2">
                        <a className="dropdown-item text-info font-weight-bold" href="<?php echo base_url('company/dashboard/'. $page['fcompany_id']); ?>">{/*?php echo strtoupper($page['fcompany_name']); ?*/}</a>
                        </div>
                        {/*?php } ?*/}
                        {/*?php foreach ($school_subadmin_pages as $page) { ?*/}
                        <div className="pl-2">
                        <a className="dropdown-item text-success font-weight-bold" href="<?php echo base_url('school/dashboard/'.$page['fschool_id']); ?>">{/*?php echo strtoupper($page['fschool_name']); ?*/}</a>
                        </div>
                        {/*?php } ?*/}
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="pt-4">
                    <div className="dropdown">
                    <i className="fa fa-plus cursor p-0" data-toggle="dropdown" />
                    <div className="dropdown-menu shadow border-0">
                        <a className="dropdown-item font-weight-bold" href="/company-register">Create Company Page</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item font-weight-bold" href="/association-register">Create Association Page</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item font-weight-bold" href="school-register">Create School Page</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="pt-3">
                    <a href="<?php echo site_url();?>logout" className onclick="return confirm('Are you sure you want to logout?')"><i className="fa fa-power-off text-primary cursor" data-toggle="tooltip" title="Logout" /></a>
                </div>
                </div>
            </div>
            </header>

        )
    }
}

export default Header
