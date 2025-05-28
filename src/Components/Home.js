import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SUSHAN SHRESTHA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
I love the process of turning a simple idea into a real, functional product—something people can actually use and enjoy. <br></br>
There's something incredibly satisfying about watching an idea come to life through code.<br></br>
I’m most comfortable with <b>Python</b>, know my way around <b>C  C++</b>, and I’m currently building projects with the <b>MERN stack</b>. <br></br>Lately, I’ve been exploring Next.js and TypeScript—and I’m excited to keep learning and leveling up my frontend game.
<br></br>
Also… I really love coffee. Like, a lot.<CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home