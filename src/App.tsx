import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blogs from './pages/Blogs/Blogs'
import BlogPost from './pages/BlogPost/BlogPost';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Contact from './pages/Contact/Contact';

const routes = (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/:slug' element={<BlogPost />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/*' element={<ErrorPage errorCode="404" message="PAGE NOT FOUND..." />} />
    </Routes>
  </Router>
)

function App() {
  return (
    <>
      {routes}
    </>
  )
}

export default App
