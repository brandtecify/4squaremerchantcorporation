import React from 'react'

const Address = () => {
  return (
    <div className='flex justify-center'>
      <div className="bg-black rounded-xl flex-col space-y-10 p-10 text-white">
        <h1 className='text-3xl font-semibold'>Get In Touch</h1>
        <p>Lorem ipsum dolor sit amet.</p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-orange-50 p-2 rounded">
            <i className='ri-map-pin-line text-3xl text-secondary'></i>
          </div>

          <div>
            <p>Visit</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium?</p>
            <p>India</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-orange-50 p-2 rounded">
            <i className='ri-mail-line text-3xl text-secondary'></i>
          </div>

          <div>
            <h1 className='font-semibold text-2xl'> Mail Us</h1>
            <p>123@gmail.com</p>
             {/* <h1>Call Us</h1> */}
             {/* <p>+91 90728383</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address