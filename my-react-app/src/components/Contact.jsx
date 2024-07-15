import Reveal from './Reveal.jsx';
const Contact = () => {
    return (
        <div>
            
                <form className="grid gap-6 grid-cols-1 mx-[30%] p-10 rounded-xl mt-[200px] pb-[100px] bg-black">
                    <Reveal>
                        <p className='tracking-widest text-slate-400'>GET IN TOUCH</p>
                        <h2 className="text-5xl font-black pb-10">Contact Details<span className="text-accentColor">.</span></h2>
                    </Reveal>
                    <Reveal>
                        <span >Full name</span>
                        <input type="text" name="name" placeholder="Enter your full name" className='mt-2 p-1.5 rounded-lg w-full'></input>
                    </Reveal>
                     <Reveal>
                        <span>Email</span>
                        <input type="text" name="email" placeholder="Enter your email" className='mt-2 p-1.5 rounded-lg w-full'></input>
                    </Reveal>
                    <Reveal>
                        <span>Message</span>
                        <textarea name="message" rows={10} placeholder="Enter your message" className='mt-2 p-1.5 rounded-lg w-full'></textarea>
                    </Reveal>
                        <button className='mt-10 p-2 bg-accentColor hover:bg-[#A87BFF]
                        active:bg-[#8255DC] active:scale-95
                        transition-all duration-300 ease-in-out
                        '>Submit</button>
                </form>
            
        </div>
    )
}

export default Contact;