import dynamic from "next/dynamic"

const Gallery = dynamic(()=>import ("../components/Gallery/Gallery"))
const Galeria = () => {
    
  return (
    <>
        <div className='container mx-auto'>
          <h1 className='md:text-start text-center'>Nuestra Galería</h1>
          <Gallery/>
        </div>
    </>
  )
}

export default Galeria