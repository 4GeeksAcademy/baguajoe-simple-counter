//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from 'react';



// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import App  from "./component/App.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<App />);

