import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import CredentialTable from './CredentialTable';
import APIURL from '../../helpers/environment';

const CredentialView = styled.div`
    height: 66.5vh;
    overflow: auto;
    width: 100%;
    margin: auto;
`
const H = styled.h1`
    color: #FF9F1C;
    padding-top: 30px;
`

type AcceptedProps={
    userId: number
}

type CredentialState ={
    userCredential:[
        {
        id: number;
        npi: number;
        med_school: string;
        licenses: Array<string>;
        specialty: Array<string>;
        bio: string;
        userId: 0,
            affiliation: [
                {
                    id: number,
                    userId: number,
                    credentialId: number,
                    organization: string,
                    title: string,
                }
            ]
        }
    ],
    createModalActive: boolean,
    loading: boolean,
    credentialToEdit: {
        id: number;
        npi: number;
        med_school: string;
        licenses: Array<string>;
        specialty: Array<string>;
        bio: string;
        userId: 0,
    },
    editModalActive: boolean
}

export default class ThisCredentialIndex extends React.Component<AcceptedProps, CredentialState>{
    constructor(props: AcceptedProps){
        super(props)
        this.state={
            userCredential:[
                {
                    id: 0,
                    npi: 0,
                    med_school: '',
                    licenses: [''],
                    specialty: [''],
                    bio: '',
                    userId: 0,
                        affiliation: [{
                            id: 0,
                            userId: 0,
                            credentialId: 0,
                            organization: '',
                            title: ''
                        }]
                }
            ],
            createModalActive: false,
            loading: false,
            credentialToEdit: {
                id: 0,
                npi: 0,
                med_school: '',
                licenses: [''],
                specialty: [''],
                bio: '',
                userId: 0,
            },
            editModalActive: false
        }
        this.credentialFetch = this.credentialFetch.bind(this)
    }

    componentDidMount(){
        // console.log();
        this.credentialFetch()
    }
    credentialFetch(){
        this.setState({loading: true})
        fetch(`${APIURL}${this.props.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
        }),
    })
    .then(res => res.json())
    .then((credentialData) =>{
        this.setState({userCredential: credentialData.userCredential}); console.log(credentialData)
    })
    .then(()=>{console.log('logging state:', this.state.userCredential)})
    .then(()=>{this.setState({loading: false})})
}
    

    render(){
        return(
            <div>
                <H>Credentials</H>
                <CredentialView>
                {this.state.loading ? 
                <div>
                    <Loader type='Audio' color='#FF9F1C'/>
                    <p>Loading...</p>
                </div>
                :
                    <CredentialTable userCredential={this.state.userCredential} credentialFetch={this.credentialFetch} />
                }
                </CredentialView> 

            </div>
        )
    }

}