import Footer from './Footer'
import Navbar from './Navbar'

export { Footer, Navbar }

export default function Layout({ children }) {
  return <main><Navbar />{children}<Footer /></main>
}
