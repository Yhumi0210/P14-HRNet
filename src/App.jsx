import { Outlet } from "react-router-dom"
import Header from "./components/common/Header.jsx"

export default function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}