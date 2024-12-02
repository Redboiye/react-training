import './App.css';
import {Home} from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {About} from "./pages/About";
import {Contacts} from "./pages/Contacts";
import {Calculator} from "./pages/Calculator";


export const App = () => {
    return (
        <Router>


            <Routes>
                <Route path="/" element={<Home name="Pupsiks"/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/calculator" element={<Calculator/>}/>


            </Routes>
        </Router>
    );
};



