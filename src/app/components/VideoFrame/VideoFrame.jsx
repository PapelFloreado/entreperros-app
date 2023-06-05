import Image from 'next/image'
import youtube from "@/assets/img/youtube.png"
import Link from 'next/link'

const VideoFrame = () => {

  return (
    <>
        <div className='container mx-auto mt-20'>
            <div className='md:flex'>
                <div className='place-self-center flex flex-col basis-1/2 mx-10 text-center'>
                    <h2 className='text-4xl place-self-center'>Mira nuestro último lanzamiento</h2>
                    <p className='mt-6'>No te pierdas todas las novedades.</p>
                    <p className='mt-6'>Suscribite</p>
                    <Link className='hover:scale-110 ease-in-out duration-500 w-1/4 place-self-center flex mt-6 justify-center' href="https://www.youtube.com/@EntrePerros" target='_blank'>
                        <Image className='md:w-1/4 ' src={youtube} alt="youtube icon"/>
                    </Link>
                </div>
                <iframe className='rounded-2xl mt-10 flex justify-center basis-1/2  w-full md:mt-0 '  height="315" src="https://www.youtube.com/embed/Bnnghs4_deU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </>
  ) 
}

export default VideoFrame