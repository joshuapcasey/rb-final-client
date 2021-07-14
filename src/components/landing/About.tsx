import React from 'react';
import Register from '../auth/Register';
import Login from '../auth/Login';
import styled from 'styled-components';
// import landingGif from '../../assets/UltrasoundCoverGif.gif';
import aboutGif from '../../assets/DocWalking.gif';
import logo from '../../assets/logo.png';
// import { Jumbotron, Container } from 'reactstrap';
// import {
//     Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardGroup,
//     CardSubtitle, CardBody
//   } from 'reactstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';


type AcceptedProps = {
    // sessionToken: string | null,
}

const LandingDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 50vh;
    width: 100vw;
    background-image: url(${aboutGif});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E2DBCA;
`
const cardDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const About = (props: AcceptedProps) => {
    return (
        <div>
            <LandingDiv>
            </LandingDiv>
            <CardColumns>
            <Card>
                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
            </Card>
            <Card>
                <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
            </Card>
            <Card>
                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
            <Card body inverse color="primary">
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button color="secondary">Button</Button>
            </Card>
            </CardColumns>

            
        {/* <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Container>
        </Jumbotron> */}
        {/* <Container>
            <Row>
        
            <CardGroup>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Profile</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This is a place for you to manage your professional credentials</CardText>
                    <Button>Your Profile</Button>
                    </CardBody>
                </Card>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Physicians</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This is a place for you to search peers in realted fields and network</CardText>
                    <Button>Find a Physician</Button>
                    </CardBody>
                </Card>
                <Col sm="4">.col-sm-4</Col>
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Credentials</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>This is a place to see officers of medical associations and latest publications</CardText>
                    <Button>See Whats New</Button>
                    </CardBody>
                </Card>
            </CardGroup>
            </Row>
        </Container> */}
        </div>
    );
};


export default About;