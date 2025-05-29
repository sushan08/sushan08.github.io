import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    AdventureDesc : "This tourism website offers a comprehensive guide for travelers looking to explore destinations around the world. This project is completely made using HTML, CSS and JavaScript. It is a static website that provides information about various tourist attractions, travel tips, and destination highlights.",
    AdventureGithub : "https://github.com/sushan08/Tourism-website",
    AdventureWebsite : "tourism-website-seven-pi.vercel.app",

    MemoryMatchDesc : "Memory Match is a fun puzzle game where players flip cards to find matching pairs. It boosts memory, focus, and concentration.",
    MemoryMatchGithub : "https://github.com/sushan08/Memory-Matching",
    MemoryMatchWebsite : "memory-matching-green.vercel.app/",

    TechVerseDesc:"A tech blog app that allows users to read, write, and share articles on the latest technology trends, programming tips, and industry news. This project is a collab project with my college friends developed using mern stack.",
    TechVerseGithub:"https://github.com/sushan08/TechVerse-final",
    TechVerseWebsite:"tech-verse-final.vercel.app",
    
    KUsedStoreDesc:"An e-commerce website dedicated to selling second-hand equipment for college students, offering affordable textbooks, electronics, furniture, and study essentials to help save money and reduce waste.",
    KUsedStoreGithub:"https://github.com/sushan08/K-Used-Store",
    KUsedStoreWebsite:"",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox