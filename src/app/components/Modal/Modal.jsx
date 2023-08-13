"use client"
import Image from "next/image"
import flyer from "@/assets/img/tangente-flyer.png"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai";


const Modal = () => {

    const [hidden, setHidden] = useState(false)

    const handleModal = ()=>{
        setHidden(!hidden)
    }

    return (
    <div className={hidden? "hidden backdrop-blur-none duration-700 transition-all ease-in-out" : "flex container w-full mx-auto justify-center fixed backdrop-blur top-[150px] xs:top-[250px] md:top-[150px] lg:top-[150px]  xl:top-0 z-[1055]"}>
        
        <div className={hidden? 'hidden backdrop-blur-none ' : 'flex mx-auto  justify-center '}>
            <button onClick={handleModal}>
                <AiOutlineClose/>
            </button>
            <Image className="w-2/3 md:w-2/3" src={flyer} alt="foto del flyer de La Tagente"/>
        </div>
    </div>   
  )
}

export default Modal