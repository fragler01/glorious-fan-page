import { useNavigate } from "react-router-dom";
import '../styles/Contact.scss'
import { useState } from "react";
export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true)
    }
    return (
        <div className="Contact">
            <h1>Get in touch with us</h1>

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="example@domain.com" />
                <input type="name" placeholder="Your (preferably) full name" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Place for your message"></textarea>
                <button type="submit bebas">Submit</button>
            </form>
            {submitted && "Leveled elküldtük és feldolgozás alá kerítettük"}

        </div>
    )
}