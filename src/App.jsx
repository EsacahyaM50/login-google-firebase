import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './config'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  const loginGoogle = async () => {
    const data = await signInWithPopup(auth, new GoogleAuthProvider())
    // console.log(data)
    navigate(`/home/${data.user.email}`)
  }

  return (
    <div className="App">
        <button onClick={loginGoogle}>Login</button>
    </div>
  )
}

export default App
