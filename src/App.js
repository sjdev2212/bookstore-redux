import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { GoPerson } from 'react-icons/go';
import BooksList from './components/BooksList';
import Categories from './components/Categories';

const App = () => (
  <section className="App">
    <nav className="navbar">
      <h1 className="main-title">Bookstore CMS</h1>

      <Link className="link-books" to="/">Books</Link>
      <Link className="link-categories" to="/categories">Categories</Link>
      <GoPerson className="person" />
    </nav>

    <Routes>
      <Route exact path="/" element={<BooksList />} />

      <Route path="/categories" element={<Categories />} />

    </Routes>

  </section>

);

export default App;
