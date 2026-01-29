import s from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div id='home' className={`${s.home}`}>
      <img className={`${s.pic}`} src='/images/profile_pic2.jpg' alt='' />
      <h2>Leonardo Marussig</h2>
      <About />
    </div>
  );
}

function About() {
  return (
    <div id='about' className={`${s.about}`}>
      <p>
        Versatile full-stack engineer with a strong focus on building scalable
        web applications and experienced in delivering end-to-end solutions.
        Proven track record of developing both internal and external platforms,
        automating workflows, and integrating third-party APIs to drive business
        growth and efficiency. Skilled in functional and object-oriented
        programming, data visualization, and creating robust systems through
        testing and CI/CD best practices.
      </p>
    </div>
  );
}
