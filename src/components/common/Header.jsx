// import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

export default function Header() {
    // const employees = useSelector(state => state.employee.data)


    return (
        <nav className="flex flex-row items-center justify-between px-32 h-20 bg-blend-normal">
            <Link to='/'>
                {/*<img src={logo} className="w-16" alt="React logo" />*/}
                <h1 className='text-4xl hover:text-white'>HRNet</h1>
            </Link>
            <Link to='/CurrentEmployee' className='hover:text-white'>View Current Employees</Link>
        </nav>
    )
}
