import { useState } from 'react'
import '../styles/ContactForm.scss'

function ContactForm() {
    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "tel": "",
        "message": ""
    })

    function handleFormData(e) {
        const input = e.target.name
        const value = e.target.value

        setFormData(previousFormData => ({
            ...previousFormData,
            [input]: value
        }))
    }

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
                        value={formData.name}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    <input 
                        type="tel"
                        name="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone" 
                        value={formData.tel}
                        onChange={(e) => handleFormData(e)}
                        required
                    />
                    <textarea 
                        name="message"  
                        cols="30" 
                        rows="6"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => handleFormData(e)}
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
