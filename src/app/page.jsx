"use client"
import dynamic from "next/dynamic"
import TableTour from "./components/TableTour/TableTour"
import Modal from "./components/Modal/Modal"
import { useState } from "react"

const VideoFrame = dynamic(()=>import  ("./components/VideoFrame/VideoFrame"))
const Hero = dynamic(()=> import ("./components/Hero/Hero"))


export default function Home() {
  
  const [openModal, setOpenModal ] = useState(true)
    
  return (
    <>
      {
        openModal === true ? <Modal/> : <div></div>
      }
      <Hero/>
      <VideoFrame/>
      <TableTour/> 
      
    </>
  )
}
