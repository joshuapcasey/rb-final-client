import React from "react";
import styled from 'styled-components';
// import gravatarUrl from "gravatar-url";
import defaultPic from '../../assets/default-profile.png'


const ProfileBox = styled.div`
    margin-right: 10px;
    height: 20%;
    border: 1px solid black;
    width: 80vw;
    background-color: #FDFFFC;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    `
const ProfileImg = styled.img`
    height: calc(75px + 5vw);
    width: calc(75px + 5vw);
`

type AcceptedProps = {
    user: {
        id: number,
        firstName: string,
        lastName: string,
        fullName: string,
        emailAddress: string,
        // credentials: [
            //     {
                //         id: number,
                //         npi: number,
                //         med_school: string,
                //         licenses: string,
                //         specialty: string,
                //     }
                // ]
        npi: number,
        med_school: string,
        licenses: string,
        specialty: string,
        bio: string,
    },
    showProfile: ()=> void,
    setUserId: (userId: number)=> void
}

type PersonState = {
    locData: {
        places: [
            {
                'place name': string
                'state abbreviation': string
            }
        ]
    },
    dataFetched: boolean
}
export default class Person extends React.Component<AcceptedProps, PersonState>{
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            locData: {
                places: [
                    {
                        'place name': '',
                        'state abbreviation': ''
                    }
                ]
            },
            dataFetched: false,
        }
    }

    // componentDidUpdate() {
    //     if (this.state.dataFetched === false) {
    //         this.zipToLocation()
    //     }
    // }
    // zipToLocation() {
    //     this.setState({ dataFetched: true })
    //     fetch(`https://api.zippopotam.us/us/${this.props.user.zipCode}`)
    //         .then(res => res.json())
    //         .then(data => this.setState({ locData: data }))
    //         .then(() => { console.log(this.state.locData) })
    // }

    render() {
        return (
            <ProfileBox>
                <div>
                    <ProfileImg src={defaultPic} alt="" />
                    <h5>{this.props.user.fullName}</h5>
                    
                </div>

                <div>
                    <p><strong>NPI #:</strong></p>
                    <p>{this.props.user.npi}</p>
                    <p><strong>Medical School(s):</strong></p>
                    <p>{this.props.user.med_school}</p>
                    <p><strong>License(s):</strong></p>
                    <p>{this.props.user.licenses}</p>
                    <p><strong>Specialty:</strong></p>
                    <p>{this.props.user.specialty}</p>
                    <p><strong>Bio:</strong></p>
                    <p>{this.props.user.bio}</p>
                </div>
                <button onClick={()=>{this.props.showProfile();
                this.props.setUserId(this.props.user.id)}}>View Profile</button>
            </ProfileBox>

        )
    }
}