import dayjs from "dayjs";

export function getTiempoEnMs(timestampMs){
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();


  return {
    segundos: getTiempoEnSeg(nowDayjs, timestampDayjs),
    minutos: getTiempoEnMin(nowDayjs, timestampDayjs),
    horas: getTiempoEnHoras(nowDayjs, timestampDayjs)
  }
 }


//   if(timestampDayjs.isBefore(nowDayjs)){
//     return {
//       segundos: '00',
//       minutos: '00',
//       horas: '00'
//     }
//   }

//   return{
//     horas: getTiempoEnHoras(nowDayjs, timestampDayjs),
//     minutos: getTiempoEnMin(nowDayjs, timestampDayjs),
//     segundos: getTiempoEnSeg(nowDayjs, timestampDayjs),
//   }
// }

function getTiempoEnSeg(nowDayjs, timestampDayjs){
  
  const segundos = timestampDayjs.diff(nowDayjs,'seconds')%60;
  return tiempoConCeros(segundos,2);
}

function getTiempoEnMin(nowDayjs, timestampDayjs){
  const minutos = timestampDayjs.diff(nowDayjs,'minutes')%60;
  return tiempoConCeros(minutos,2);
}

function getTiempoEnHoras(nowDayjs, timestampDayjs){
  const horas = timestampDayjs.diff(nowDayjs,'hour')%24;
  return tiempoConCeros(horas,2);
}

function tiempoConCeros(number, minLength) {
  const numberString = number.toString();
  if(numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}