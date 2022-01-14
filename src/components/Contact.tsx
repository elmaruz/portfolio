import s from '../css_modules/Contact.module.css';

export default function Contact() {
  return (
    <div id='CONTACT' className={`${s.contact}`}>
      <div className={`${s.contact_cont}`}>
        <h1>Contact</h1>
        <p className={`${s.contact_par}`}>This is the contact section</p>
      </div>
    </div>
  );
}
