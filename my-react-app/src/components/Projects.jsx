import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import Reveal from './Reveal.jsx';

const ProjectCard = ({

    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (

      <Reveal delay={index*0.5}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-[#003333] p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
  
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
  
          <div className='mt-5'>
            <div className="flex gap-4">
                <h3 className='text-white font-bold text-[22px]'>
                    {name}
                </h3>
                <hr className="w-[50%] relative top-5"></hr>
            </div>
            <p className='mt-2 text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </Reveal>
    );
  };
  
const Projects = () => {
    
    return (
        
            <div className="grid gap-4 grid-cols-1 mx-[10%] pt-[10rem]">
                <Reveal>
                    <p className='pl-4 mx-[13%] tracking-wide text-slate-400'>WHAT I SPENT MY TIME ON</p>
                    <h2 className="pl-4 mx-[13%] text-5xl font-black pb-10"> Projects<span className="text-accentColor">.</span></h2>
                </Reveal>
                <hr className='mx-[13%] mb-10 xl:mb-10'></hr>
                <div className='pl-4 mx-[13%]'>
                    <Reveal>
                    I like to develop side-projects when I have some time on my hands, as they may not only end up helping me or others
                    in some aspect of their life, but they help develop and refine my skills as a developer. <br></br>
                    <br></br>
                    </Reveal>
                    <Reveal>
                    While it is sometimes daunting to learn new frameworks/languages, I do like to challenge myself 
                    and I find this is the best way to expand my repertoire. <br></br>
                    <br></br>
                    </Reveal>
                    <Reveal>
                    Here are some of my favorites!
                    </Reveal>


                </div>
                
                <div className='mx-[0%] pl-4 mt-20 sm:mx-[13%] flex flex-wrap gap-7'>
                    {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                    ))}
                </div>
            </div>
        
    )
}

export default Projects;