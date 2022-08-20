import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bf33fd66-9624-4d35-9fce-519e7af227ed" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Reach out to me on <a className='text-blue-600 py-4' href='https://www.linkedin.com/in/majwadc/' target="_blank" rel="noreferrer"> LinkedIn </a> </p>
                <p className='text-gray-300 py-4'>Shoot me an email - <a className='text-blue-600 py-4' href='mailto: majwadc@gmail.com' target="_blank" rel="noreferrer"> majwadc@gmail.com </a></p>
            </div>
            {/* <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' /> */}
            {/* <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' /> */}
            {/* <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea> */}
            {/* <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button> */}
        </form>
    </div>
  )
}

export default Contact