import s from '../css_modules/Contact.module.css';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

export default function Contact() {
  return (
    <div id='contact' className={`${s.contact}`}>
      <div className={`${s.contact_cont}`}>
        <h1>Contact</h1>
        <div className={`${s.contact_sec}`}>
          <IconContext.Provider value={{ size: '60' }}>
            <a
              href='http://linkedin.com/in/leonardo-marussig-dev'
              className={s.contact_link}>
              <AiFillLinkedin />
            </a>
            <a href='http://github.com/elmaruz' className={s.contact_link}>
              <AiFillGithub />
            </a>
            <a href='mailto:lmarussig@gmail.com' className={s.contact_link}>
              <AiFillMail />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
