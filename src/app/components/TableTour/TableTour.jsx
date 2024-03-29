import Link from "next/link"

const fechas = [
    {
        id:1,
        fecha:"30/06/2023",
        lugar:"Orange Bar, San Martín",
        url:"https://www.instagram.com/entreperros_"
    },
    {
        id:2,
        fecha:"02/09/2023",
        lugar:"La Tangente, CABA",
        url:"https://www.passline.com/eventos/entre-perros-en-la-tangente"
    }
]

const TableTour = () => {


  return (
    
      <div className="container min-h-[100px] mx-auto shadow-md  sm:rounded-lg mt-16">

    <h2 className='text-4xl text-center mb-14'>Tour</h2>
    {
        fechas.length < 1 ? <h2 className="text-center text-4xl">Próximamente más fechas</h2> : (
            
            <table className="w-full text-center text-sm container md:mx-auto  text-white">
                    <thead className="text-xs">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-1/3">
                                Lugar
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/3">
                                Tickets
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                    {

                    fechas.map((fecha , index)=>(

                        <tr key={index}  className=" border-b   bg-zinc-800  dark:border-gray-700">
                            <th scope="row" className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {fecha.lugar}
                            </th>
                            <td className=" py-4">
                                {fecha.fecha}
                            </td>
                            <td className=" py-4">
                                <Link href={fecha.url} target="_blank">
                                    <button className="bg-black hover:bg-white duration-500 ease-in-out hover:border-white hover:text-black p-3 rounded-xl">Comprar Tickets</button>
                                </Link>
                            </td>
                            
                        </tr>
                    ))
                }
                </tbody>
                </table>
                
                )
                
            }
    
           
            
            
        
</div>

  )
}

export default TableTour