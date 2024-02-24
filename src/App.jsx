import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import DetailExplore from "./components/explore/DetailExplore.jsx";
import Stories from "./pages/Stories.jsx";
import Login from "./pages/Login.jsx";



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
                    path: "/login",
                    element: <Login/>,
                },
                {
                    path: "/explore",
                    element: <Explore/>,
                },
                {
                    path: "/stories",
                    element: <Stories/>,
                },
                {
                    path: "/detail-explore/:id",
                    element: <DetailExplore />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
