import React from "react";
import Person from './Person'

type AcceptedProps={
    userData: [{
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
    }],
    showProfile: ()=>void,
    setUserId:(userId: number)=>void
}
const PeopleTable =(props: AcceptedProps)=>{

    const peopleMapper = () => {
        return props.userData.map((user, index) => {
            return <Person showProfile={props.showProfile} user={user} setUserId={props.setUserId}/>
        })
    }
        return (
            <div>
                {peopleMapper()}
            </div>
        )
    
}

export default PeopleTable;