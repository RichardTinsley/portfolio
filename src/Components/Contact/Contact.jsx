import { useRef, useState } from "react";
import "./Contact.css"
import emailjs from "@emailjs/browser";


export default function Contact() {
    
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
            "service_o33kbhq",
            "template_xrwnzgm",
            formRef.current,
            "FkEKCaV4JL-Ulzzan"
            )
            .then(
            (result) => {
                setSuccess(true)
            },
            (error) => {
                setError(true);
            }
        );
    };
    

    return (
        <div className="contact">
            <div className="text-container">
                <h1>Lets work together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>hello@react.dev</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>Hello Street New York</span>
                </div>
            </div>
            <div className="form-container">
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                >
                    <input type="text" required placeholder="Name" name="name"/>
                    <input type="email" required placeholder="Email" name="email"/>
                    <textarea rows={8} placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>
        </div>
    )
}