import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')
const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()


     try {
    const res  = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password
    })
    const data = res.data.token
    localStorage.setItem('token', data)
    navigate('/')
  } catch (error) {
    console.log('xatolik bor');

  }
  }
 


  return (
    <div>
      <div className="flex items-center  justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-md p-5 shadow w-96 h-auto space-y-4">
          <form onSubmit={handleSubmit}>
            <input
              value={username}
              type="text"
              required
              placeholder="Email or phone number"
              className="outline-none w-full border p-2 mb-3"
              onChange={e => setUsername(e.target.value)}
            />
            <input
              value={password}
              type="password"
              placeholder="Password"
              className="outline-none invalid:border-pink-500 w-full border p-2 rounded"
              onChange={e => setPassword(e.target.value)}

            />
            <br />
            <br />
            <button className="w-full rounded-md hover:bg-sky-700 bg-blue-600 text-white h-12">
              Log In
            </button>
            <br />
            <br />
            <a href="#" className="block text-sm text-blue-600 text-center">
              Forgot password?
            </a>
            <br />
            <br />
            <hr />
            <br />
            <div className="flex justify-center">
              <button type='submit' className="hover:bg-sky-700 rounded-md w-64 bg-green-600 h-10 text-white">
                Create new account
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center -mt-28">
        <p className="text-center text-sm">
          <b>Create a Page</b> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  )
}

export default Login
