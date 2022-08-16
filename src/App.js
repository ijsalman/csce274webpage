import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Lectures from './pages/Lectures'

import { BrowserRouter, Route, Routes } from "react-router-dom"

export default () => {
    
    return <BrowserRouter basename="/~ijsalman/csce274/f22">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Lectures" exact element={<Lectures />} />
        </Routes>
    </BrowserRouter>
}