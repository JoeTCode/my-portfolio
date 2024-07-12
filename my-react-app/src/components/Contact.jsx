const Contact = () => {
    return (
        <div>
            <form className="grid gap-4 grid-cols-1 mx-[500px] pt-[250px] mb-[100px]">
                <h2 className="text-4xl">Contact Details</h2>
                <span>Full name</span>
                <input type="text" name="name" placeholder="Enter your full name"></input>
                <span>Email</span>
                <input type="text" name="email" placeholder="Enter your email"></input>
                <span>Message</span>
                <textarea name="message" rows={10} placeholder="Enter your message"></textarea>
                <button></button>
            </form>
        </div>
    )
}

export default Contact;