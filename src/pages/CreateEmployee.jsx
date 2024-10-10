import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { initEmployees, addEmployee } from "../features/employeeSlice.js"
import StateSelector from "../components/StateSelector.jsx"
import DatePicker from "../components/DatePicker.jsx"
import AutoCloseModal from 'react-auto-close-modal'

/**
 * CreateEmployee component renders a form to create a new employee.
 *
 * @returns {JSX.Element}
 * @constructor
 * @property {object} formData
 * @property {function} handleChange
 * @property {function} handleSubmit
 * @property {function} handleResetForm
 * @property {function} handleDateChange
 * @property {function} handleStateChange
 *
 */
export default function CreateEmployee() {
    // const employees = useSelector(state => state.employee.data)
    const [formData, setFormData] = useState({firstName: '', lastName: '', birthDate: '', startDate: '', street: '', city: '', state: '', zipCode: '', department: '' })
    // pour lastName et firstname etc faudra laisser des valeurs vide {''}
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleChange = (event) => {
        const nameAttribute = event.target.name
        const value = event.target.value
        const formDataCopy = {...formData}
        console.log(event.target.name)
        formDataCopy[nameAttribute] = value
        setFormData(formDataCopy)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // vérifie que tous les champs sont remplis
        const {firstName, lastName, birthDate, startDate, street, city, state, zipCode, department} = formData
        if (!firstName || !lastName || !birthDate || !startDate || !street || !city || !state || !zipCode || !department) {
            alert('All inputs should be completed')
            return // le return empeche la soummission du formulaire si tous les champs ne sont pas remplis
        }

        dispatch(addEmployee(formData))
        setFormData({firstName: '', lastName: '', birthDate: '', startDate: '', street: '', city: '', state: '', zipCode: '', department: ''})
    }

    useEffect(() => {
        dispatch(initEmployees())
    }, [])
    // quand on met rien dans les crochets c'est pour déclencher le useEffect au chargement, sinon si on met un truc c'est déclancher à ce moment la comme function addEmployee

    return (
        <div className='flex flex-col m-auto mt-8 max-w-2xl'>
            <h1 className='text-center mb-16 text-4xl'>Create Employee</h1>
            <div className='flex flex-col items-center'>
                <form className='w-full flex flex-col items-center text-xl' onSubmit={handleSubmit}>
                    <div className='w-full flex flex-row text-xl justify-evenly mb-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName"
                                   className='w-60 h-8 rounded-md shadow-lg shadow-emerald-500/50'
                                   onChange={handleChange} value={formData.firstName} id='firstName'/>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName"
                                   className='w-60 h-8 rounded-md shadow-lg shadow-emerald-500/50'
                                   onChange={handleChange} value={formData.lastName} id='lastName'/>
                        </div>
                        <div className=' flex flex-col'>
                            <DatePicker dateName={'Date of Birth'} dateLabel={'birthDate'} handleChange={handleChange}
                                        formData={formData.birthDate}/>
                            <DatePicker dateName={'Start Date'} dateLabel={'startDate'} handleChange={handleChange}
                                        formData={formData.startDate}/>
                        </div>
                    </div>

                    <fieldset className='w-full rounded-md shadow-lg shadow-emerald-500/50'>
                        <legend>Address</legend>
                        <div className='mb-6 flex flex-row text-xl justify-evenly'>
                            <div className='flex flex-col'>
                                <label htmlFor="street">Street</label>
                                <input type="text" name="street"
                                       className='w-60 h-8 rounded-md shadow-lg shadow-emerald-500/50'
                                       onChange={handleChange} value={formData.street} id='street'/>

                                <label htmlFor="city">City</label>
                                <input type="text" name="city"
                                       className='w-60 h-8 rounded-md shadow-lg shadow-emerald-500/50'
                                       onChange={handleChange} value={formData.city} id='city'/>
                            </div>
                            <div className='flex flex-col'>
                                {/* State Selector */}
                                <StateSelector
                                    onChange={(e) => handleChange({target: {name: 'state', value: e.target.value}})}
                                    value={formData.state}/>
                                {/*<label htmlFor="state">State</label>*/}
                                {/*<select name="state" className='w-60 h-8 rounded-md bg-white shadow-lg shadow-emerald-500/50'*/}
                                {/*        onChange={handleChange} value={formData.state}>{<StateSelector />}</select>*/}

                                <label htmlFor="zipCode">Zip Code</label>
                                <input type="number" name="zipCode"
                                       className='w-60 h-8 rounded-md shadow-lg shadow-emerald-500/50'
                                       onChange={handleChange} value={formData.zipCode} id='zipCode'/>
                            </div>
                        </div>
                    </fieldset>
                    <div className='flex flex-col text-xl items-center my-4'>
                        <label htmlFor="department">Department</label>
                        <select name="department"
                                className='w-60 h-8 bg-white rounded-md shadow-lg shadow-emerald-500/50'
                                onChange={handleChange} value={formData.department} id='department'>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>
                    <button type="submit" onClick={openModal}
                            className='text-xl w-60 h-8 rounded-md bg-gradient-to-r from-white to-white hover:from-teal-500 hover:to-emerald-400 hover:text-white shadow-lg shadow-emerald-500/50'>
                        Save
                    </button>
                    {/* ajout d'une vérif de champs dans handleSubmit */}
                    <AutoCloseModal isOpen={isModalOpen} onClose={closeModal} autoCloseTime={2000}>
                        <h2 className={'text-center text-2xl'}>Employee Created !</h2>
                    </AutoCloseModal>
                </form>
            </div>
        </div>
    )
}