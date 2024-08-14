import { Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext';

import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import About from './components/about/About';
import BookDetails from './components/book-details/BookDetails';
import BookCreate from './components/book-create/BookCreate';
import BookCatalog from './components/books-catalog/BooksCatalog';
import Logout from './components/logout/Logout';
import BookEdit from './components/book-edit/BookEdit';

function App() {

    return (
        <AuthContextProvider>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/sign-up' element={<Register />}></Route>
                        <Route path='/logout' element={<Logout />}></Route>
                        <Route path='/books' element={<BookCatalog />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/book/create' element={<BookCreate />}></Route>
                        <Route path='/books/:bookId/details' element={<BookDetails />}></Route>
                        <Route path='/books/:bookId/edit' element={<BookEdit />}></Route>
                    </Routes>
                </main>

            </div>
        </AuthContextProvider>
    )
}

export default App
