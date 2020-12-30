import React from 'react';
import * as IoIcons from 'react-icons/io';

function Cv() { //after click on 'Home' in the menu this page will show
  return (
    <div className='backCv'>
      <h1 id="projectHead">YOU KNOW WHAT TO DO</h1>
      <div className='cv'>
          <a href='./Dor Cohen CV.pdf' download>
          <button className='cvDownBtn'>Download my CV <IoIcons.IoMdDownload/></button>
          </a>
      </div>
      <div className='imgCv'>
        <img src="../Pap.png" width="300px"/>
      </div>
    </div>
  )
}

export default Cv;