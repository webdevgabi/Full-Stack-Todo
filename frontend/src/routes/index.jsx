import { createBrowserRouter } from 'react-router-dom'

import Root from './Root'
import Login from './Login'
import Register from './Register'

export default createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/profile",
        element: <Profile />
    }
])