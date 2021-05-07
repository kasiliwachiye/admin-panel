import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* The Plug Logo */}
                <a href="#" className="brand-link">
                <img src="dist/img/theplug.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">The Plug</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                    <img src="dist/img/avatar4.png" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                    <a href="#" className="d-block">Joseph</a>
                    </div>
                </div>

                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li className="nav-item menu-open">
                        <a href="#" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                            Dashboard
                            <i className="right fas" />
                        </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Widgets
                        </p>
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-chart-pie" />
                        <p>
                            Charts
                            <i className="right fas" />
                        </p>
                        </a>
                        
                    </li>
                    
                    
                    <li className="nav-header">UTILITIES</li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon far fa-calendar-alt" />
                        <p>
                            Calendar
                        </p>
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon far fa-envelope" />
                        <p>
                            Mailbox
                            <i className="fas" />
                        </p>
                        </a>
                        
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-credit-card" />
                        <p>
                            Wallet
                            <i className="fas" />
                        </p>
                        </a>
                        
                    </li>

                    
                    <li className="nav-header">LABELS</li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon far fa-circle text-danger" />
                        <p className="text">Important</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon far fa-circle text-warning" />
                        <p>Warning</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon far fa-circle text-info" />
                        <p>Informational</p>
                        </a>
                    </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
            </div>

        )
    }
}
