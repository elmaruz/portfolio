import s from '../css_modules/Projects.module.css';

export default function Projects() {
  return (
    <div id='PROJECTS' className={`${s.proj}`}>
      <div className={`${s.proj_cont}`}>
        <h1>Projects</h1>
        <p className={`${s.proj_par}`}>This is the projects section</p>
      </div>
    </div>
  );
}
