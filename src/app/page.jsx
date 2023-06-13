
import dynamic from "next/dynamic"
import TableTour from "./components/TableTour/TableTour"

const VideoFrame = dynamic(()=>import  ("./components/VideoFrame/VideoFrame"))
const Hero = dynamic(()=> import ("./components/Hero/Hero"))
export default function Home() {

    
  return (
    <>
      <Hero/>
      <VideoFrame/>
      <TableTour/> 
    </>
  )
}
