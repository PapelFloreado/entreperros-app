"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/img/entreperros_logo.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const Navigation = () => {

    const [nav, setNav ] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }

  return (
    <div className=" min-h-[70px]  py-6 sticky top-0">

        <nav className="flex container mx-auto ">
            <div className="basis-1/2">
                <Link href="/">
                    <Image className="w-1/4" src={logo} alt="entre perros logo"/>
                </Link>
            </div>
            <div className="basis-1/2 font-semibold   self-center">
                <ul className="hidden md:items-center md:flex basis-full justify-between">
                    <li>
                        <Link className="hover:border-b-2" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:border-b-2" href="/musica">Música</Link>
                    </li>
                    <li>
                        <Link className="hover:border-b-2" href="/galeria">Galería</Link>
                    </li>
                    <li>
                        <Link className="hover:border-b-2" href="/bio">Bío</Link>
                    </li>
                    <li>
                        <Link className="hover:border-b-2" href="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
            <div onClick={handleNav} className='items-center justify-end md:hidden flex'>
                {
                    nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />
                }
            <ul className={nav? 'fixed justify-center flex flex-col basis-full items-center pt-6 top-0 left-0 w-[100%] h-full border-r border-r-black bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <div className="flex justify-center iitem">
                    <AiOutlineClose size={20}/>
                </div>
                <li className="mt-10 mb-4">
                    <Link className="hover:border-b-2" href="/">Home</Link>
                </li>
                <li className="mb-4 ">
                    <Link className="hover:border-b-2" href="/musica">Música</Link>
                </li>
                <li className="mb-4 ">
                    <Link className="hover:border-b-2" href="/galeria">Galería</Link>
                </li>
                <li className="mb-4 ">
                    <Link className="hover:border-b-2" href="/bio">Bío</Link>
                </li>
                <li className="mb-4 ">
                    <Link className="hover:border-b-2" href="/contacto">Contacto</Link>
                </li>
                
            </ul>
            </div>
        </nav>
    </div>
    
  )
}

export default Navigation