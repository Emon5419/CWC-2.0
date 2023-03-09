import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
   return (
      <div className='hero'>

         <div className="left-h">

            <Header />
            <div className="the-best-ad">
               <div></div>
               <span>The best Delivery Service in the Chittagong</span>
            </div>

            <div className="hero-text">
               <div>
                  <span className='stroke-text'>Premium </span>
                  <span>Service</span>
               </div>
               <div>
                  <span>In Chittagong</span>
               </div>
               <div>
                  <span>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis repudiandae nisi perferendis.

                  </span>

               </div>
            </div>
         </div>

         <div className="right-h">
            right side
         </div>

      </div>
   )
}

export default Hero;