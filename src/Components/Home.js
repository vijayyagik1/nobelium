
// import React from 'react'
// import Navbar from './Navbar'
// import './Home.css'
// function Home() {
//   return (
//     <div className='container'>
//     <div className='Main'>
//        <Navbar/>
//        <h1>This Is My First Routing</h1>
//     </div>
//     <div className='Home'>
      
//     </div>
//     </div>
//   )
// }

// export default Home



import React from 'react';
import Navbar from './Navbar';
import './Home.css';

function Home() {
  return (
    <div className='container'>
      <Navbar />
      <div className='main'>
        <h1>Welcome to My First Routing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          risus vitae sapien tincidunt blandit. Nullam in sapien vel ipsum
          porta luctus. Donec pharetra, est vitae congue molestie, leo quam
          consequat augue, in semper nisl elit sit amet elit. Proin sit amet
          velit eu turpis accumsan aliquet at quis nisi.
        </p>
      </div>
    </div>
  );
}

export default Home;