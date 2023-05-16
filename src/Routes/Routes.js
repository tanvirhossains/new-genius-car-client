import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Checkout from "../Pages/CheckOut/CheckOut";
import ServiceNew from "../Pages/Service/ServiceNew";
import PrivateRoute from "../Private/PrivateRoute";
import MyOrders from "../Pages/MyOrder/MyOrders";
import AllOrders from "../Pages/AllOrders.js/AllOrders";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader
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
            {
                path: "/checkout/:id",
                element: <PrivateRoute>
                    <Checkout />
                </PrivateRoute>
                ,
                loader: ({ params }) => fetch(`http://localhost:8000/services/${params.id}`)
            },
            {
                path: "/serviceNew",
                element: <ServiceNew />,
            },
            {
                // shopping cart top-right 
                path: "/orders/:email",
                element: <PrivateRoute><MyOrders />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:8000/orders/${params.email}`)
            },
            {
                // 
                path: "/allorders",
                element:
                    <AllOrders />
                ,
                loader: ({ params }) => fetch(`http://localhost:8000/orders`)
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