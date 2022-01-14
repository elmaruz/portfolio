import s from '../css_modules/Projects.module.css';

export default function Projects() {
  return (
    <div id='PROJECTS' className={`${s.proj}`}>
      <div className={`${s.proj_cont}`}>
        <h1>Projects</h1>
        {/* <p className={`${s.proj_par}`}>This is the projects section</p> */}
        <div className={`${s.proj_sec}`}>
          <div className={`${s.proj_box}`}>
            <a href='https://elmaruz-weather.vercel.app'>
              <img
                src='/images/weather_app.png'
                alt=''
                className={`${s.thumbnail}`}
              />
            </a>
            <div className={`${s.proj_label}`}>Weather App</div>
          </div>
          <div className={`${s.proj_box}`}>
            <a href='https://videogames-ten.vercel.app'>
              <img
                src='/images/Videogames_disp.png'
                alt=''
                className={`${s.thumbnail}`}
              />
            </a>
            <div className={`${s.proj_label}`}>
              <h4>Videogames App</h4>
            </div>
          </div>
          <div className={`${s.proj_box}`}>
            <a href='https://ecommerce-pg-a5km89fb0-sergiogrimaldo.vercel.app/home'>
              <img src='/images/jsec.png' alt='' className={`${s.thumbnail}`} />
            </a>
            <div className={`${s.proj_label}`}>Sneakers E-Commerce</div>
          </div>
        </div>
      </div>
    </div>
  );
}
