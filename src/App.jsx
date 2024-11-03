import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
      <div className='p-5 flex items-center gap-5 mx-auto w-[200px]'>
        <NavLink to={"/"} className={"text-[22px] font-bold"}>Home</NavLink>
        <NavLink to={"/about"} className={"text-[22px] font-bold"}>About</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App