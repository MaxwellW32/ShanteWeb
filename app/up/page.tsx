"use client"
import styles from "./page.module.css"

import { useEffect, useRef, useState } from "react";





function openAnotherPage(option: string = "default"){

  // return

  const w = window.innerWidth
  const h = window.innerHeight

  if (option === "default"){
    window.open('/up', "_blank", `width=${w},height=${h}` )
  }else if (option === "evenmore"){
    window.open('/up', "_blank")
  }

}

export default function Home() {

  useEffect(()=>{
    startBody()
  },[])

  function startBody(){
    const body = document.querySelector("#bodyMain") as HTMLBodyElement 
  
    document.addEventListener('visibilitychange', ()=>{

      console.log(`working`)
    
        openAnotherPage("evenmore")
    
        openAnotherPage()
    });
    
    body.addEventListener('keydown', (event)=>{
      if (event.ctrlKey) {
        openAnotherPage()
      }
    
      if (event.altKey) {
        openAnotherPage()
      }
    
    });
  }


  const vidId = "4M3wADvQAi4"


  return (
    <div 
    onMouseLeave={()=>{openAnotherPage()}}
    className={styles.mainDiv}
    id="mainDiv" 
    >

        <iframe
              id="mainVidIframe"
              className={styles.mainVidIframe}
              style={{
                width: "100%",
                aspectRatio: "16/9",
                position: "absolute",
                top: "-1rem",
                left: "0",
              }}
              src={`https://www.youtube.com/embed/${vidId}?autoplay=1&loop=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
        ></iframe>
      

    </div>
  )
}
