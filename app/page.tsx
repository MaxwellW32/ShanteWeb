"use client"


import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

import ReactPlayer from "react-player";


export default function Home() {

  const [name, setName] = useState({
    firstName: "Shante",
    lastName: "Wedderburn"
  })

  const [joke, setJoke] = useState("")

  async function getNewJoke(firstName: string, lastName: string){

    return ""


    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
    const jsonResponse = await response.json()

    handleJokeSet(jsonResponse.value.joke)
  }

  function handleJokeSet(joke: string){
    setJoke(joke)
  }

  function handleNameChange(option: string, value: string){

    if (option === "firstName"){
      setName(prevNameObj => {
        return {...prevNameObj, firstName: value}
      })
    }else if(option === "lastName"){
      setName(prevNameObj => {
        return {...prevNameObj, lastName: value}
      })
    }

  }

  useEffect(()=>{
    getNewJoke(name.firstName, name.lastName)
  },[])

  useEffect(()=>{

    setTimeout(()=>{
      console.log(`running now`)

      // while (true) {
      // }


    },5000)
  },[])

  return (
    <>

      <ReactPlayer url="/audio1.mp3" playing={false} />
      
      {joke}

      <div className={styles.jokeDiv}>
        <button onClick={()=>{getNewJoke(name.firstName, name.lastName)}}>
          See another joke
        </button>

        <p>Set names</p>

        <input type='text' id='firsNameInput' onChange={(e)=>{
          handleNameChange("firstName", e.target.value)
        }}/>

        <input type='text' id='lastNameInput' onChange={(e)=>{
          handleNameChange("lastName", e.target.value)
        }}/>


      </div>
    </>
  )
}
