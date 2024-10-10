import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CurrentEmployee from './pages/CurrentEmployee.jsx'
import CreateEmployee from './pages/CreateEmployee.jsx'
import NotFound from './pages/NotFound.jsx'
import './assets/css/index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <CreateEmployee/>,
            },
            {
                path: "/CurrentEmployee",
                element: <CurrentEmployee/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
