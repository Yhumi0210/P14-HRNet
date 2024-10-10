// import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'

/**
 * Header component renders the header of the application.
 *
 * @returns {JSX.Element}
 * @constructor
 *
 */
export default function Header() {
    const location = useLocation()

    return (
        <nav className="flex flex-row items-center justify-between px-32 h-20 bg-blend-normal">
            <Link to='/'>
                <h1 className='text-4xl hover:text-white'>HRNet</h1>
            </Link>
            {location.pathname === '/' ? (
                // Si on est sur la page "Create Employee", on affiche le lien vers "Current Employee"
                <Link to='/CurrentEmployee' className='text-xl hover:text-white'>View Current Employees</Link>
            ) : (
                // Sinon on affiche le lien vers "Create Employee"
                <Link to='/' className='text-xl hover:text-white'>Return to Create Employee</Link>
            )}
        </nav>
    )
}
