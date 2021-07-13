import { Route, Link, Switch, Redirect } from 'react-router-dom';
// import People from '../people/PeopleIndex';
// import Profile from '../profile/ProfileIndex'
// import Credential from '../credentials/Credential';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import './Nav.css'
import Landing from '../landing/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


type AcceptedProps = {
    clickLogout: () => void,
    isUserAuthenticated: boolean
}


const NavBar = (props: AcceptedProps) => {
    const Nav = styled.nav`
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 60px;
    background-color: #0f0f0f;
    padding: 0 8%;
    `

    const Logo = styled.img`
    height: 50px;
    width: 200px;
    `

    const NavLinks = styled.div`
        display: flex;
        justify-content: space-between;
        width: 30%;
        align-items: center;
    `

    const LOButton = styled.button`
        color: #666666;
        background-color: transparent;
        border: none;
        &:hover {
            color: #1276D3
        }
    `

    return (
        <div>
            <Nav>
                <Logo src={logo} alt="" />
                <NavLinks>
                    <li><Link className='NavLinks' to='/About'>About</Link></li>
                    <li><Link className='NavLinks' to='/people'>People</Link></li>
                    <li><Link className='NavLinks' to='/profile'>Profile</Link></li>

                    <LOButton onClick={props.clickLogout}><FontAwesomeIcon icon={faSignOutAlt} size='2x' /></LOButton>

                </NavLinks>
            </Nav>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                props.isUserAuthenticated ?
                                    <Redirect to="/home" /> :
                                    null
                            )
                        }} />
                    <Route exact path='/about'><Landing /></Route>
                    {/* <Route exact path='/about'><Landing sessionToken={props.sessionToken}/></Route> */}

                    {/* <Route exact path='/people'><People /></Route> */}
                {/* <Route exact path='/profile'>< Profile clearSession={props.clickLogout}/></Route> */}
                </Switch>
        </div>
        </div >
    )
}

export default NavBar

// import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// const Nav = (props) => {
//     const [collapsed, setCollapsed] = useState(true);

//     const toggleNavbar = () => setCollapsed(!collapsed);

//     return (
//         <div>
//         <Navbar color="faded" light>
//             <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//             <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//             <Collapse isOpen={!collapsed} navbar>
//             <Nav navbar>
//                 <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//                 </NavItem>
//                 <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//                 </NavItem>
//             </Nav>
//             </Collapse>
//         </Navbar>
//         </div>
//     );
// }

// export default Nav;