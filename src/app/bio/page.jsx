import Image from "next/image"
import bio from "@/assets/img/banda_bio.jpg"

const Bio = () => {


  return (
    <>
        <div className="sm:container mx-auto">
          <h2 className='my-10 md:text-start text-center text-3xl'>Conocemos un poco más</h2>
          <Image className="w-3/4 flex justify-center mx-auto shadow-xl  shadow-slate-900 rounded-xl" src={bio} alt="foto de entre perros tocando"/>
          <div className="mt-10">
            <p>Con orígenes musicales inspirados en el folk rock y con presencia de algunos temas reggae en su repertorio, actualmente transita el género canción.</p>
            <p>
              Su rock llegado como de otra época, es una de las más gratas sorpresas de la temporada y todo parece indicar que su popularidad va a seguir creciendo 2023.Entre Perros se formó en El Palomar en el año 2008. 
            </p>
            <p>
              La agrupación está integrada por Damián Sabatino en guitarra y coros, Hernán Sánchez en voz, armónica y guitarra, Fede con Puntillo en batería, Gabriel Peralta en teclados y Guillermo Iannino en bajo.
            </p>
          </div>
        </div>
    </>
  )
}

export default Bio