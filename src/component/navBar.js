import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


const Navbar = ()=>{

        const [closeclass,setCloseclass]=useState(null);

    
    const handelClick=()=>{
        if(closeclass){
            setCloseclass(false);
            return;
        }
        setCloseclass(true);
    }
    console.log(closeclass)

    return (
        <nav  className={closeclass ? "navbar active":"navbar"}>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL7bxD5pKlJDh2WZtL-L0BD6WclizwcMmCw&usqp=CAU" alt="" />
            <ul className='ul-tag'>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>

            </div>
            
                

          
            <div className='bar-div'>
                
                <MenuIcon onClick={handelClick} className='menubar'/>
                <CloseIcon className='closebar'/>

                
            </div>
            
            <div className='btn-div'>
                <button className='login-btn'>Login</button>
                <button>Sign Up</button>

            </div>
           
        </nav>
    )


}

export {Navbar}