import React, { useState } from 'react'

const Fun = () => {

let mobiles = [{
    id:"001",
    name :"oneplus11",
    price : 56999,
    isPurchased: true},
    {
    id:"002",
    name : "Vivi Y100",
    price : 24999,
    isPurchased: false},
    {
    id:"003",
    name : "Redmi 10",
    price : 56999,
    isPurchased : true},
    {
    id:"004",
    name : "iphone 13",
    price : 62990,
    isPurchased : false},
    {
    id:"005",
    name : "Nokia",
    price : 12000,
    isPurchased : true},
    {
    id:"006",
    name : "Poco M4",
    price : 13999,
    isPurchased : true}]


    const [values , myGreet] = useState(mobiles)
    
    let ascending = [...mobiles].sort((a,b) => {
        let firstObj = a.name.toLowerCase();
        let secondObj = b.name.toLowerCase();
        
        if(firstObj < secondObj){
            return -1;
        }else if(firstObj > secondObj){
            return 1;
        }
    })
    let descending = [...ascending].reverse();


    let numAsc = [...mobiles].sort((a,b) => {
         return a.price - b.price;
    })
    let numDec = [...numAsc].reverse();


    let filter = [...mobiles].filter(e => {
      if(e.isPurchased == true){
        return e.name;
      }
    })
    
  
  return (
    <div>
      <button onClick={() => myGreet(ascending)}>Ascletter</button>
      <button onClick={() => myGreet(descending)}>Desletter</button>
      <button onClick={() => myGreet(numAsc)}>ltohprice</button>
      <button onClick={() => myGreet(numDec)}>htolprice</button>
      <button onClick={() => myGreet(filter)}>purchase filter</button>
      {values.map((e,i) => <h2 key={i}>{e.name} : {e.price}</h2>)}
    </div>
  )
}

export default Fun