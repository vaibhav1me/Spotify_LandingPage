import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import SearchPage from "./components/Search/Search"



const App = () => {
  return (
    <div className='bg-[#000000] text-white p-[.5rem]' id="container">
        <div id="main" className="flex">
            <Navbar/>
            <div className="bg-[#121212] w-[100%]">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/search" element={<SearchPage/>}></Route>
            </Routes>
            </div>
        </div>
        <div id="footer">

        </div>
    </div>
  )
}

export default App