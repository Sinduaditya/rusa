import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";



function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "/explore",
                    element: <Explore/>,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
