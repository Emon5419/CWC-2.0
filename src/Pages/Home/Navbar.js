import React from 'react';
import './Navbar.css';
import logo from '../../Assets/images/Logo/cwc-logo.png';

const Navbar = () => {
   return (

      <div className='main-container'>
         <div className='navlogo'>
            {/* Logo and Name */}
            <img src={logo} alt="" />
            <p>CARRY WITH CARE 2.0</p>
         </div>

         <div className='contact-ds'>
            <p>✆ +8801883-277339</p>
            <button className="btn-fb">
               Connect with Facebook
            </button>

         </div>
      </div>

   );
};

export default Navbar;