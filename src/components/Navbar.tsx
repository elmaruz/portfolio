import s from '../css_modules/Navbar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
  mobile: () => void;
  modal: boolean;
}

export default function Navbar({ mobile }: Props) {
  function onClickHandler() {
    mobile();
  }

  return (
    <div className={`${s.main_nav}`}>
      <span className={`${s.nav_name}`}>Leonardo Marussig</span>
      <div className={`${s.links}`}>
        <a className={`${s.link}`} href='#'>
          Home
        </a>
        <a className={`${s.link}`} href='#ABOUT'>
          About
        </a>
        <a className={`${s.link}`} href='#SKILLS'>
          Skills
        </a>
        <a className={`${s.link}`} href='#PROJECTS'>
          Projects
        </a>
        <a className={`${s.link}`} href='#CONTACT'>
          Contact
        </a>
      </div>
      <AiOutlineMenu className={`${s.menu}`} onClick={onClickHandler} />
    </div>
  );
}
