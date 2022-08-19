import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Sanity from '../assets/sanity.png';
import Python from '../assets/python.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/*container*/}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div>
    <p className='text-4xl font-bold inline border-b-4 border-[#419aff]'>Skills</p>
    <p className='py-4'>These are the technologies I have worked with</p>
    </div>

    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={HTML} alt="HTML icons" />
        <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icons" />
        <p className='my-4'>JavaScript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={CSS} alt="CSS icons" />
        <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg icons " />
        <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Node} alt="Node icons" />
        <p className='my-4'>Node</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Sanity} alt="Sanity icons" />
        <p classaNme='my-4'>Sanity</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={FireBase} alt="FireBase icons" />
        <p classaNme='my-4'>Firebase</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icons" />
        <p className='my-4'>Tailwind</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icons" />
        <p className='my-4'>GitHub</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={Python} alt="Python icons" />
        <p className='my-4'>Python</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Skills