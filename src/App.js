import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Lectures from './pages/Lectures'

import { BrowserRouter, Route, Routes } from "react-router-dom"

export default () => {
    
    return <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="Lectures" exact element={<Lectures />} />
        </Routes>
    </BrowserRouter>
}