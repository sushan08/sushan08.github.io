import React from 'react';
import ProjectBox from './ProjectBox';
import KUsedStoreImage from '../images/KUsedStore.png';
import TechVerseImage from '../images/Techverse.png';
import MemoryMatchImage from '../images/MemoryMatch.png';
import AdventureImage from '../images/Adventure.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={AdventureImage} projectName="Adventure" />
        <ProjectBox projectPhoto={MemoryMatchImage} projectName="MemoryMatch" />
        <ProjectBox projectPhoto={TechVerseImage} projectName="TechVerse" />
        <ProjectBox projectPhoto={KUsedStoreImage} projectName="K-UsedStore" />
      </div>

    </div>
  )
}

export default Projects