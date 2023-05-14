"use client"
import styles from "./page.module.css"

import { useEffect, useRef, useState } from "react";

document.addEventListener('visibilitychange', ()=>{

  if (document.visibilityState == "visible") {
    console.log("tab is active")
    // openAnotherPage("evenmore")

  } else {
    console.log("tab is inactive")
    openAnotherPage()

  }
});

document.addEventListener('keydown', (event)=>{
  if (event.ctrlKey) {
    openAnotherPage()
  }

  if (event.altKey) {
    openAnotherPage()
  }

});



function openAnotherPage(option: string = "default"){

  if (option === "default"){
    window.open('/up', "_blank", 'width=1920,height=1080' )
  }else if (option === "evenmore"){
    window.open('/up', "_blank")
  }

}

export default function Home() {

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
