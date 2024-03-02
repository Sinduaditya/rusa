import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import DetailExplore from "./components/Explore/DetailExplore.jsx";
import Stories from "./pages/Stories.jsx";
import Login from "./pages/Login.jsx";
import DetailStories from "./components/Stories/DetailStories.jsx";
import About from "./pages/About.jsx";
import AiLayout from "./layouts/AiLayout.jsx";
import IntroAi from "./components/Home/IntroAi.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import PageNotFound from "./pages/NotFound.jsx";

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
                    path: "/detail-stories/:id",
                    element: <DetailStories/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/detail-explore/:id",
                    element: <DetailExplore />,
                },
            ],
        },
        {
            path: "/dolanrek-ai",
            element: <AiLayout/>,
            children: [
                {
                    path: '/dolanrek-ai',
                    element: <IntroAi/>
                }
            ],
        },
        {
            path: "/login",
            element: <AuthLayout/>,
            children: [
                {
                    path: '/login',
                    element: <Login/>
                }
            ],
        },
        // Route for Page Not Found
        {
            path: "*",
            element: <PageNotFound/>
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
