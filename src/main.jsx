import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header.jsx'
import CurrentEmployee from './components/CurrentEmployee.jsx'
import CreateEmployee from './components/CreateEmployee.jsx'
import './assets/scss/main.scss'
import { store } from './app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/CurrentEmployee" element={<CurrentEmployee />} />
            </Routes>
        </BrowserRouter>
    </Provider>
)
