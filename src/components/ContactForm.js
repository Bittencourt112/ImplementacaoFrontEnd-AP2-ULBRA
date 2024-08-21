import { useState } from 'react';

import Message from './Message';

import styles from './ContactForm.module.css';

function ContactForm() {

    const [messageText, setMessageText] = useState("");
    const [messageType, setMessageType] = useState("");

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputSubject, setInputSubject] = useState("");
    const [inputMessage, setInputMessage] = useState("");

    function checkForm() {
        
        if(inputName && inputEmail && inputSubject && inputMessage) {

            setMessageType("success");
            setMessageText("Message sent successfully!");

        }else{

            setMessageType("error");
            setMessageText("Failed to send message!");

        }

        setInputName("");
        setInputEmail("");
        setInputSubject("");
        setInputMessage("");

    }

    return(
        <div className={styles.contactform}>
            {<Message type={messageType} text={messageText}/>}
            <form onSubmit={event => event.preventDefault()}>
                <h1>Send us a message</h1>
                <p>Fill in all fields</p>
                    <input type="text" id="name" name="name" placeholder="Name" value={inputName} onChange={(event) => setInputName(event.target.value)} required/><br/>
                    <input type="email" id="email" name="email" placeholder="Email" value={inputEmail} onChange={(event) => setInputEmail(event.target.value)} required/><br/>
                    <input type="text" id="subject" name="subject" placeholder="Subject" value={inputSubject} onChange={(event) => setInputSubject(event.target.value)} required/><br/>
                    <textarea id="message" name="message" placeholder="Message" value={inputMessage} onChange={(event) => setInputMessage(event.target.value)} required></textarea><br/>
                <button onClick={checkForm}><span><i class="fa-solid fa-envelope"></i></span> Send message</button>
            </form>
        </div>
    );
}

export default ContactForm;