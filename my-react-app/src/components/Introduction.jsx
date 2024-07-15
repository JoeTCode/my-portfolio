import Reveal from './Reveal.jsx';
import CardStack from './Cards.jsx';
import { terminal_lime } from '../assets/index.js';

const Introduction = () => {
  return (
    <div className=" mx-[20%] pt-[200px]">
        <Reveal>
            <p className='pl-6 pb-2 tracking-widest text-slate-400'>INTRODUCTION</p>
            <h2 className="pb-10 xl:pb-0 pl-4 text-5xl font-black"> About Me<span className="text-accentColor">.</span> </h2>
            <hr className='mb-10 xl:mb-0 xl:mt-10'></hr>
        </Reveal>
        <Reveal>
          <div className='pl-4 pb-4 xl:flex xl:items-center xl:pt-20 xl:gap-x-11 xl:pr-5'>
            <div className='w-[80%] pb-32 lg:w-[60%]'>
                I'm Joe, a third year computer science student, and aspiring app developer. <br></br>
                <br></br>
                I like to spend my time either creating
                software solutions to real life problems, watching videos about new tech, and enjoying music. <br></br>
                <br></br>
                Additionally, to wind down after working on projects or uni assignments, I like to play video games that somewhat challenge my mind, 
                play covers of my favourite songs, or have a hit at the nearest tennis court! <br></br>
                <br></br>
                I have a somewhat artistic mind, and love to combine the appeal of art and the functionality of code.
                That being said, I hope to catch your attention with this portfolio, and if it does, please contact me below!
            </div>
            <div className='xl:relative xl:-top-10'>
              <p className='relative -top-24 left-24 font-black text-lg'>
                <img src={terminal_lime}  className='w-6 relative top-[27px] right-8'></img>
                Technologies I <span className='text-accentColor'>love</span>
              </p>
              <CardStack/>
            </div>
            
          </div>
        </Reveal>
        
        
    </div>
  )
}

export default Introduction