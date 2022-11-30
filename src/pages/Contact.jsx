import Cities from '../components/Cities'
import ContactForm from '../components/ContactForm'
import LeafBgPattern from '../components/LeafBgPattern'

function Contact() {
    return (
        <div className="contact">
            <LeafBgPattern 
                position="bottom"
                distanceTop={885} 
            />
            <ContactForm />
            <Cities />
        </div>
    )
}

export default Contact
