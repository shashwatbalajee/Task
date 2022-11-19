import React,{useState} from 'react'
import axios from 'axios'
function SignUp() {
  const [user,setUser] = useState({
    name:'',
    email:'',
    password:'',
    cnfpassword:''
  })

  const handleChange = (e) =>{
    const{name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleClick =() => {
    const {name,email,password,cnfpassword} = user
    if(name && email && password && (password===cnfpassword)){
      alert('SignUp succesfull from reactjs')
       axios.post("http://localhost:8081/register",user)
      .then(res=>console.log(res))
    } else{
      alert('invalid input')
    }
    
  }
  return (
    
    <div className='w-full md:px-10 py-10'>
      {console.log("User",user)}
      <div className='grid grid-cols-1 bg-white rounded-lg w-50'>
        <div className='py-2'>
          <h4 className='text-2xl font-sans text-black font-semibold text-left'>SignUp</h4>
        </div>
        <div className='w-50 py-4'>
          <input type='text' name='name' value={user.name} placeholder='username' className='border-solid border-2 border-black rounded-md w-58' onChange={handleChange}></input>
        </div>
        <div className='w-50 py-4'>
          <input type='email' name='email' value={user.email} placeholder='useremail' className='border-solid border-2 border-black rounded-md w-58' onChange={handleChange}></input>
        </div>
        <div className='w-50 py-4'>
          <input type='password' name='password' value={user.password} placeholder='userpassword' className='border-solid border-2 border-black rounded-md w-58' onChange={handleChange}></input>
        </div>
        <div className='w-50 py-4'>
          <input type='password' name='cnfpassword' value={user.cnfpassword} placeholder='confirmpassword' className='border-solid border-2 border-black rounded-md w-58' onChange={handleChange}></input>
        </div>
        
        <div className='w-50 py-2'>
          <button type='button' className='bg-orange-200 rounded-md w-52 font-sans font-semibold border-solid border-2 border-black' onClick={handleClick}>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp