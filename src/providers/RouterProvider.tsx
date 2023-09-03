import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "cart",
                element: <Home />,
            }
        ]
    },
])



export default routes;