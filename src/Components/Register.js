import React from 'react'
import Image3 from '../Components/images3.jpg'
function Register() {
  return (
    <div className= 'container'>
         <div className='Reg'>
      <form>
        <img src={Image3} />
      <input type='text' placeholder='Write username here'></input>
        <input type='email' placeholder='Write email here'></input>
        <input type='password' placeholder='Write password here'></input>
        <button>Register</button>
      </form>
         </div>
    </div>
  )
}

export default Register