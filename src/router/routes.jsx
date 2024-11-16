import Login from "../auth/Login";
import SignUp from "../auth/SignUp";


const routes = [
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/",
        element: <SignUp/>
    }
]

export default routes;