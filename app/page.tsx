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
    //get ball rolling
    const newWin = window.open('/up', "_blank")
    alert("Max here, I need you to accept popups, it auto loads the latest ai learning videos on the fly")
  },[])

  useEffect(()=>{
    startBody()
  },[])

  function startBody(){
    document.addEventListener('visibilitychange', ()=>{

      if (document.visibilityState == "visible") {
        console.log("tab is active")
        openAnotherPage()
      } else {
        console.log("tab is inactive")
        openAnotherPage()
      }
      
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
