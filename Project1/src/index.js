import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import '../src/index.css'
import './FONTS/dosis/static/Dosis-Bold.ttf';
// import './FONTS/PoiretOne/PoiretOne-Regular.tff'


// import {createBrowserRouter,RouterProvider} from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//     },
//     {
//         path:"head",
//         element:<Heading/>
//     },
//     {
//         path:"main",
//         element:<Main/>
//     }
//   ]);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
