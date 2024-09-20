import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { initEmployees, addEmployee } from "../features/employeeSlice.js"


export default function CreateEmployee() {
    // const employees = useSelector(state => state.employee.data)
    const [formData, setFormData] = useState({age:1})
    // pour lastName et firstname etc faudra laisser des valeurs vide {''}
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const nameAttribute = event.target.name
        const value = event.target.value
        const formDataCopy = {...formData}

        formDataCopy[nameAttribute] = value
        setFormData(formDataCopy)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        dispatch(addEmployee(formData))
    }

    useEffect(() => {
        dispatch(initEmployees())
    }, [])
    // quand on met rien dans les crochets c'est pour déclencher le useEffect au chargement, sinon si on met un truc c'est déclancher à ce moment la comme function addEmployee


    return (
        <>
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={handleChange} value={formData.firstName}  />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} value={formData.lastName}  />
                <label htmlFor="birthDate">Date of Birth</label>
                <input type="date" name="birthDate" onChange={handleChange} value={formData.birthDate}  />
                <label htmlFor="startDate">Start Date</label>
                <input type="date" name="startDate" onChange={handleChange} value={formData.startDate} />

                <button type="submit">Submit</button>
            </form>

        </>
    )
}