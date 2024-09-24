 import React from 'react'
 import './Project.css'
 export const Project = () => {
   return (
     <div>
         <h2>Projects</h2>
        <div class="project-container">
          <div class="project-card">
            <img src="project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Short description of the project.</p>
          </div>
          <div class="project-card">
            <img src="project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Short description of the project.</p>
          </div>
        </div>
     </div>
   )
 }
 