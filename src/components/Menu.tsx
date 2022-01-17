import {
  AiFillMobile,
  AiFillHome,
  AiFillInfoCircle,
  AiFillPhone,
} from 'react-icons/ai';
import { FaTools } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import s from '../css_modules/Menu.module.css';

interface Props {
  mobile: () => void;
  modal: boolean;
}

export default function Menu({ mobile }: Props) {
  function onClickHandler(): void {
    mobile();
  }
  return (
    <div>
      <div className={`${s.menu}`}>
        <a className={`${s.menu_link}`} href='#' onClick={onClickHandler}>
          Home <AiFillHome className={`${s.icon}`} size={22} />
        </a>
        <a className={`${s.menu_link}`} href='#about' onClick={onClickHandler}>
          About <AiFillInfoCircle className={`${s.icon}`} size={22} />
        </a>
        <a className={`${s.menu_link}`} href='#skills' onClick={onClickHandler}>
          Skills
          <FaTools className={`${s.icon}`} size={22} />
        </a>
        <a
          className={`${s.menu_link}`}
          href='#projects'
          onClick={onClickHandler}>
          Projects
          <BsFillBriefcaseFill className={`${s.icon}`} size={22} />
        </a>
        <a
          className={`${s.menu_link}`}
          href='#contact'
          onClick={onClickHandler}>
          Contact
          <AiFillPhone className={`${s.icon}`} size={22} />
        </a>
      </div>
    </div>
  );
}
