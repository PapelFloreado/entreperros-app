import Image from "next/image";
import Link from "next/link";

import instagram from "@/assets/img/instagram.webp"
import spotify from "@/assets/img/spotify.webp"


const urlIg = "https://www.instagram.com/entreperros_/"
const urlSpotify = "https://open.spotify.com/artist/4gyKdT8HV9uGvCTbRFA04M?si=-talYqiRToaGVIWmYxyruw"


const Hero = () => {
  return (
    <div className="flex flex-col container bg-hero mx-auto justify-center">
          <div className="">
            {/* <Image style={{objectPosition:""}} src={banda} alt="imagen de la banda tocando"/> */}
          </div>
          <div className="">
            <h1 className=" container mx-auto text-8xl font-bold">ENTRE PERROS</h1>
            <p className="text-4xl">Rock del bueno</p>
            <div className="mt-24 flex gap-10">
              <div>
                <p className="text-2xl">Seguínos en las redes</p>
              </div>
              <div className="flex w-24 gap-4 justify-center">
                <Link href={urlIg}>
                    <Image className="rounded-full hover:scale-110 ease-in-out duration-500" src={instagram} alt=""></Image>
                </Link>
                <Link href={urlSpotify}>
                    <Image className="rounded-full hover:scale-110 ease-in-out duration-500" src={spotify} alt=""></Image>
                </Link>       
              </div>
            </div>
          </div>

      </div>
  )
}

export default Hero