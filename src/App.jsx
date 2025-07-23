import './App.css'
import { Route, Routes } from 'react-router'

import Home from './Pages/home'
import Navbar from './Components/Navbar'
import Signin from './Pages/signin'
import Signup from './Pages/Signup'
import Package from './Pages/Packages'
import Upload from './Pages/upload'
import ISBN from './Pages/ISBN'
import Plagarism from './Pages/Plagarism'
import Editor from './Pages/Editor'
import ReviewList from './Pages/ReviewList'
import Areview from './Pages/Areview'
import ReviewDetail from "./Pages/ReviewDetail";
import LanguageEditor from "./Pages/LanguageEditor";
import CoverDesigner from "./Pages/CoverDesigner";
import Finalsubmit from './Pages/finalssubmit';
import Contact from './Pages/Contact'
// import Main from './Pages/main'
import About from './Pages/About'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/file" element={<Upload />} />
        <Route path="/isbn" element={<ISBN />} />
        <Route path="/plagarism" element={<Plagarism />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/editor-page" element={<Editor />} />
        <Route path="/review-list" element={<ReviewList />} />
        <Route path="/review-list/:docId" element={<ReviewDetail />} />
        <Route path="/edit/:docId" element={<LanguageEditor />} />
        <Route path="/cover-design/:docId" element={<CoverDesigner />} />
        <Route path="/arevi" element={<Areview />} />
        <Route path="/submit" element={<Finalsubmit />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
