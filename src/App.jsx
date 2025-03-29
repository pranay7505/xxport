import ContactMe from './components/Email'
import './App.css'
import Aboutme from './components/Aboutme'
import Navbar from './components/Navbar'
import Skillset from './components/Skillset'
import CursorFollower from './components/CursorFollower'

function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Aboutme></Aboutme>
     <Skillset></Skillset>
     <ContactMe></ContactMe>
     <CursorFollower></CursorFollower>
    </>
  )
}

export default App
