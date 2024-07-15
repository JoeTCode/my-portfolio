import { projects } from "../constants";
import { Tilt } from "react-tilt";
import github from "../../public/github.png";
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
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
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
            <h2 className="mr-[20%] text-5xl font-black pb-10"> Projects <span className="text-accentColor">.</span></h2>
            <hr className='mb-10 xl:mb-10'></hr>
            <div className='mr-[20%]'>
                Project1
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum convallis ullamcorper augue id ornare sit amet nunc ac.
                Proin at consequat nulla, ut feugiat sem. Aenean lacinia vitae ante eget
                dictum. Morbi enim nibh, lacinia eget luctus eu, vehicula eu mauris.
                Suspendisse nisi nunc, ultrices sit amet nunc ac, consequat elementum metus.
                Proin pretium a massa vel eleifend. Proin malesuada metus id justo ultrices ultrices. 
                Nulla facilisi. Etiam vestibulum ac enim sed porta. Aliquam consequat pellentesque ex
                eu aliquam. Aliquam nibh libero, porttitor in metus at, luctus vestibulum odio. 
                Cras pulvinar nulla at vulputate blandit. Ut feugiat sem.


            </div>
            
            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;