import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form className='flex flex-col space-y-10'>
        <h1 className=' font-semibold text-secondary text-3xl mb-5'>Send  Message</h1>
        <div className="flex space-x-10">
          <input type="text" placeholder='First Name'
          className='border py-3 px-5 bg-blue-50          focus:outline-none rounded-lg w-full
          '/>

       <input type="text" placeholder='Last Name'
          className='border py-3 px-5 bg-blue-50          focus:outline-none rounded-lg w-full
          '/>
   
        </div>

        <div className="flex space-x-10">
          <input type="email" placeholder='Email'
          className='border py-3 px-5 bg-blue-50          focus:outline-none rounded-lg w-full
          '/>

       <input type="text" placeholder='Phone Number'
          className='border py-3 px-5 bg-blue-50          focus:outline-none rounded-lg w-full
          '/>
   
        </div>
        
        <div className="flex space-x-10">
        

       <textarea type="text" 
          rows={5}
          placeholder='Message'
          className='border py-3 px-5 bg-blue-50 w-full focus:outline-none rounded-lg
          '/>
   
        </div>
        <div className="flex
      justify-end">
        <button className='text-white bg-secondary px-5 py-2 rounded-xl max-w-max'>Send A Message</button>
      </div>
      </form>
     
    </div>
  )
}

export default ContactForm