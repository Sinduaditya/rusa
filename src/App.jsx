import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import DetailExplore from "./components/Explore/DetailExplore.jsx";
import Stories from "./pages/Stories.jsx";
import Login from "./pages/Login.jsx";
import DetailStories from "./components/Stories/DetailStories.jsx";
import About from "./pages/About.jsx";



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
                    path: "/Explore",
                    element: <Explore/>,
                },
                {
                    path: "/stories",
                    element: <Stories/>,
                },
                {
                    path: "/detail-stories/",
                    element: <DetailStories/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/detail-Explore/:id",
                    element: <DetailExplore />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
