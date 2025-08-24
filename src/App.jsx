import { useState }   from 'react'
import { BrowserRouter as Router } from 'react-router'
import './App.css'

import Header from './components/Header.jsx'
import Body from './components/Body.jsx'

import Container    from 'react-bootstrap/Container'


function AppLayout() {
  const [showMenuSide, setShowMenuSide] = useState(false)

  return (
    <>
      <Container fluid>
        <Header handleShow={() => setShowMenuSide(true)}/>
        <Body show={showMenuSide} handleClose={() => setShowMenuSide(false)}/>
      </Container>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
