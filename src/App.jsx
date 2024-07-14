import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Auth from './pages/Auth'
import Footer from './components/Footer'


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth register/>} />
      <Route path='*' element={<PageNotFound/>} />
      {/*  * access the path that is not set */}
     </Routes>
     <Footer/>
    </>
  )
}

export default App
