import React, {useState} from 'react'

const Form = (props) => {
    const teamMembers = props.passTeamToForm
    const setTeamMembers = props.passSetTeamToForm

    const [team, setTeam] = useState({
        name: "",
        email: "",
        role: ""
    })

    const changeHandler = e => {
        setTeam({...team, [e.target.name]: e.target.value})
    }

    const submitForm = e => {

    }

    return (
        <>
        <form onSubmit = {submitForm}>
           <label htmlFor = "name">Name:</label>
            <input
                name = "name"
                placeholder = "name"
                value = {setTeam.value}
                onChange = {changeHandler}
            />
            <label htmlFor = "name">email:</label>
            <input
                name = "email"
                placeholder = "email"
                value = {setTeam.value}
                onChange = {changeHandler}
            />
            <label htmlFor = "name">Role:</label>
                <input
                name = "role"
                placeholder = "role"
                value = {setTeam.value}
                onChange = {changeHandler}
            />
            <button onClick = {submitForm}>Submit</button>
        </form>
        </>
    )
}

export default Form