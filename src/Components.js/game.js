import React from 'react';
import '../Styles/game.css';
import build from './resource/tallbuilding.png'
import hero from './resource/herobg.png'


class Dino extends React.Component {



  constructor() {
    super();
    this.state = { score: 0 };
  }


  count = true


  jump = () => {
   
    if(!this.count){return}     
      this.count=false; 
      const hero = document.getElementById("hero");
      let id = null;
      let did = null;
      clearInterval(id);
      clearInterval(did);
      var pos=0;
      id = setInterval(frame, 2);

      function frame() {
      
        if (pos <= -200) {
          clearInterval(id);
          did = setInterval(dframe, 2);
        } else {
          pos = pos - 1.5;
          hero.style.top = pos + "px";
        }
  
        function dframe() {

          if (pos >= 0) {
            clearInterval(did);
            this.count = true;
            console.log(this.count);           
          } else {          
            pos = pos + 1.5;
            hero.style.top = pos + "px";
          }
        }
       
      }
      console.log("pos"+pos)
      console.log(this.state.score);
     
   setTimeout(() => {
    this.count=true;
    this.setState({score:this.state.score+10})
    console.log(this.count);
   }, 1000);     
  }

   isCollide=(a, b)=> {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height-25) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height-25)) ||
        ((aRect.left + aRect.width-50) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

  isAlive = setInterval(() => {
      var hero = document.getElementById("hero");
      var obstacle = document.getElementById("obstacle")
      if(this.isCollide(hero,obstacle)){
          
             alert("Game Over");   
             window.location.reload();      
      }
  }, 20);


  render() {
    return (
      <div>
        {/* <button onClick={()=>alert("stop")}>stop</button> */}
        
        <div className='console' onClick={() => this.jump(this.count)}>
        <h5 style={{ color: "white", textAlign: "right" }}><b>Score : {this.state.score} </b></h5>
          <div className='playarea' >
            <div className='obstacle' id='obstacle'>
              <img src={build} height="70" width="40"></img>

            </div>
            <div className='hero' id="hero">

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Dino



