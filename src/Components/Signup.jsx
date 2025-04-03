import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignUp = () => {
    if (email && password !== '') {
      localStorage.setItem('user', JSON.stringify({name, email, password}))
      navigate('/Login')
    }
    
  }
    
  return (
    <>
    <center>
    <div>
        <h2>Sign Up Page</h2>
    </div>
    </center>
  
    <center>
    <div style={{marginTop:'2rem', padding:'6rem', width:'300px'}}>
    <h3>Enter your name</h3>
    <input type='text' placeholder='Enter your Name' value={name} onChange={(e)=> setName(e.target.value)}/>
    <h3>Enter your Email</h3>
    <input type='text' placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}
    style={{border:'none'}}/>
    <h3>Enter your password</h3>
    <input type='password' placeholder=' Enter your password' value={password} onChange={(e)=> setPassword(e.target.password)}
    style={{border:'none'}}/>

   <div style={{margin:'2rem'}}>
   <button type='submit' onClick={handleSignUp}
   style={{backgroundColor:'green', padding:'0.5rem 1.5rem', border:'none'}}>Sign Up</button>
   </div>
    </div>
    </center>  
    </>
  )
}

export default Signup

