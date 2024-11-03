import { useAddProductsMutation, useDeleteProductsMutation, useGetAllProductsQuery } from '../store/productsApi'

function Home() {
    const { data = [] } = useGetAllProductsQuery()
    const [saveProduct] = useAddProductsMutation()

    const [deleteId] = useDeleteProductsMutation()
  
    function handleSubmit(e) {
      e.preventDefault()
      const data = {
        title: e.target.title.value
      }
      saveProduct(data)
      e.target.reset()
    }

    return (
        <div className='p-5 w-[500px] mx-auto'>
            <form onSubmit={handleSubmit} className='flex space-x-2'>
                <input name='title' className='p-2 rounded-md border-[2px] border-slate-400 w-full' type="text" placeholder='Typing...' />
                <button className='bg-blue-500 p-2 rounded-md text-white font-bold border-[2px] border-blue-500 hover:bg-transparent hover:text-blue-500 duration-300'>Sumbit</button>
            </form>
            <ul className='w-full mt-5 space-y-4'>
                {data.map(item => (
                    <li key={item.id} className='font-bold text-[22px] w-full flex justify-between items-center'>{item.title}<button onClick={() => {deleteId(item.id)}} className='bg-red-500 p-2 rounded-md text-white font-bold border-[2px] border-red-500 hover:bg-transparent text-[16px] hover:text-red-500 duration-300'>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Home