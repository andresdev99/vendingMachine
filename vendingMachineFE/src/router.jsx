import { Navigate, createBrowserRouter } from "react-router-dom";
import VendingMachine from "./pages/VendingMachine";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <Navigate to={'/vendor-machine'} />
            }
        ]
    },
    {
        path: '/vendor-machine',
        element: <VendingMachine />,
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;

