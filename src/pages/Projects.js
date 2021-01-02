import React from 'react';

function Projects() { //after click on 'Products' in the menu this page will show
  return (
    <div>
      <h1 id="projectHead">MY PROJECTS<br /><h6>click on project to see the source code</h6></h1>
      <div className='projects'>
      
      <div class="container2">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dor-co/Software-Engineering-Project">       
          <img src="./Sw.png" alt="sw img" class="image"/>
          <div class="overlay">
            <h3 class="text">Money Saver</h3>
          </div>
        </a>
      </div>

        <div class="container1">
          <a href="https://github.com/dor-co/Logo-Quiz-Game">
            <img src="./Bmw.png" alt="bmw img" class="image"/>
            <div class="overlay">
              <h3 class="text">Logo Quiz Game</h3>
            </div>
          </a>
        </div>

        <div class="container1">
          <a href="https://github.com/dor-co/Burger-Order-App"> 
            <img src="./Bur.jpg" alt="burger img" class="image"/>
            <div class="overlay">
              <h3 class="text">Burger Order App</h3>
            </div>
          </a>
        </div>

        <div class="container2">
          <a href="https://github.com/dor-co/Delivery-Sport-Products"> 
            <img src="./Tot.png" alt="football img" class="image"/>
            <div class="overlay">
              <h3 class="text">Delivery Sports Products</h3>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Projects;