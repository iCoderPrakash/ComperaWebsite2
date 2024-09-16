import React from 'react'

const whyneed = () => {
  return (
    <div className='w-full min-h-96 bg-gray-100 flex flex-col justify-center md:items-center gap-5 overflow-hidden'>
    <h1 className='text-center text-3xl font-bold text-black pt-20'>Why need to <span className='text-green-600'>Choose Us</span></h1>
    <p className='text-center px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente vero fugit corrupti quas ipsam vitae! Quibusdam, quam rem perferendis commodi totam labore consequuntur nulla.
    </p>
   <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center pb-20">
      
      <div className="p-6 border rounded-lg">
        <h3 className="text-green-600 font-bold text-lg mb-2">01</h3>
        <h4 className="text-2xl font-semibold mb-4">Benefit 1</h4>
        <p className="text-gray-600">
          In this part, we will write about the benefits users derive from choosing your company product or services.
        </p>
      </div>

    
      <div className="p-6 border rounded-lg">
        <h3 className="text-green-600 font-bold text-lg mb-2">02</h3>
        <h4 className="text-2xl font-semibold mb-4">Benefit 2</h4>
        <p className="text-gray-600">
          In this part, we will write about the benefits users derive from choosing your company product or services.
        </p>
      </div>

     
      <div className="p-6 border rounded-lg">
        <h3 className="text-green-600 font-bold text-lg mb-2">03</h3>
        <h4 className="text-2xl font-semibold mb-4">Benefit 3</h4>
        <p className="text-gray-600">
          In this part, we will write about the benefits users derive from choosing your company product or services.
        </p>
      </div>
    </div>
   </div>
  )
}

export default whyneed
