import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "../Page/Account/Login";
import Body from "../Page/Body";




function AppRouter() {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Body/>,
            children: [
                {
                    path:'/',
                    element: <Login/>,   
                }
            ]
        },
        {
            path:'/',
            element: <Login/>,
        },

    ])
    return (
        
    <RouterProvider router={appRouter} />
        
    );
}

export default AppRouter
