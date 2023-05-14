"use client"
import styles from "./page.module.css"

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";


function openAnotherPage(){
  // return
  window.open('/up', "_blank")
}


export default function Home() {

  useEffect(()=>{
    startBody()
  },[])

  function startBody(){
    const body = document.querySelector("#bodyMain") as HTMLBodyElement 

    console.log(`s`)
    
    document.addEventListener('visibilitychange', ()=>{
      console.log(`added`)
      openAnotherPage()
    });

  }

  const [showing, showingSet] = useState(false)

  function handleButtonClick(){
    showingSet(true)

    setTimeout(()=>{
      openAnotherPage()
    },2000)

  }

  return (
    <div 
    onMouseLeave={openAnotherPage}
    className={styles.mainDiv}
    id="mainDiv" 
    >

      <p>Hey Shante, I made an AI list that takes the top researched topics on each of your subjects</p>
      <button onClick={handleButtonClick}>The top CXC answers</button>
    
      {showing && (
        <>

          hi there
          <div className={styles.noMouse}>
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=9HAySPFJ-Dg" 
            playing={true}
            loop={true}
            
            />
          </div>
        </>
      )}
      

    </div>
  )
}
