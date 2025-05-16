import './App.css'
import { Routes, Route } from 'react-router-dom'

//Pages
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import DashBoard from './pages/DashBoard'
import CreateForm from './pages/CreateForm'
import ShowOnePage from './pages/ShowOnePage'
import NotFoundPage from './pages/NotFoundPage'

//Components
import Nav from './components/Nav/Nav'

function App() {
 

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth"  element={<AuthPage />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/create" element={<CreateForm />}/>
        <Route path="/product/:id" element={<ShowOnePage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
