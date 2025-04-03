import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const name = storedUser ? storedUser.name : 'User'
  const navigate = useNavigate()

const handleLogOut = () => {
  localStorage.removeItem('Loggedin')
  navigate('/Login')
}

  return (
    <>
     <div>
     <h1>Welcome {name} to this page</h1>
     <button onClick={handleLogOut}>Log Out</button>
     </div> 
    </>
  )
}

export default Dashboard
