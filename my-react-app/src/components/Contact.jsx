import Reveal from './Reveal.jsx';
const Contact = () => {
    return (
        <div>
            <Reveal>
                <form className="grid gap-4 grid-cols-1 mx-[30%] pt-[250px] mb-[100px]">
                        <p className='tracking-wide text-slate-300'>GET IN TOUCH</p>
                        <h2 className="text-5xl font-black pb-10">Contact Details.</h2>
                    
                        <span>Full name</span>
                        <input type="text" name="name" placeholder="Enter your full name"></input>
                    
                        <span>Email</span>
                        <input type="text" name="email" placeholder="Enter your email"></input>
                    
                        <span>Message</span>
                        <textarea name="message" rows={10} placeholder="Enter your message"></textarea>
                    
                    <button>Submit</button>
                    
                </form>
            </Reveal>
        </div>
    )
}

export default Contact;