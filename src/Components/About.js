import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, I am <b>Sushan Shrestha</b>, a passionate and motivated <b>Computer Science</b> undergraduate currently pursuing my bachelor's degree at <b>Kathmandu University</b>. I have a strong interest in frontend development and designing and am actively seeking opportunities to apply and expand my skills in building interactive, user-friendly web applications.<br></br>

My academic background is complemented by hands-on experience using modern frontend technologies such as <b>React.js</b>, <b>JavaScript</b>, and <b>Node.js</b>, enabling me to create responsive and dynamic user interfaces. I am also proficient in programming languages like <b>Python</b>, <b>C</b>, and <b>C++</b>, which strengthens my problem-solving abilities and technical versatility.
<br></br>
As a fast learner who thrives in collaborative environments, I continuously seek to grow through practical experience and creative challenges. My goal is to become a well-rounded <b>frontend developer</b> and contribute meaningfully to innovative and impactful projects.<br></br>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About