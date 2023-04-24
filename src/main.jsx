import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About.jsx";
import Contact from "./component/Contact/Contact.jsx";
import ErrorPage from "./component/Error/ErrorPage.jsx";
import Home from "./component/Home/Home.jsx";
import First from "./component/First/First.jsx";
import Friends from "./component/Friends/Friends.jsx";
import FriendDetail from "./component/FriendDetail/FriendDetail.jsx";
import Posts from "./component/Posts/Posts.jsx";
import PostDetail from "./component/PostDetail/PostDetail.jsx";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: '/about',
//     element: <About></About>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: '/contact',
//     element : <Contact></Contact>,
//     errorElement: <ErrorPage></ErrorPage>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        // this way we can take dynamic friend id
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "post/:postId",
        element: <PostDetail></PostDetail>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "*",
        element: <div>404 page not found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
