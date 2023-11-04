import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import SearchPage from "./components/Search/Search"
import Footer from "./components/Footer/Footer"



const App = () => {
  return (
    <div className='bg-[#000000] text-white h-[100vh] min-h-[45rem]' id="container">
        <div id="main" className="flex h-[90%]">
            <Navbar/>
            <div className="p-[.3rem] w-[100%] max-h-[100%] box-border">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/search" element={<SearchPage/>}></Route>
            </Routes>
            </div>
        </div>
        <div id="footer" className="h-[10%] w-[100%]">
          <Footer/>
        </div>
    </div>
  )
}

export default App