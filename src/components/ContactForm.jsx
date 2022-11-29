import '../styles/ContactForm.scss'

function ContactForm() {
    return (
        <div className="contact-form">
            <div className="left">
                <h1>Contact Us</h1>
                <p>Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
            </div>
            <div className="right">
                <form action="/" id="contact-form">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email address"
                        required
                    />
                    <input 
                        type="tel"
                        name="tel"
                        placeholder="Phone" 
                        required
                    />
                    <textarea 
                        name="message"  
                        cols="30" 
                        rows="6"
                        placeholder="Your Message"
                        required
                    />
                </form>
                <div className="submit-btn">
                    <button 
                        className="btn light-btn"
                        form="contact-form"
                        value="Submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
