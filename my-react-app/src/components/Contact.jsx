import Reveal from './Reveal.jsx';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";



const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setForm({
        ...form,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
        .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
            from_name: form.name,
            to_name: "Joe Thomas",
            from_email: form.email,
            to_email: "joejoe98t@gmail.com",
            message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
                name: "",
                email: "",
                message: "",
            });
            },
            (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
            }
        );
    };
      
    return (
        <div>
            
                <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid gap-6 grid-cols-1 mx-10 sm:mx-[30%] p-10 rounded-xl mt-[200px] pb-[100px] bg-black">
                    <Reveal>
                        <p className='tracking-widest text-slate-400'>GET IN TOUCH</p>
                        <h2 className="text-5xl font-black pb-10">Contact Details<span className="text-accentColor">.</span></h2>
                    </Reveal>
                    <Reveal>
                        <span >Full name</span>
                        <input type="text" name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name" className='mt-2 p-1.5 rounded-lg w-full bg-[#121212]'
                        required></input>
                    </Reveal>
                     <Reveal>
                        <span>Email</span>
                        <input type="email" name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email" className='mt-2 p-1.5 rounded-lg w-full bg-[#121212]'
                        required></input>
                    </Reveal>
                    <Reveal>
                        <span>Message</span>
                        <textarea name="message" rows={10}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Enter your message" className='mt-2 p-1.5 rounded-lg w-full bg-[#121212]'
                        required></textarea>
                    </Reveal>
                        <button 
                        type='submit'
                        className='mt-10 p-2 bg-accentColor hover:bg-[#A87BFF]
                        active:bg-[#8255DC] active:scale-95
                        transition-all duration-300 ease-in-out
                        '>
                            {loading ? "Sending..." : "Send"}
                        </button>
                </form>
            
        </div>
    )
}

export default Contact;