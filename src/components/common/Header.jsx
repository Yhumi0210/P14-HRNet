import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

export default function Header() {
    // const employees = useSelector(state => state.employee.data)


    return (
        <nav className="navbar">
            <Link to='/'>
                <img src={logo} className="logo" alt="React logo" />
            </Link>
            <h1>HRNet</h1>
            <Link to='/CurrentEmployee'>View Current Employees</Link>
        </nav>
    )
}
