import React from 'react';
import './Contact.css';
import m from '../../assets/m.png';
import cont from '../../assets/con.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const form = event.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            setResult("Please fill out all fields before submitting.");
            return;
        }

        const formData = new FormData(form);
        formData.append("access_key", "41bd4949-94ab-4b71-ba89-4de618ca7686");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form submitted successfully!");
                form.reset();
            } else {
                console.error("Error:", data);
                setResult(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <div id="Contact" className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Please feel free to send a message about anything you'd like me to work on.</p>
                    <label>
                        <img src={m} alt="Gmail logo" /> bharatchundru11@gmail.com
                    </label>
                    
                    <label>
                        <img src={cont} alt="Contact logo" /> +1 470 531 7248
                    </label>

                </div>
                <form className="contact-right" onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" required />

                    <label>Message</label>
                    <textarea name="message" placeholder="Enter your message" required></textarea>

                    <button className="contact-submit" type="submit">Submit</button>
                    <span className="form-status">{result}</span>
                </form>
            </div>
        </div>
    );
};

export default Contact;
