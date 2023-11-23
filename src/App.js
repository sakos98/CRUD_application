import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import ListPost from './components/pages/ListPost/ListPost';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import About from './components/pages/About/About';
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import EditPost from "./components/features/EditPost/EditPost";
import Category from './components/pages/Category/Category';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';


const App = () => {
  return (
    <main>
      <Container>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="post/:id" element={<Post />}/>
            <Route path="post/add" element={<ListPost />} />
            <Route path="about" element={<About />} />
            <Route path="post/edit/:id" element={<EditPost />} />
            <Route path='/category' element={<Category />} />
            <Route path='/category/:category' element={<CategoryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
      </Container>
    </main>
  );
};

export default App;
