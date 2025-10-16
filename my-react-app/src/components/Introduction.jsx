import Reveal from './Reveal.jsx';
import CardStack from './Cards.jsx';
import { terminal_lime } from '../assets/index.js';

const Introduction = () => {
  return (
    <div className=" mx-[20%] pt-[200px]">
        <Reveal>
            <p className='pl-4 pb-2 tracking-widest text-slate-400'>INTRODUCTION</p>
            <h2 className="pb-10 xl:pb-0 pl-4 text-5xl font-black"> About Me<span className="text-accentColor">.</span> </h2>
            <hr className='mb-10 xl:mb-0 xl:mt-10'></hr>
        </Reveal>
        
          <div className='pl-4 pb-4 xl:flex xl:items-center xl:pt-20 xl:gap-x-11 xl:pr-5'>
            <div className='w-[80%] pb-32 lg:w-[60%]'>
              <Reveal>
                I'm Joe, a first class computer science graduate, and aspiring software developer. <br></br>
                <br></br>
              </Reveal>
              <Reveal>
                I like to spend my time either creating
                software solutions to real life problems, watching videos about new tech, or enjoying music. <br></br>
                <br></br>
              </Reveal>
              <Reveal>
                Throughout my projects, I’ve worked with technologies like Node.js, Express, React, and Python, focusing on performance, security, and clean architecture. <br></br>
                <br></br>
              </Reveal>
              <Reveal>
                I’m particularly passionate about building secure, user-focused web applications, with a strong interest in backend development, authentication systems, and data visualisation. <br></br>
              </Reveal>
                <br></br>
              <Reveal>
                I’m always looking to learn new tools, collaborate with others, and contribute to meaningful projects that make an impact.
              </Reveal>
            </div>
            
            <div className='xl:relative xl:-top-10'>
            
              <p className='relative max-[400px]:left-8 -top-20 left-10 sm:left-24 font-black text-lg 2xl:-top-14'>
                <img src={terminal_lime}  className='w-6 relative top-[27px] right-8'></img>
                Technologies I <span className='text-accentColor'>love</span>
              </p>
            
              <Reveal>
                <CardStack/>
              </Reveal>
            </div>
          </div>
    </div>
  )
}

export default Introduction