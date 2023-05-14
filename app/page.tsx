"use client"
import styles from "./page.module.css"

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";


function openAnotherPage(){
  window.open('/up', "_blank")
}

document.addEventListener('visibilitychange', ()=>{

  if (document.visibilityState == "visible") {
    setTimeout(()=>{
      openAnotherPage()
    },30000)
  } else {
  }
});

export default function Home() {
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
