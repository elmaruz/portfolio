import s from '../css_modules/Home.module.css';

export default function Home() {
  return (
    <div id='HOME' className={`${s.home}`}>
      <img className={`${s.pic}`} src='/images/profile_pic2.jpg' alt='' />
      <h2>Leonardo Marussig</h2>
      <h3>Full-Stack Developer</h3>
    </div>
  );
}
