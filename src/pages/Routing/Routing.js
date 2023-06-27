import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../../modules/views/Header'
import Footer from '../Footer/Footer'
import Home2 from "../Home/Home"
import Home from "../../Home"

import Test from "../Contact/Test"
import Error from "../Error/Error"
import About from "../About/About"

function Routing() {
    return (
        <Router>
            {/*<Header />*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home2 />} />
                <Route path="/contact" element={<Test />} />
                <Route path="*" element={<Error />} />
            </Routes>
            {/*<Footer />*/}
        </Router>

    );
}

export default Routing;


