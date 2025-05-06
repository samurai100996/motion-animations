import React from 'react'
import "./App.css";
const App = () => {
  return (
    <div className='h-screen w-full bg-neutral-900 flex items-center justify-center'>
      <button className='group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,155,155,0.1)_inset]'>
        click
<span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
h-px w-3/4 mx-auto'></span>
<span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent 
h-[4px] w-3/4 mx-auto blur-sm'></span>
        </button>
    </div>
  )
}

export default App
