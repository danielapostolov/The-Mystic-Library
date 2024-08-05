import { Routes, Route } from 'react-router-dom'


import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import About from './components/about/About';

function App() {

    return (
        <div className="" >
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/sign-up' element={<Register />}></Route>
                    <Route path='/about' element={<About />}></Route>
                </Routes>
            </main>

        </div>
    )
}

export default App
