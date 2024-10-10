import PropTypes from "prop-types"

/**
 * EmployeeTable component renders a table of employees.
 * @param index
 * @param employee
 * @returns {JSX.Element}
 * @constructor
 * @property {number} index
 * @property {object} employee
 *
 */
export default function EmployeeTable({paginatedEmployees, handleSort, labelsAndKeys }) {

    return (
        <>
            <table>
                <thead className='bg-emerald-400 border-2 border-emerald-400 h-12'>
                <tr className=''>
                    {labelsAndKeys.map(([label, key], index) => (
                        <th className='cursor-pointer' key={index} onClick={() => handleSort(key)}>
                            {label}<div>▲▼</div>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {/* Vérifie s'il y a des datas, sinon affiche le message "No data available" */}
                {/* */}
                {paginatedEmployees.length > 0 ? (
                    paginatedEmployees.map((employee, index) => (
                    <tr key={index} className='h-10'>
                        {labelsAndKeys.map(([label, key], index) => (
                            <td className='border-2 border-emerald-400' key={index}>{employee[label, key]}</td>
                        ))}

                        {/* voir pourquoi ça marche comme ça*/}

                        {/* refaire la meme chose que la thead attention c'est un objet et un tableau, indice: labelsandkeys */}
                        {/*<td className='border-2 border-emerald-400'>{employee.firstName}</td>*/}
                        {/*<td className='border-2 border-emerald-400'>{employee.lastName}</td>*/}
                        {/*<td className='border-2 border-emerald-400'>{employee.startDate}</td>*/}
                        {/*<td className='border-2 border-emerald-400'>{employee.department}</td>*/}
                        {/*<td className='border-2 border-emerald-400'>{employee.birthDate}</td>*/}
                        {/*<td className='border-2 border-emerald-400'>{employee.street}</td>*/}
                        {/*<td className='border-2 border-emerald-400'>{employee.city}</td>*/}
                        {/*<td className='border-2 border-emerald-400'>{employee.state}</td>*/}
                        {/*<td className='border-2 border-emerald-400'>{employee.zipCode}</td>*/}
                    </tr>
                    ))) : (
                    <tr>
                        <td colSpan="9" className="text-center py-4">
                            No data available in table
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

EmployeeTable.propTypes = {
    paginatedEmployees: PropTypes.array.isRequired,
    handleSort: PropTypes.func.isRequired,
    labelsAndKeys: PropTypes.array.isRequired
}