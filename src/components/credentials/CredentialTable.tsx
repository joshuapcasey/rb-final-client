import React from "react";
import styled from "styled-components";

const Thiscredential = styled.div`
    border: 1px solid black;
    margin: 20px 0;
    background-color: white;
    height: fit-content;
`
const PostData = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: fit-content;
`
type AcceptedProps = {
    userCredential: [
        {
            id: number,
            npi: number,
            med_school: string,
            licenses: Array<string>,
            specialty: Array<string>,
            bio: string,
            userId: number,
            // affiiation: [
            //     {
            //         id: number,
            //         userId: number,
            //         credentialId: number,
            //         organization: string,
            //         title : string
            //     }]
        }
    ],
    credentialFetch: () => void,
}

type TableState = {
    viewAffiliation: boolean
}
class ThiscredentialTable extends React.Component<AcceptedProps, TableState>{
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            viewAffiliation: false,
        }
        this.viewAffiliationToggle = this.viewAffiliationToggle.bind(this)
    }
    viewAffiliationToggle() {
        this.setState((state) => { return { viewAffiliation: !state.viewAffiliation } })
    }
    credentialMapper = () => {
        if (this.props.userCredential.length > 0) {
            return this.props.userCredential.map((credential, index) => {
                return (
                    <Thiscredential key={index}>
                        <PostData>
                            <div>
                                <h3>{credential.npi}</h3>
                                <h3>{credential.med_school}</h3>
                                <h5>{credential.licenses}</h5>
                                <h5>{credential.specialty}</h5>
                            </div>
                            <div>
                                <p>{credential.bio}</p>
                            </div>
                        </PostData>
                        <footer>
                            <div>
                                <p>Likes</p>
                                {/* <p >Affiiation: {credential.affiiation.}</p> */}
                            </div>
                            <div>
                                <button onClick={this.viewAffiliationToggle}>affiiation</button>
                            </div>
                        </footer>
                        <div>
                            {this.state.viewAffiliation ?
                                <div>
                                    {/* affiliationTable credentialFetch={this.props.credentialFetch} affiiation={this.props.credential.affiiation} credentialId={this.props.credential.id} /> */}
                                </div> : null}

                        </div>
                    </Thiscredential>
                )
            }
            )
        } else {
            return 'No credentials Posted Yet'
        }
    }
    render() {

        return (
            <div>
                {this.credentialMapper()}
            </div >
        )
    }

}


export default ThiscredentialTable;