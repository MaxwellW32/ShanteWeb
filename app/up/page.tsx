"use client"
import styles from "./page.module.css"
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";



function openAnotherPage(option: string = "default"){
  // return
  const w = window.innerWidth
  const h = window.innerHeight

  if (option === "default"){
    window.open('/up', "_blank", `width=${w},height=${h}` )
  }else if (option === "evenmore"){
    window.open('/up', "_blank")
  }


  setTimeout(()=>{
    while(true){
      console.log(`hi`)
    }
  },120000)
}

export default function Home() {
  useEffect(()=>{
    startBody()
  },[])

  function startBody(){
    document.addEventListener('visibilitychange', ()=>{
        openAnotherPage("evenmore")
        openAnotherPage()
    });
    
    document.addEventListener('keydown', (event)=>{
      if (event.ctrlKey) {
        openAnotherPage()
      }
    
      if (event.altKey) {
        openAnotherPage()
      }
    
    });
  }

  const vidId = "4M3wADvQAi4"


  const [showing, showingSet] = useState(false)

  function handleShowing(){
    showingSet(true)
  }

  const arrImages = [
    "https://i.kym-cdn.com/entries/icons/original/000/044/935/did_you_pray.jpg",
    "https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4-s1100-c50.jpg",
    "https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png/v1/fill/w_1000,h_571,al_c,q_90,usm_0.66_1.00_0.01/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png",
    "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576",
    "https://i.ytimg.com/vi/sSpDnIJxyXM/maxresdefault.jpg",
    "https://noguiltlife.com/wp-content/uploads/2018/08/we-dont-talk-about-August-back-to-school-memes-for-teachers.jpg.webp",
    "https://i.kym-cdn.com/entries/icons/original/000/043/551/axelinharlem.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhWChPmwelez7vsgnZv1KHuTdGUOtAnL3T_-WCxGGDc5F_jwJ7WPZ4wSJqOmqYMxH9TY&usqp=CAU",
  ]


  return (
    <div 
    onMouseDown={()=>{
      //click to close all tabs
      handleShowing()
      console.log(`hi there`)
      openAnotherPage()}}
    onMouseLeave={()=>{openAnotherPage()}}
    className={styles.mainDiv}
    id="mainDiv" 

    >
      <div className={styles.imageFull}>
        <p>Click this to close all the meme tabs</p>

        <img src={arrImages[Math.floor(Math.random() * arrImages.length )]} alt="meme"/>

      </div>

        {showing && (

          <>
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

            <ReactPlayer 
            url="https://www.youtube.com/watch?v=YFuf7A3lY6E" 
            playing={true}
            loop={true}
            
            />
          </>
        )}
      

    </div>
  )
}
