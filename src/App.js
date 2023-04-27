import './App.css'
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import About from "./pages/AboutPage/About";
import BlogDetails from "./pages/BlogDetailsPage/BlogDetails";
import Blog from "./pages/BlogPage/Blog";
import CaseStudiesDetails from "./pages/CaseStudiesDetailsPage/CaseStudiesDetails";
import CaseStudies from "./pages/CaseStudiesListPage/CaseStudies";
import Contact from "./pages/ContactPage/Contact";
import Landing from "./pages/LandingPage/Landing";
import Services from "./pages/ServicesPage/Services";


function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blogdetails" element={<BlogDetails/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/casestudies" element={<CaseStudies/>}/>
                <Route path="/casestudiesdetails" element={<CaseStudiesDetails/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
        </>
    );
}

export default App;
