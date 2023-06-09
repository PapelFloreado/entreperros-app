import React from 'react'

const ReproductorTodo = () => {
  return (
    <div className='mx-4 md:mx-0'>
        <h2 className='my-10 md:text-start text-center'>Nuestros nuevos lanzamientos</h2>
        <div className='flex flex-col md:flex-row gap-4'>
            <iframe src="https://open.spotify.com/embed/album/6Fh3gnIUXGuf8gZVDn7bnz?utm_source=generator&theme=0" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe src="https://open.spotify.com/embed/album/016MnGPutp5tvjUjG16IqC?utm_source=generator&theme=0" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe src="https://open.spotify.com/embed/album/4rygfFMFMiWhr6ILbTy3Ug?utm_source=generator&theme=0" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <h2 className='my-10 md:text-start text-center'>Nuestros Álbumes</h2>
        <div className='flex flex-col md:flex-row gap-4'>
            <iframe src="https://open.spotify.com/embed/album/5b7q2OsIfo32u8uNXRpF5A?utm_source=generator&theme=0" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe src="https://open.spotify.com/embed/album/4eMUaO2bcyXomIyOyUDNOA?utm_source=generator&theme=0" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe src="https://open.spotify.com/embed/album/7wvlp0V3WM98UOGFb2J17n?utm_source=generator&theme=0" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>
  )
}

export default ReproductorTodo