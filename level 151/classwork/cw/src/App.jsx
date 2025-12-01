import { useState } from 'react'
import Element from './element'


function App() {
  
  let [listItem,addElement] = useState([])

  function onChang (e){
    e.preventDefault()

    let value = e.target.title.value

    addElement([...listItem, value])


    e.target.title.value = ""
  }

  return (
    <>
      <div className='w-full h-screen bg-amber-300 flex justify-center items-center'>
          <div className='w-[800px] h-[600px] bg-amber-800 p-5 rounded-[15px]'>
              <div className='w-full flex justify-between p-5 items-center'>
                  <form  onSubmit={onChang} className='flex items-center justify-between w-full'>
                      <input name='title' type="text" placeholder='Enter Todo' className='border-2 bg-gray-500 px-3 py-1.5 rounded-2xl w-[600px]' />
                      <input type="submit"  className='bg-green-500 p-3 rounded-2xl hover:bg-green-800' />
                  </form>
                  

                  
              </div>

              <div className='w-full h-[450px] bg-white rounded-[15px] p-5'>
                  <ul className='flex flex-col items-start justify-start w-full h-[420px] gap-4 overflow-y-scroll'>
                      {
                        listItem.map((item) =>{
                          return <Element task={item}/>
                        })
                      }
                  </ul>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
