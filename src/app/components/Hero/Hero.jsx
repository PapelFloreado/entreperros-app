import Image from "next/image";
import Link from "next/link";

import instagram from "@/assets/img/instagram.webp"
import spotify from "@/assets/img/spotify.webp"
import facebook from "@/assets/img/facebook.png"
import youtube from "@/assets/img/youtube.png"

import "./Hero.css"

const urlIg = "https://www.instagram.com/entreperros_/"
const urlSpotify = "https://open.spotify.com/artist/4gyKdT8HV9uGvCTbRFA04M?si=-talYqiRToaGVIWmYxyruw"
const urlFacebook = "https://www.facebook.com/EntrePerrosRock"
const urlYoutube = "https://www.youtube.com/@EntrePerros"


const Hero = () => {
  return (
    <>
    
      <div className="bg">
        <div className="flex flex-col container bg-hero mx-auto justify-center   min-h-[400px]">
            <div className="  mb-10">
              <h1 className=" container mx-auto text-6xl text-center md:text-start md:text-8xl font-bold">ENTRE PERROS</h1>
              <p className="text-2xl md:text-start text-center md:text-4xl">Rock del bueno</p>
              <div className="mt-16 md:flex-row flex flex-col justify-center md:justify-start gap-10">
                <div>
                  <p className="text-center md:text-start text-2xl">Seguínos en las redes</p>
                </div>
                <div className="md:flex-row justify-center mx-auto md:mx-4 w-1/3 items-center flex md:w-40 gap-4 md:justify-center">
                  <Link href={urlIg}>
                      <Image className="rounded-full hover:scale-110 ease-in-out duration-500" src={instagram} alt="instagram icon"></Image>
                  </Link>
                  <Link href={urlSpotify}>
                      <Image className="rounded-full hover:scale-110 ease-in-out duration-500" src={spotify} alt="spotify icon"></Image>
                  </Link>       
                  <Link href={urlFacebook}>
                      <Image className="rounded-full hover:scale-110 ease-in-out duration-500" src={facebook} alt="facebook icon"></Image>
                  </Link>       
                  <Link href={urlYoutube}>
                      <Image className="rounded-full hover:scale-110 ease-in-out duration-500" src={youtube} alt="youtube icon"></Image>
                  </Link>       
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Hero