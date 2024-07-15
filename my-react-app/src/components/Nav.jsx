import { useEffect, useState } from 'react';
import { Link, scrollSpy, animateScroll as scroll } from 'react-scroll';



    

const Nav = () => {
    const [showNavOnScroll, setShowNavOnScroll] = useState(false);

    // useEffect is used to perform side effects in functional components.
    // Here, it's used to register scroll events and update scrollSpy when the component mounts.
    useEffect(() => {
    
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();

        let timeoutId;
        // Add scroll event listener to show nav on scroll
        const handleScroll = () => {
            if (window.scrollY > 100) {
            setShowNavOnScroll(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowNavOnScroll(false);
            }, 700); // time e.g: 100 = 100ms
            } else {
            setShowNavOnScroll(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup function to remove event listener when component unmounts
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };

    return (
        <nav>
            <div // this div detects when user mouses to nav, it's size determines detection radius
            className="opacity-0 fixed right-[5rem] top-1 z-0 px-16 py-20 pb-[10rem]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            Menu
            </div>
            <div className={`${
            (hovered || showNavOnScroll) ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-700 ease-in-out flex flex-col items-start z-10 fixed -right-20 sm:right-0 text-xs sm:text-base top-0 mt-1`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <Link activeClass="active" to="Hero" spy={true} smooth={true} duration={500} className="nav-link">
                    Hero
                </Link>
                <Link activeClass="active" to="Introduction" spy={true} smooth={true} duration={500} className="nav-link">
                    About Me
                </Link>
                <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={500} className="nav-link">
                    Projects
                </Link>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={500} className="nav-link">
                    Contact
                </Link>
            </div>
        </nav>
        
        
    )
}

export default Nav;