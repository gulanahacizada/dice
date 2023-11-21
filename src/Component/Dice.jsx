import React from 'react'
import Dice1 from './image/dice11.PNG'
import Dice2 from './image/dice12.PNG'
import Dice3 from './image/dice13.PNG'
import Dice4 from './image/dice14.PNG'
import Dice5 from './image/dice15.PNG'
import Dice6 from './image/dice16.PNG'
import './Dice.css'
import { useState, useEffect } from 'react'
function Dice() {
    const imageURL=[
        Dice1,
        Dice2,
        Dice3,
        Dice4,
        Dice5,
        Dice6
    ]
    const image2URL=[
        Dice1,
        Dice2,
        Dice3,
        Dice4,
        Dice5,
        Dice6
    ]
    const[img,setImg]=useState(0); 
    const[img2,setImg2]=useState(0); 

    const  getRandomImage = ()=>{
    let random =  Math.floor(Math.random() * imageURL.length); 
            setImg(imageURL[random]); 
    }  
    const  getRandomImage2 = ()=>{
    let random2 =  Math.floor(Math.random() * image2URL.length); 
        setImg2(image2URL[random2]);
    }
    useEffect(() => {
        getRandomImage(); 
        getRandomImage2()
      }, []);
  return (
    <div class="big">
        <img class="first" onClick={getRandomImage} src={img} alt="dice1"/>
        <img onClick={getRandomImage2} src={img2} alt="dice2"/>
    </div>
  )
}

export default Dice