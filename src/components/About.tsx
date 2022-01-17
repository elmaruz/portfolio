import s from '../css_modules/About.module.css';
import { AiOutlineLaptop } from 'react-icons/ai';
import { BsFillLightbulbFill, BsFilm } from 'react-icons/bs';

export default function About() {
  return (
    <div id='about' className={`${s.about}`}>
      <div className={`${s.about_cont}`}>
        <h1>About</h1>
        <div className={`${s.about_par}`}>
          <div className={`${s.about_icons}`}>
            <p className={`${s.icon_par}`}>
              Versatile and enthusiastic web developer, committed to delivering
              scalable and efficient solutions.
              <br />
            </p>
            <div>
              <AiOutlineLaptop size={40} />
            </div>
          </div>
          <div className={`${s.about_icons}`}>
            <p className={`${s.icon_par}`}>
              An adaptable and quick learner, always keeping up with the latest
              developments in the field. <br />
            </p>
            <div>
              <BsFillLightbulbFill size={40} />
            </div>
          </div>
          <div className={`${s.about_icons}`}>
            <p className={`${s.icon_par}`}>
              My background in film helps me to effectively translate client
              needs into visible results.
            </p>
            <div>
              <BsFilm size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
