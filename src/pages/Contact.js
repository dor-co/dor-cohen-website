import React from 'react';
import * as AiIcons from 'react-icons/ai';

function Contact() { //after click on 'Reports' in the menu this page will show
  return (
    <div className='conectBackground'>
      <h1 id="projectHead">STAY IN TOUCH WITH ME</h1>
      <div className='contact'>
        <div class="textConect">
          <p className='git'><AiIcons.AiFillMail /><br /><text>dor713cohen@gmail.com</text></p><br />
          <p className='git'><AiIcons.AiFillPhone /><br /><text>054-5911843</text></p><br />
          <p className='git'><AiIcons.AiFillLinkedin /><br /><text>linkedin.com/in/dor-cohen-5b0192195/</text></p><br />
          <p className='git'><AiIcons.AiFillGithub /><br /><text>github.com/dor-co</text></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;