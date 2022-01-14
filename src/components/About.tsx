import s from '../css_modules/About.module.css';

export default function About() {
  return (
    <div id='ABOUT' className={`${s.about}`}>
      <div className={`${s.about_cont}`}>
        <h1>About</h1>
        <div className={`${s.about_par}`}>
          <p>
            Versatile and enthusiastic web developer, committed to delivering
            scalable and efficient solutions.
            <br />
            <br />
            An adaptable and quick learner, always keeping up with the latest
            developments in the field. <br />
            <br />
            My background in film helps me to effectively translate client needs
            into visible results.
          </p>
        </div>
      </div>
    </div>
  );
}
