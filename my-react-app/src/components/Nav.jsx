import { useEffect } from 'react';
import { Link, Events, scrollSpy, animateScroll as scroll } from 'react-scroll';



    

const Nav = () => {
    // useEffect is used to perform side effects in functional components.
    // Here, it's used to register scroll events and update scrollSpy when the component mounts.
    useEffect(() => {
      
        // // Registering the 'begin' event and logging it to the console when triggered.
        // Events.scrollEvent.register('begin', (to, element) => {
        //   console.log('begin', to, element);
        // });
    
        // // Registering the 'end' event and logging it to the console when triggered.
        // Events.scrollEvent.register('end', (to, element) => {
        //   console.log('end', to, element);
        // });
    
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();
    
        // Returning a cleanup function to remove the registered events when the component unmounts.
        // return () => {
        //   Events.scrollEvent.remove('begin');
        //   Events.scrollEvent.remove('end');
        // };
    }, []);

    return (
        <nav>
            <div className="flex flex-col items-start z-10 fixed right-0 top-0 mt-10">
                <Link activeClass="active" to="Hero" spy={true} smooth={true} duration={500} className="text-white p-2 mr-16 hover:cursor-pointer">
                    Hero
                </Link>
                <Link activeClass="active" to="Introduction" spy={true} smooth={true} duration={500} className="text-white p-2 mr-16 hover:cursor-pointer">
                    About Me
                </Link>
                <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={500} className="text-white p-2 mr-16 hover:cursor-pointer">
                    Projects
                </Link>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={500} className="text-white p-2 mr-16 hover:cursor-pointer">
                    Contact
                </Link>
            </div>
        </nav>
        
        
    )
}

export default Nav;