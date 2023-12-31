import "./ContactForm.css";


const ContactForm = () => {
  return (
    <div className="form">
        <h1>Send a message to us!</h1>
        <form>
            <input className="name" type="text" placeholder="Name"/>
            <input className="email" type="email" placeholder="Email"/>
            <input className="Subject" type="text" placeholder="Subject"/>
            <textarea className="Msg" placeholder="Message" rows="4"/>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm;