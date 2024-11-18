import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import BookListPage from "../components/BooklistPage";


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
    },
    {
        path: "/booklist",
        element: <BookListPage/>
    }
]

export default routes;