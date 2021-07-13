import React from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import styled from 'styled-components';
import landingGif from '../../assets/UltrasoundCoverGif.gif';
import logo from '../../assets/logo.png';
import { Jumbotron, Container } from 'reactstrap';

type AcceptedProps = {
    // sessionToken: string | null,
}

const About = (props: AcceptedProps) => {
    return (
        <div>
        <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Container>
        </Jumbotron>
        </div>
    );
};


export default About;