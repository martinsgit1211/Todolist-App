import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogIn = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
    if(storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('LoggedIn', 'true')
      navigate('/Dashboard')
    } else {
      alert ('Invalid data')
    }


  }
 


  return (
    <>
    <center>
    <div>
      <h2>Login Page</h2></div>
    <div style={{marginTop:'1.5rem', padding:'7rem'}}>
    <h3>Enter your email</h3>
    <input type='text' placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}
    style={{border:'none'}}/>
    <h3>Enter your password</h3>
    <input type='password' placeholder=' Enter your password' value={password} onChange={(e)=> setPassword(e.target.password)}
    style={{border:'none'}}/>
    
    <div style={{margin:'2rem'}}>
    <button onClick={handleLogIn}
    style={{backgroundColor:'orange', padding:'0.5rem, 1.5rem', border:'none'}}>Login</button>
    </div>
    </div>
    </center>
    </>
  )
}

export default Login

