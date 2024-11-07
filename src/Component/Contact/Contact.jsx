import React from 'react'
import './Contact.css';
import loc from '../../assets/loc.png';
import gmail from '../../assets/phone.png';
import phone from '../../assets/gmail.png';
import m from '../../assets/m.png';
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "41bd4949-94ab-4b71-ba89-4de618ca7686");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div id="Contact"className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets Talk</h1>
                    <p>Please feel free to send a message about anything that you want me yo work on</p>
                    <label><img src={m} alt="gmail logo"/>chundrubharat6699@gmail.com</label>
                    
                </div>
                <form className='contact-right'onSubmit={onSubmit}>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your Name' name='name'></input>
                    <label htmlFor='Email'>Email</label>
                    <input type='email' placeholder='Enter your Email' name='email'></input>
                    <label htmlFor=''>Message!</label>
                    <textarea name='message' placeholder='Enter your Message'></textarea>
                    <button className='contact-submit' type='submit'>Submit</button>


                </form>

            </div>
        </div>
    )
}

export default Contact
