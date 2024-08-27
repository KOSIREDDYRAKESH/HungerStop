import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Address from "./Address";
import PaymentDetails from "./PaymentsDetails";
import PastOrders from "./PastOrders";
import { RouterProvider } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Profile from "../Profile";
const ShowOrderDetails = () => {
    return (<Outlet />);
}


const appRouter2 = createBrowserRouter(
    [
        {
            path: "/profile",
            element: <profile />,
            children: [
                {
                    path: "/profile/pastOrders",
                    element: <PastOrders />
                },
                {
                    path: "/profile/paymentsDeatils",
                    element: <PaymentDetails />
                },
                {
                    path: "/profile/address",
                    element: <Address />
                },

            ],
            errorElement: <ErrorPage />
        }
    ]
);

let root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<RouterProvider router={appRouter2} />);
export default ShowOrderDetails;