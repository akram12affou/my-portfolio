
import NavBar from "./Components/NavBar"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
function App() {
  

  return (
    <div>
   <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route  path='/' element={<Main/>} />
    <Route  path='/projects' element={<Projects/>} />
    <Route  path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
