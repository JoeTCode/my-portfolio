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
    project_site_link=null,
    project_site_logo=null,
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
          className={`bg-[#003333] p-5 rounded-2xl sm:w-[360px] w-full sm:m-10 ${project_site_link && 'cursor-pointer'}`}

        >
          <div
            onClick={
              project_site_link ?
              () => window.open(project_site_link, "_blank") : undefined
            }
          >
            <div className='relative w-full h-[230px]'>
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />
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
            <div>
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
              <div className='flex mt-2'>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="
                    w-10 h-10 rounded-full flex justify-center items-center cursor-pointer 
                    transition-colors duration-300 
                    hover:scale-110 hover:brightness-90
                  "
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-7 h-7'
                  />
                </div>
                {project_site_link && (
                  <div
                    onClick={() => window.open(project_site_link, "_blank")}
                    className="
                      w-10 h-10 rounded-full flex justify-center items-center cursor-pointer 
                      transition-colors duration-300 
                      hover:scale-110 hover:brightness-90
                    "
                  >
                    <img
                      src={project_site_logo}
                      alt='source code'
                      className='w-7 h-7'
                    />
                  </div>
                )}
              </div>
            </div>
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
                    Over the past few years, I’ve spent my time developing projects that challenge me to think critically and solve real-world problems through software, through university assignements, or in my free time. <br></br>
                    <br></br>
                  </Reveal>
                  <Reveal>
                    My projects range from secure web applications with authentication and encryption systems, to intelligent tools like chatbots, data scrapers, and machine learning models. <br></br>
                    <br></br>
                  </Reveal>
                  <Reveal>
                    Each project has helped me strengthen my skills in full-stack development, security practices, and software design — with a focus on writing clean, maintainable code. <br></br>
                    <br></br>
                  </Reveal>
                  <Reveal>
                    Below are some of the key projects I’ve worked on that best represent what I enjoy building and the technologies I love working with. <br></br>
                    <br></br>
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