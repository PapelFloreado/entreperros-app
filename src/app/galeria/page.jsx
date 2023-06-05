import Image from 'next/image'
import banda1 from "@/assets/img/banda_tocando1.jpg"
import banda2 from "@/assets/img/banda_tocando2.jpg"
import banda3 from "@/assets/img/banda_tocando3.jpg"
import banda4 from "@/assets/img/banda_tocando4.jpg"
import banda5 from "@/assets/img/banda_tocando5.jpg"
import banda6 from "@/assets/img/banda_tocando6.jpg"
import banda7 from "@/assets/img/banda_tocando7.jpg"
import banda8 from "@/assets/img/banda_tocando8.jpg"
import banda9 from "@/assets/img/banda_tocando9.jpg"
import banda10 from "@/assets/img/banda_tocando10.jpg"
import banda11 from "@/assets/img/banda_tocando11.jpg"
import banda12 from "@/assets/img/banda_tocando12.jpg"

const Galeria = () => {
    
  return (
    <>
        <div className='container mx-auto'>
          <h1 className='md:text-start text-center'>Nuestra Galería</h1>
          <div>
            <div className='md:flex-row flex flex-col justify-center justify-items-center basis-1/3 p-4'>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda1} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda2} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda3} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda7} alt="foto banda tocando"/>
            </div>
            <div className='md:flex-row flex flex-col justify-center justify-items-center basis-1/3 p-4'>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda8} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda9} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda4} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda5} alt="foto banda tocando"/>
            </div>
            <div className='md:flex-row flex flex-col justify-center justify-items-center basis-1/3 p-4'>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda10} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda11} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda12} alt="foto banda tocando"/>
                <Image className='md:w-1/4 grayscale mx-2 hover:scale-110 hover:grayscale-0 ease-in-out duration-500' src={banda6} alt="foto banda tocando"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Galeria