import axios from 'axios'
import React,{useState} from 'react'
// import {useNavigate} from 'react-router-dom'

function Login() {

  const [login,setLogin]=useState({
    email:'',
    password:''
  })

  const handleChange=(e)=>{
    const{name,value} = e.target
    setLogin({
      ...login,
      [name]:value
    })
  }
  
  // const navigate = useNavigate()

  const handleLogin = ()=> {
    axios.post("http://localhost:8081/login",login)
    .then(res=>console.log(res))  
  }

  const handleSignUp=()=>{
    // navigate('/SignUp')
  }
  return (
    <div className='w-full md:px-10 py-10'>
      <div className='grid grid-cols-1 bg-white rounded-lg w-50'>
        <div className='py-2'>
          <h4 className='text-2xl font-sans text-black font-semibold text-left'>Login</h4>
        </div>
        <div className='w-50 py-4'>
        <input type='text' name='email' value={login.email}placeholder='useremail' className='border-solid border-2 border-black w-50 rounded-md' onChange={handleChange}></input>
        </div>
        <div className='w-50 py-4'>
        <input type='password' name='password' value={login.password}placeholder='userpassword' className='border-solid border-2 border-black w-50 rounded-md' onChange={handleChange}></input>
        </div>
        <div className='w-50 py-2'>
         <button type='button' className='bg-green-200 rounded-md w-52 font-sans font-semibold border-solid border-2 border-black' onClick={handleLogin}>Login</button>
        </div>
        <div className='w-50 py-2'>
         <button type='button' className='bg-orange-200 rounded-md w-52 font-sans font-semibold border-solid border-2 border-black' onClick={handleSignUp}>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default Login