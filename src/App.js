import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const data = new Date
  const [hora, setHora] = useState(data.getHours())
  const [minuto, setMinuto] = useState(data.getMinutes())
  const [segundos, setSegundos] = useState(data.getSeconds())

  useEffect(()=>{
    const interval = setInterval(()=>{
      setSegundos(segundos + 1)
      if(segundos == 59){
        setSegundos(0)
        setMinuto(minuto + 1)
        if(minuto == 59){
          setMinuto(0)
          setHora(hora + 1)
          if(hora == 24){
            setHora(0)
          }
        }
      }
    },1000);
    return ()=> clearInterval(interval);
  })

  return (
    <div className="App">
      <div className='circular'>
        <p>{hora}:{minuto}:{segundos}</p>
      </div>
    </div>
  );
}

export default App;
