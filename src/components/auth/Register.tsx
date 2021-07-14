import React, { FormEvent } from "react";
import { Tooltip, FormGroup, Input, Label } from 'reactstrap';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
const FormContainer = styled.form`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const RegisterDiv = styled.div`
    height: 100%;
`
const LoaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
type AcceptedProps={
    updateToken: (newToken: string, newUserId: number, newRole: string) => void,
    changeView: () => void,
    handleTryIt: ()=>void
}

type RegisterState={
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    admin: string,
    tooltipOpen: boolean,
    loading: boolean
}

export default class Register extends React.Component<AcceptedProps, RegisterState>{
    constructor(props: AcceptedProps){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            admin: 'User',
            tooltipOpen: false,
            loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState((state)=>{
            return {tooltipOpen: !state.tooltipOpen}
        })
    }
    handleSubmit(e: FormEvent){
        e.preventDefault()
        this.isLoading()
        console.log('handling submit');
        // this.toArray()
        fetch('https://jpc-kyros-client.herokuapp.com/user/register', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({ 
                user:{
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    emailAddress: this.state.email,
                    password: this.state.password,
                    admin: this.state.admin
                }})
        })
        .then(res => res.json())
        // .then(console.log)
        .then(data => this.props.updateToken(data.sessionToken, data.user.id, data.user.admin))
        .then(this.isLoading)
        .catch(err => console.log(err))
    }
    isLoading() {
        this.setState((state) => { return { loading: !state.loading } })
    }

    render(){
        return(
            <>
                {this.state.loading ?  <LoaderDiv>
                            <Loader type='Grid' color='#FF9F1C' />
                        </LoaderDiv> :
            <RegisterDiv className='register'>
            <FormContainer onSubmit={this.handleSubmit}>
                <FlexDiv>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input name='firstName' value={this.state.firstName} required onChange={(e) => this.setState({firstName: e.target.value})} />
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input name='lastName' value={this.state.lastName} required onChange={(e) => this.setState({lastName: e.target.value})} />
                </FlexDiv>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input name='email' type='email' value={this.state.email} required onChange={(e) => this.setState({email: e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input name='password' id='password' type='password' pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'value={this.state.password} required onChange={(e) => this.setState({password: e.target.value})} />
                    <Tooltip placement='right' isOpen={this.state.tooltipOpen} target='password' toggle={this.toggle}>Password must: <ul>
                        <li>Be at least 8 characters</li>
                        <li>Contain at least 1 Uppercase letter</li>
                        <li>Contain at least 1 Number</li>
                        <li>May contain special characters (not required)</li>
                        </ul></Tooltip>
                </FormGroup>
                <button type='submit'>Sign Up</button>
                <br />
            </FormContainer>
                <p>Already have an account?</p>
                <button onClick={this.props.changeView}>Login</button>
            </RegisterDiv>
            }
            </>
        )
    }

}