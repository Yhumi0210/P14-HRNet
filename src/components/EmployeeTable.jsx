import PropTypes from "prop-types"

/**
 * EmployeeTable component renders a table of employees.
 *
 * @param {number} index
 * @param {object} employee
 * @returns {JSX.Element}
 */
export default function EmployeeTable({index, employee}) {
    return (
        <>
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
        </>
    )
}

EmployeeTable.propTypes = {
    employee: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        birthDate: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number
}