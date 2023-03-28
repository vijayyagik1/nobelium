import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from '../Components/vijay1.png'
import './LogIn.css'
function LogIn() {
    return (
        <div className='container'>
            <div className='Img'>
                <img src={Image1} />
            </div>
            <div className=' Input'>
                <form>
                <input type='email' placeholder='enter username'></input>
                <input type='password' placeholder='enter password'></input>
                <button>Log In</button>
                </form>
            </div>
          
            <div className='Register'>
                <h5>Don't have an account</h5>
                 <Link to='/register'>
          <button>Register here</button>
        </Link>
            </div>
        </div>
    )
}

export default LogIn



