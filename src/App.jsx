import './App.css'
import useFetch from './test'

function App() {
  const {data,error,loading}=useFetch(`https://dummyjson.com/products`,{});


  
  return (
   <div className='flex flex-col w-full items-center p-2'>
      <div className='text-3xl font-bold'>useFetch Custom Hook</div>
      {
        loading ?<div>Loading Data.....</div>:null
      }
      {
        error ?<div>Error Occured !!!!!!!!!</div>:null
      }
      {
        data && data.products && data.products.length ? data.products.map( (item,index)=> (<div key={index}>{item.title}</div>) ):null
      }
   </div>
  )
}

export default App
