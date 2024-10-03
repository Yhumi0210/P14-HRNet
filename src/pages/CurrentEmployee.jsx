import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import EmployeeTable from '../components/EmployeeTable.jsx'

export default function CurrentEmployees() {
    const employees = useSelector((state) => state.employee.data)
    const [entriesPerPage, setEntriesPerPage] = useState(10) // État pour gérer le nombre de lignes affichées
    const [paginatedEmployees, setPaginatedEmployees] = useState([]) // État pour gérer les employés affichés
    const [searchTerm, setSearchTerm] = useState('') // État pour gérer la recherche
    const [filteredEmployees, setFilteredEmployees] = useState([]) // État pour gérer les employés filtrés
    const [currentPage, setCurrentPage] = useState(1) // État pour gérer la page actuelle
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' }) // État pour gérer le tri

    // Gestion du changement de nombre d'entrées à afficher
    const handleEntriesChange = (e) => {
        setEntriesPerPage(parseInt(e.target.value))
        setCurrentPage(1) // Réinitialiser à la première page lors du changement du nombre d'entrées
    }

    // Fonction pour gérer la recherche
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
        setCurrentPage(1) // Réinitialiser à la première page lors de la recherche
    }

    // Fonction de tri
    const handleSort = (key) => {
        let direction = 'ascending'
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending'
        }
        setSortConfig({ key, direction })
    }

    // Filtrer et trier les employés
    useEffect(() => {
        // Filtrer les employés selon la barre de recherche
        let filteredData = employees.filter((employee) =>
            Object.values(employee).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            )
        )

        // Trier les employés filtrés
        if (sortConfig.key) {
            filteredData = [...filteredData].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }

        setFilteredEmployees(filteredData)

        // Calculer les employés pour la page actuelle
        const startIndex = (currentPage - 1) * entriesPerPage
        const endIndex = startIndex + entriesPerPage
        const paginatedData = filteredData.slice(startIndex, endIndex)
        setPaginatedEmployees(paginatedData)

    }, [employees, searchTerm, entriesPerPage, currentPage, sortConfig]) // Retirer sortedEmployees des dépendances

    // Calcul des index pour l'affichage du message "Showing X to Y of Z entries"
    const startEntry = filteredEmployees.length === 0 ? 0 : (currentPage - 1) * entriesPerPage + 1
    const endEntry = Math.min(currentPage * entriesPerPage, filteredEmployees.length)
    const totalEntries = filteredEmployees.length

    // Gestion des boutons "Previous" et "Next"
    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
    }

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(totalEntries / entriesPerPage)))
    }

    return (
        <div className='flex flex-col m-8'>
            <h1 className='text-center text-4xl'>Current Employees</h1>

            <div className='flex justify-between items-center mt-2'>
                {/* Sélecteur du nombre d'entrées à afficher */}
                <div>
                    <label htmlFor='entries' className='mr-2 '>Show</label>
                    <select
                        id='entries'
                        value={entriesPerPage}
                        onChange={handleEntriesChange}
                        className='p-2 rounded-md border border-emerald-400 bg-white shadow-lg shadow-emerald-500/50'>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>
                    <span className='ml-2'>entries</span>
                </div>
                {/* Barre de recherche */}
                <div>
                    <label htmlFor='search' className='mr-2'>Search:</label>
                    <input
                        type='text'
                        id='search'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className='p-2 rounded-md'
                        placeholder='...'
                    />
                </div>
            </div>
            <div
                className='bg-white p-2 flex flex-col text-center mt-4 text-xl rounded-md shadow-lg shadow-emerald-500/50'>
                <table>
                    <thead className='bg-emerald-400 border-2 border-emerald-400 h-12'>
                    <tr className=''>
                        <th className='cursor-pointer' onClick={() => handleSort('firstName')}>
                            First Name <div>▲▼</div>
                        </th>
                        <th className='cursor-pointer' onClick={() => handleSort('lastName')}>
                            Last Name <div>▲▼</div>
                        </th>
                        <th className='cursor-pointer' onClick={() => handleSort('startDate')}>
                            Start Date <div>▲▼</div>
                        </th>
                        <th className='cursor-pointer' onClick={() => handleSort('department')}>
                            Department <div>▲▼</div>
                        </th>
                        <th className='cursor-pointer' onClick={() => handleSort('birthDate')}>
                            Date of Birth <div>▲▼</div>
                        </th>
                        <th className='cursor-pointer' onClick={() => handleSort('street')}>
                            Street <div>▲▼</div>
                        </th>
                        <th className='cursor-pointer' onClick={() => handleSort('city')}>
                            City <div>▲▼</div>
                        </th>
                        <th className='cursor-pointer' onClick={() => handleSort('state')}>
                            State <div>▲▼</div>
                        </th>
                        <th className='cursor-pointer' onClick={() => handleSort('zipCode')}>
                            Zip Code <div>▲▼</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Vérifie s'il y a des datas, sinon affiche le message "No data available" */}
                    {paginatedEmployees.length > 0 ? (
                        paginatedEmployees.map((employee, index) => (
                            <EmployeeTable key={index} employee={employee} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="text-center py-4">
                                No data available in table
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>

                {/* Message "Showing X to Y of Z entries" */}
                <div className='mt-4 flex justify-between items-center'>
                    <p>
                        Showing {startEntry} to {endEntry} of {totalEntries} entries
                    </p>
                    <div className=''>
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className='p-2 w-28 rounded-md bg-gradient-to-r from-white to-white hover:from-white hover:to-white hover:text-white shadow-lg shadow-emerald-500/50'>
                            Previous
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === Math.ceil(totalEntries / entriesPerPage)}
                            className='p-2 w-28 rounded-md bg-gradient-to-r from-white to-white hover:from-teal-400 hover:to-white hover:text-white shadow-lg shadow-emerald-500/50'>
                            Next
                        </button>
                    </div>
                </div>

                <Link to='/'
                      className='self-center text-center text-xl mt-4 w-60 h-8 rounded-md bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-teal-400 hover:to-white hover:text-white shadow-lg shadow-emerald-500/50'>Home</Link>
            </div>
        </div>
    )
}
