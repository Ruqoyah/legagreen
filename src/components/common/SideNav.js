import React from 'react';
import { NavLink } from 'react-router-dom'
import { Image, Menu, Sidebar } from 'semantic-ui-react'

/**
 *
 * Left Side Component
 *
 */
const SideNav = () => (
    <Sidebar
        as={Menu}
        vertical
        visible
        width='thin'
        className="left-bar"
    >
        <Image
            src={'/assets/logo.png'}
            className="logo"
        />

        <div className="navigation-wrapper">
            <div className="link-wrapper">
                <NavLink exact className="nav-link" activeClassName="active" to="/">
                    <span></span>
                    <i className="material-icons">dashboard</i>
                </NavLink>
            </div>
            <div className="link-wrapper">
                <NavLink className="nav-link" activeClassName="active" to="/browser">
                    <span></span>
                    <i className="material-icons">open_in_browser</i>
                </NavLink>
            </div>
            <div className="link-wrapper">
                <NavLink className="nav-link" activeClassName="active" to="/perm-setting">
                    <span></span>
                    <i className="material-icons">perm_data_setting</i>
                </NavLink>
            </div>
            <div className="link-wrapper">
                <NavLink className="nav-link" activeClassName="active" to="/polymer">
                    <span></span>
                    <i className="material-icons">polymer</i>
                </NavLink>
            </div>
            <div className="link-wrapper">
                <NavLink className="nav-link" activeClassName="active" to="/gift">
                    <span></span>
                    <i className="material-icons">card_giftcard</i>
                </NavLink>
            </div>
            <div className="link-wrapper">
                <NavLink className="nav-link" activeClassName="active" to="/app-setting">
                    <span></span>
                    <i className="material-icons">settings_applications</i>
                </NavLink>
            </div>
            <div className="link-wrapper">
                <NavLink className="nav-link" activeClassName="active" to="/input-setting">
                    <span></span>
                    <i className="material-icons">settings_input_composite</i>
                </NavLink>
            </div>
        </div>
        <div className="profile-wrapper down"><img className="profile-pic" src="" alt="" /></div>
    </Sidebar>
)

export default SideNav