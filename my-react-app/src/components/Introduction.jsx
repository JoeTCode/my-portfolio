import Reveal from './Reveal.jsx';
import CardStack from './Cards.jsx';
const Introduction = () => {
  return (
    <div className=" mx-[20%] pt-[250px]">
        <Reveal>
            <h2 className="pl-4 text-5xl font-black pb-10"> About Me. </h2>
        </Reveal>
        <Reveal>
          <div className='pl-4 pb-4 lg:flex lg:pt-20 lg:gap-x-11 lg:pr-5'>
            <div className='w-[80%] pb-32 lg:w-[60%]'>
                I'm Joe, a third year computer science student, and aspiring app developer. I like to spend my time either creating
                software solutions to real life problems, watching videos about new tech, and enjoying music. <br></br>
                Additionally, to wind down after working on projects or uni assignments, I like to play video games that somewhat challenge my mind, 
                play covers of my favourite songs, or have a hit at the nearest tennis court! I have a somewhat artistic mind, and
                love to combine the appeal of art and the functionality of code. <br></br>
                I hope to catch your attention with this portfolio, and if it does, please contact me below!
            </div>
            <CardStack/>
          </div>
        </Reveal>
        
        
    </div>
  )
}

export default Introduction