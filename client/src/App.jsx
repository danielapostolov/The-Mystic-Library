import { Routes, Route } from 'react-router-dom'


import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import About from './components/about/About';
import BookDetails from './components/book-details/BookDetails';
import BookCreate from './components/book-create/BookCreate';
import BookCatalog from './components/books-catalog/BooksCatalog';
import { useState } from 'react';
import { AuthContext } from './contexts/authContext';

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const contextData = {
        email: authState.email,
        userId: authState._id,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={contextData}>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/books' element={<BookCatalog />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/book/create' element={<BookCreate />}></Route>
                        <Route path='/books/:bookId/details' element={<BookDetails />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/sign-up' element={<Register />}></Route>
                    </Routes>
                </main>

            </div>
        </AuthContext.Provider>
    )
}

export default App
