import Link from "next/link"

const fechas = [
    /* {
       
        fecha:"11/12/2023",
        lugar:"La Tangente",
        url:"https://www.instagram.com/entreperros_"
    },
    {
       
        fecha:"12/92/1222",
        lugar:"casa",
        url:"https://www.instagram.com/entreperros_"
    } */
]

const TableTour = () => {


  return (
    
      <div className="container min-h-[100px] mx-auto  shadow-md sm:rounded-lg mt-16">

    <h2 className='text-4xl text-center mb-14'>Tour</h2>
    {
        fechas.length < 1 ? <h2 className="text-center text-4xl">Próximamente más fechas</h2> : (
            
            <table className="w-full text-center text-sm  text-white">
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
                    {

                    fechas.map((fecha, index)=>(

                    
                        <tbody>
                       
                        <tr key={index} className=" border-b   bg-zinc-800  dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {fecha.lugar}
                            </th>
                            <td className="px-6 py-4">
                                {fecha.fecha}
                            </td>
                            <td className="px-6 py-4">
                                <Link href={fecha.url} target="_blank">
                                    <button className="bg-black p-3 rounded-xl">Comprar Tickets</button>
                                </Link>
                            </td>
                            
                        </tr>
                        </tbody>
                    ))
                }
                </table>
                
                )
                
            }
    
           
            
            
        
</div>

  )
}

export default TableTour