import Link from 'next/link'
import Image from 'next/image'
import instagram from "@/assets/img/instagram.webp"
import spotify from "@/assets/img/spotify.webp"
import facebook from "@/assets/img/facebook.png"
import youtube from "@/assets/img/youtube.png"
const urlIg = "https://www.instagram.com/entreperros_/"
const urlSpotify = "https://open.spotify.com/artist/4gyKdT8HV9uGvCTbRFA04M?si=-talYqiRToaGVIWmYxyruw"
const urlFacebook = "https://www.facebook.com/EntrePerrosRock"
const urlYoutube = "https://www.youtube.com/@EntrePerros"

const Footer = () => {
    
  return (
    <>
        <div className='min-h-[70px] mt-20 flex flex-col justify-center mx-auto bg-footer'>
            <div className='md:w-1/6 w-1/3 flex justify-center mx-auto my-6  gap-4 md:gap-6'>
                  <Link className='' href={urlIg}>
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
            <Link className=" text-center" href="/contacto">Contacto</Link>
            <h3 className='text-center py-4'>Realizado por <span><Link href="https://www.papelfloreado.ar" target='_blank'>papelfloreado.ar</Link></span></h3>
        </div>
    </>
  )
}

export default Footer