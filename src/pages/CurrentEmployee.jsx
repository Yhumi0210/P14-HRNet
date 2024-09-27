import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function CurrentEmployees() {
    const employees = useSelector((state) => state.employee.data)

    return (
        <div className='flex flex-col m-12 mt-16'>
            <h1 className='text-center text-4xl'>Current Employees</h1>
            {/*<table className='table-auto text-center text-xl rounded-md shadow-lg shadow-emerald-500/50'>*/}
            <div className='bg-white p-6 flex text-center flex-col mt-16 mb-16 text-xl rounded-md shadow-lg shadow-emerald-500/50'>
            <table >
                <thead className='bg-emerald-400 border-2 border-emerald-400 h-12'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Date of Birth</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
                </thead>
                <tbody>
                {/* En faire un component avec filtre(barre de recherche) pagination et tri(alphabétique etc) */}
                {employees.map((employee, index) => (
                    <tr key={index} className='h-10'>
                        <td className='border-2 border-emerald-400'>{employee.firstName}</td>
                        <td className='border-2 border-emerald-400'>{employee.lastName}</td>
                        <td className='border-2 border-emerald-400'>{employee.startDate}</td>
                        <td className='border-2 border-emerald-400'>{employee.department}</td>
                        <td className='border-2 border-emerald-400'>{employee.birthDate}</td>
                        <td className='border-2 border-emerald-400'>{employee.street}</td>
                        <td className='border-2 border-emerald-400'>{employee.city}</td>
                        <td className='border-2 border-emerald-400'>{employee.state}</td>
                        <td className='border-2 border-emerald-400'>{employee.zipCode}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <Link to='/' className='self-center text-center text-xl w-60 h-8 rounded-md bg-gradient-to-r from-white to-white hover:from-teal-500 hover:to-emerald-400 hover:text-white shadow-lg shadow-emerald-500/50'>Home</Link>
        </div>
    )
}