import {useState, useEffect} from "react";
import { getTiempoEnMs } from "./Utilidades/UtilidadesContador";

const tiempoDefecto = {
  horas: "00",
  minutos: "00",
  segundos: "00"
}


const Contador = ({contadorstampMs})=> {
    const [tiempo, setTiempo] = useState(tiempoDefecto);

    useEffect(()=>{
      const intervaloId = setInterval(()=>{
        tiempoActual(contadorstampMs);
      },1000);
      return() => clearInterval(intervaloId)
    },[contadorstampMs]);


    function tiempoActual(cont){
      // console.log('Prueba: Se imprime cada segundo')
      setTiempo(getTiempoEnMs(cont))
    }



    return(
      <div>
        <div>
          <span>{tiempo.horas}</span>
          <span>{tiempo.minutos}</span>
          <span>{tiempo.segundos}</span>
        </div>
        <div>
          <span>HS</span>
          <span>min</span>
          <span>seg</span>
        </div>
      </div>
    )
}

export default Contador;