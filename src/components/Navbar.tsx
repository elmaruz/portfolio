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
      <span className={`${s.nav_name}`}>Portfolio</span>
      <div className={`${s.links}`}>
        <a className={`${s.link}`} href='#'>
          Home
        </a>
        <a className={`${s.link}`} href='#about'>
          About
        </a>
        <a className={`${s.link}`} href='#skills'>
          Skills
        </a>
        <a className={`${s.link}`} href='#projects'>
          Projects
        </a>
        <a className={`${s.link}`} href='#contact'>
          Contact
        </a>
      </div>
      <AiOutlineMenu className={`${s.menu}`} onClick={onClickHandler} />
    </div>
  );
}
