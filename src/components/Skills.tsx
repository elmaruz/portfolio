import s from '../css_modules/Skills.module.css';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiExpress,
  SiOpenai,
} from 'react-icons/si';

export default function Skills() {
  return (
    <div id='skills' className={`${s.skills}`}>
      <div className={`${s.skills_cont}`}>
        <h1>Skills</h1>
        <div className={`${s.skills_divvy}`}>
          <div className={`${s.table_cont}`}>
            <h3>Tech Skills</h3>
            <div className={`${s.table_box}`}>
              <div className={`${s.table_label}`}>
                Javascript
                <SiJavascript />
              </div>
              <div className={`${s.table_label}`}>
                Typescript
                <SiTypescript />
              </div>
              <div className={`${s.table_label}`}>
                React
                <SiReact />
              </div>
              <div className={`${s.table_label}`}>
                Redux
                <SiRedux />
              </div>
              <div className={`${s.table_label}`}>
                Node
                <SiNodedotjs />
              </div>
              <div className={`${s.table_label}`}>
                Postgres
                <SiPostgresql />
              </div>
              <div className={`${s.table_label}`}>
                OpenAI
                <SiOpenai />
              </div>
              <div className={`${s.table_label}`}>
                HTML5
                <SiHtml5 />
              </div>
              <div className={`${s.table_label}`}>
                CSS3
                <SiCss3 />
              </div>
              <div className={`${s.table_label}`}>
                Express
                <SiExpress />
              </div>
            </div>
          </div>
          <img
            src='/images/separator_white_horiz.png'
            alt=''
            className={`${s.sep}`}
          />
          <div className={`${s.table_cont}`}>
            <h3>Soft Skills</h3>
            <div className={`${s.table_box}`}>
              <div className={`${s.table_label2}`}>Punctual</div>
              <div className={`${s.table_label2}`}>Responsible</div>
              <div className={`${s.table_label2}`}>Committed</div>
              <div className={`${s.table_label2}`}>Self-starter</div>
              <div className={`${s.table_label2}`}>Team-player</div>
              <div className={`${s.table_label2}`}>Good communicator</div>
              <div className={`${s.table_label2}`}>Adaptive</div>
              <div className={`${s.table_label2}`}>Problem solver</div>
              <div className={`${s.table_label2}`}>Quick learner</div>
              <div className={`${s.table_label2}`}>Proactive</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
