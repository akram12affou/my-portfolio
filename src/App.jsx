
import NavBar from "./Components/NavBar"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import Projects from "./Components/Projects"
function App() {
  

  return (
    <div>
   <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route  path='/' element={<Main/>} />
    <Route  path='/projects' element={<Projects/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
