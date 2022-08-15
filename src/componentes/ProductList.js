import React from "react";
import data from '../data.json';
import Card from './CardProduct'

const card = function(cardData,index){
  return ( 
    <Card 
    key = {cardData.nombre + index}
    nombre = {cardData.nombre}
    imagen = {cardData.imagen}
    descripcion = {cardData.descripcion}
    categoria = {cardData.categoria}
    cuotas = {cardData.cuotas}
    interes = {cardData.interes}
    descuento = {cardData.descuento}
    />
  )
}

function ProductList() {
  return(
    <div className="lista-productos">
      {Array.isArray(data) && data.map(card)}
    </div>
  )
}

export default ProductList;