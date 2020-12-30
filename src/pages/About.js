import React, { Component } from 'react';

class About extends Component{ //after click on 'Home' in the menu this page will show
constructor(props) {
  super(props)
  this.handleClick = this.handleClick.bind(this);
  this.state = { text: ""};
}

handleClick = () => {
  var i = 0;
  var txt = 'AND THIS IS MY WEBSITE...';
  var speed = 110;
  let typeWriter = () => {
      if (i <= txt.length) {
          this.setState({ text: txt.substring(0, i++) });
          setTimeout(typeWriter, speed);
      }
  };
  typeWriter();
}

render(){
  return (
      <div className='about' onLoad={this.handleClick}>
        <div>
          <h4 class="textAbout">My name is Dor Cohen,<br />junior Full-Stack Developer!</h4>
          <p id="demo">{this.state.text}</p>
        </div>
        <img src="./Nn.jpg" alt="my img" class="my_img"/>
      </div>
      
    );
  }
}

export default About;