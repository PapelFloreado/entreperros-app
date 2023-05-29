import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/img/entreperros_logo.png"

const Navigation = () => {

  return (
    <div className=" min-h-[70px]  py-6 sticky top-0">

        <nav className="flex container mx-auto ">
            <div className="basis-1/2">
                <Link href="/">
                    <Image className="w-1/4" src={logo} alt="entre perros logo"/>
                </Link>
            </div>
            <div className="basis-1/2 font-semibold  self-center">
                <ul className="flex mx-auto justify-between items-center">
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
        </nav>
    </div>
    
  )
}

export default Navigation