import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import dm from '../../Assets/images/3056534.png';
import hero from '../../Assets/images/hero.png';


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
            {/* figure */}
            <div className="figures">

               {/* 1 */}
               <div>
                  <span>+50</span>
                  <span>Permanent Client</span>
               </div>

               {/* 2 */}
               <div>
                  <span>+50k</span>
                  <span>Successful Delivery</span>
               </div>

               {/* 3 */}
               <div>
                  <span>+10</span>
                  <span>Experience Delivery Man</span>
               </div>

            </div>

            {/* Hero Button */}

            <div className="hero-buttons">

               <button className="btn">Get Started</button>

               <button className="btn">Learn More</button>

            </div>



         </div>

         <div className="right-h">
            <div className="btn">Join Now</div>



            <div className="hart-rate">
               <img src={dm} alt="" />
               <span>Today</span>
               <span>50+ Counting</span>



            </div>
            <img className="hero-image" src={hero} alt="" />
         </div>

      </div>
   )
}

export default Hero;