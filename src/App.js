import { useState } from 'react';
import { data } from "./data";
import './App.css';

function App() {

  const [cottage, setCottage] = useState(0);
  const { id, name, price, email, image } = data[cottage];
  
  const previousCottage = () => {
    setCottage((cottage => {
      cottage --;
      if(cottage < 0) {
        cottage = data.length -1;
      }
      return cottage;
    }))
  }

  const nextCottage = () => {
    setCottage((cottage => {
      cottage ++;
      if(cottage > data.length -1) {
        cottage = 0;
      }
      return cottage;
    }))
  }

  return (
    <div className='color'>

    <div className="App ppa">
      <img src={image} width={500} height={350} alt='picture'/>
    </div>
    <div className="App">
      <h1>{id} - {name}</h1>
    </div>
    <div className="App">
      <h2>{price}</h2>
    </div>
    <div className="App">
      <h2>{email}</h2>
    </div>
    <div className='App'>
      <button onClick={previousCottage}><img src='https://cdn.icon-icons.com/icons2/4091/PNG/96/arrow_left_icon_259686.png'/></button>
      <button onClick={nextCottage}><img src='https://cdn.icon-icons.com/icons2/4091/PNG/96/arrow_right_icon_259656.png'/></button>
    </div>

    </div>
  );
}

export default App;
