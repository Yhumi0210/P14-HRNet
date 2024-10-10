import { Link } from 'react-router-dom'

/**
 * NotFound component renders a 404 page.
 *
 * @returns {JSX.Element}
 * @constructor
 *
 */
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className='mt-16 text-6xl'>404</h1>
            <p className='mt-10 text-4xl'>Not Found</p>
            <Link to='/' className='mt-10 text-xl p-2 rounded-md bg-gradient-to-r from-white to-white hover:from-teal-400 hover:to-white hover:text-white shadow-lg shadow-emerald-500/50'>Return to Home</Link>
        </div>
    )
}