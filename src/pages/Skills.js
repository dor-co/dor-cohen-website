import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';

function Skills(){
    return(
      <div className='backCv'>
        <h1 id="projectHead">MY SKILLS<br /><br /> <h6>Programing Languages</h6></h1> 
        <div className="skills">
				  <div className='c--anim-btn'>
            <span class="c-anim-btn">
            <FaIcons.FaReact />
            </span>
            <span>
              ReactJs
            </span>
            </div>

            <div className='c--anim-btn'>
            <span class="c-anim-btn">
            <FaIcons.FaJava />
            </span>
            <span>
              Java
            </span>
            </div>

            <div className='c--anim-btn'>
            <span class="c-anim-btn">
            <SiIcons.SiCplusplus />
            </span>
            <span>
              C++
            </span>
            </div>

            <div className='c--anim-btn'>
            <span class="c-anim-btn">
            <AiIcons.AiFillAndroid />
            </span>
            <span>
              Android
            </span>
            </div>

            <div className='c--anim-btn'>
            <span class="c-anim-btn">
            <FaIcons.FaHtml5 />
            </span>
            <span>
              Html
            </span>
            </div>

            <div className='c--anim-btn'>
            <span class="c-anim-btn">
            <SiIcons.SiCss3 />
            </span>
            <span>
              Css
            </span>
            </div>

            <div className='c--anim-btn'>
            <span class="c-anim-btn">
            <DiIcons.DiJavascript />
            </span>
            <span>
              JavaScript
            </span>
            </div> 
          </div>


          <h1 id="projectHead"><h6>Work Environments</h6></h1> 
          <div className="skills">
				  <div className='c----anim-btn'>
            <span class="c---anim-btn">
            <SiIcons.SiVisualstudiocode />
            </span>
            <span>
              VS Code
            </span>
            </div>

            <div className='c----anim-btn'>
            <span class="c---anim-btn">
            <SiIcons.SiVisualstudio />
            </span>
            <span>
              Visual Studio
            </span>
            </div>

            <div className='c----anim-btn'>
            <span class="c---anim-btn">
            <SiIcons.SiAndroidstudio />
            </span>
            <span>
              Android Studio
            </span>
            </div>

            <div className='c----anim-btn'>
            <span class="c---anim-btn">
            <SiIcons.SiIntellijidea />
            </span>
            <span>
              IntelliJ
            </span>
            </div>
          </div>
        </div>
    )
  }

export default Skills;