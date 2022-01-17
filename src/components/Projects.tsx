import s from '../css_modules/Projects.module.css';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSequelize,
  SiExpress,
} from 'react-icons/si';

export default function Projects() {
  return (
    <div id='projects' className={`${s.proj}`}>
      <div className={`${s.proj_cont}`}>
        <h1>Projects</h1>
        {/* <p className={`${s.proj_par}`}>This is the projects section</p> */}
        <div className={`${s.proj_sec}`}>
          <div className={`${s.proj_box1}`}>
            <a href='https://elmaruz-weather.vercel.app' className={s.link}>
              <div className={`${s.proj_label}`}>
                <div className={s.par}>
                  <span className={s.title}>Weather App</span>
                  <br />
                  <p>A cute little app that displays the current weather.</p>
                </div>
                <div className={`${s.symbols}`}>
                  <SiTypescript size={20} />
                  <SiReact size={20} />
                </div>
              </div>
            </a>
          </div>
          <div className={`${s.proj_box2}`}>
            <a href='https://videogames-ten.vercel.app' className={s.link}>
              <div className={`${s.proj_label}`}>
                <div className={s.par}>
                  <span className={s.title}>Videogames App</span>
                  <br />
                  <p>
                    Search, filter, create videogames using rawg.io's database.
                  </p>
                </div>
                <div className={`${s.symbols2}`}>
                  <SiJavascript size={20} />
                  <SiReact size={20} />
                  <SiRedux size={20} />
                  <SiSequelize size={20} />
                  <SiExpress size={20} />
                </div>
              </div>
            </a>
          </div>
          <div className={`${s.proj_box3}`}>
            <a
              href='https://ecommerce-pg-a5km89fb0-sergiogrimaldo.vercel.app/home'
              className={s.link}>
              <div className={`${s.proj_label}`}>
                <div className={`${s.par}`}>
                  <span className={s.title}>Sneakers E-Commerce</span>
                  <br />
                  <p>Collectible sneakers e-commerce experience.</p>
                </div>
                <div className={`${s.symbols2}`}>
                  <SiJavascript size={20} />
                  <SiReact size={20} />
                  <SiRedux size={20} />
                  <SiSequelize size={20} />
                  <SiExpress size={20} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
