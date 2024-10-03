import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header.jsx'
import CurrentEmployee from './pages/CurrentEmployee.jsx'
import CreateEmployee from './pages/CreateEmployee.jsx'
import NotFound from './pages/NotFound.jsx'
import './assets/css/index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import {StrictMode} from "react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<CreateEmployee/>}/>
                    <Route path="/CurrentEmployee" element={<CurrentEmployee/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
