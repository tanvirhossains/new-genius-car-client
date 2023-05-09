import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },

            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            // {
            //     path: "dashboard",
            //     element: <Dashboard />,
            //     loader: ({ request }) =>
            //         fetch("/api/dashboard.json", {
            //             signal: request.signal,
            //         }),
            // },
            /*  {
                 element: <AuthLayout />,
                 children: [
                     {
                         path: "login",
                         element: <Login />,
                         loader: redirectIfUser,
                     },
                     {
                         path: "logout",
                         action: logoutUser,
                     },
                 ],
             }, */
        ],
    },
]);

export default router;