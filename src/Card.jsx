import chickenPic from './assets/chicken.jpg'
import crocodilePic from './assets/crocodile.png'
import duckPic from './assets/duck.jpg'
import emuPic from './assets/emu.jpg'
import ovos from './assets/ovos.jpg'


function Card()
{
   return(
    <div className="row">
      
      <div className="Card">
      <a href="https://www.youtube.com/watch?v=oLW2tyhcA6w"><img src={chickenPic} className="chickenPic" ></img></a>  
      <h1 className="titulo"> EggsFlix </h1>
      <h2 className="tema"> Everything you wanted to know  <br></br> about edible eggs</h2>
      <img className="ovos" src={ovos}></img>
      </div>

      <div className="Card2">      
      <a href="https://www.youtube.com/watch?v=3Mh3Bw6bpRI"><img src={crocodilePic} className="crocodilePic" ></img></a>  
      </div>

      <div className="Card3">      
      <a href="https://www.youtube.com/watch?v=MPw5XHxJDuk"><img src={duckPic} className="duckPic" ></img></a>  
      </div>

      <div className="Card4">      
      <a href="https://www.youtube.com/watch?v=_-gcjgXVI1w"><img src={emuPic} className="emuPic" ></img></a>  
      </div>

    </div>
  ); 

}

export default Card