import React from 'react';
import './Contact.css';
import m from '../../assets/m.png';

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
            alert("Please fill out all fields before submitting.");
            setResult("");
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
                setResult("Form Submitted Successfully");
                alert("Details sent successfully!");
                form.reset();
            } else {
                console.error("Error:", data);
                setResult(data.message);
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setResult("An error occurred. Please try again.");
            alert("An error occurred. Please try again.");
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
                    <p>Please feel free to send a message about anything that you want me to work on.</p>
                    <label><img src={m} alt="gmail logo"/> chundrubharat1999@gmail.com</label>
                </div>
                <form className="contact-right" onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your Name" name="name" required />
                    
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email" name="email" required />
                    
                    <label>Message</label>
                    <textarea name="message" placeholder="Enter your Message" required></textarea>
                    
                    <button className="contact-submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
