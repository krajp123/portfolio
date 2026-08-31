import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  return <main><Navbar /><div className="page-wrap" id="home"><Home /></div><div className="page-wrap" id="education"><Education /></div><div className="page-wrap" id="experience"><Experience /></div><div className="page-wrap projects-page-wrap"><Projects /></div><div className="page-wrap" id="certificates"><Certificates /></div><div className="page-wrap" id="about"><About /></div><div className="page-wrap" id="contact"><Contact /></div><Footer /></main>
}
