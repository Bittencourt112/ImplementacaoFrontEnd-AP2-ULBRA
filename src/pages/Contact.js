import ContactForm from '../components/ContactForm';

import styles from './Contact.module.css'

function Contact() {
    return(
        <div className={styles.contact}>
            <h1>Get in touch with us!</h1>
            <hr/>
            <h3>Our social media contacts</h3>
            <div className={styles.row}>
                <div className={styles.content}>
                    <span className={styles.facebook}><i className="fa-brands fa-facebook fa-3x"></i></span>
                </div>
                <div className={styles.content}>
                    <span className={styles.instagram}><i className="fa-brands fa-instagram fa-3x"></i></span>
                </div>
                <div className={styles.content}>
                    <span className={styles.whatsapp}><i className="fa-brands fa-whatsapp fa-3x"></i></span>
                </div>
            </div>
            <ContactForm/>
        </div>
    );
}

export default Contact;