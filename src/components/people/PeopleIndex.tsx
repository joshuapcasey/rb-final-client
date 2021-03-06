import React from "react";
import PeopleTable from "./PeopleTable";
import styled from 'styled-components'
import background from '../../assets/people-background.jpg'
// import ThisIndex from "./ThisIndex";

const FullPage = styled.div`
    height: 100%;
    width: 100vw;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    padding-bottom: 5%;
`
const PeopleView = styled.div`
    height: 80vh;
    overflow: auto;
    width: 82vw;
    margin: auto;
`
const H = styled.h1`
    color: #1276D3;
    padding: 30px 0;
`

type PeopleState = {
    userData: [{
        id: number,
        firstName: string,
        lastName: string,
        fullName: string,
        emailAddress: string,
        npi: number,
        med_school: string,
        licenses: string,
        specialty: string,
        bio: string,
    }],
    userId: number,
    profileView: boolean
}

export default class PeopleIndex extends React.Component<{}, PeopleState>{
    constructor(props: {}) {
        super(props)
        this.state = {
            userData: [{
                id: 0,
                firstName: '',
                lastName: '',
                fullName: '',
                emailAddress: '',
                npi: 0,
                med_school: '',
                licenses: '',
                specialty: '',
                bio: '',
            }],
            userId: 0,
            profileView: false
        }
        this.showProfile = this.showProfile.bind(this)
        this.setUserId = this.setUserId.bind(this)
    }

    componentDidMount() {
        this.fetchPeople()
    }

    showProfile(){
        this.setState((state)=>{return{profileView: !state.profileView}})
    }
    setUserId(userId: number){
        this.setState({userId: userId})
    }
    

    fetchPeople() {
        fetch(`https://jpc-kyros-client.herokuapp.com/user/view`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        })
            .then(res => res.json())
            .then((userData) => { this.setState({ userData: userData }) })
            .then(() => { console.log(this.state.userData) })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <FullPage>
                <H>People</H>
                
                {this.state.profileView ? 
                <div>
                    <button onClick={()=>{this.showProfile()}}>Go Back</button>
                {/* <ThisIndex userId={this.state.userId}/>  */}
                </div>
                :
                <PeopleView>
                    <PeopleTable userData={this.state.userData} showProfile={this.showProfile} setUserId={this.setUserId}/>
                </PeopleView>
                }
            </FullPage>
        )
    }
}