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
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useTranslation} from 'react-i18next'
import Footer from './components/footer/Footer';



function App() {
    const { t } = useTranslation()
    const [theme , setTheme] = useState(true);
    useEffect(() => {
        document.body.style.backgroundColor = `${theme ? 'white' : '#161C24'}`;
        return () => {
          document.body.style.backgroundColor = null;
        };
      }, [theme]);

    return (
        <>
            <Suspense fallback='Loading...'>
                <button className='theme_btn' style={{position: 'fixed'}} onClick={() => setTheme((prev) => !prev)}>{theme ? 'dark' : 'white'}</button>
                <Nav theme={theme}/>
                <Routes>
                    <Route path="/" element={<Landing theme={theme}/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blogdetails" element={<BlogDetails/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/casestudies" element={<CaseStudies theme={theme}/>}/>
                    <Route path="/casestudiesdetails" element={<CaseStudiesDetails/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/services" element={<Services/>}/>
                </Routes>
                <Footer theme={theme}/>
            </Suspense>
        </>
    );
}

export default App;
