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
  SiSequelize,
  SiExpress,
} from 'react-icons/si';

export default function Skills() {
  return (
    <div id='SKILLS' className={`${s.skills}`}>
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
                HTML5
                <SiHtml5 />
              </div>
              <div className={`${s.table_label}`}>
                CSS3
                <SiCss3 />
              </div>
              <div className={`${s.table_label}`}>
                Postgres
                <SiPostgresql />
              </div>
              <div className={`${s.table_label}`}>
                Sequelize
                <SiSequelize />
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
              <div className={`${s.table_label}`}>Punctual</div>
              <div className={`${s.table_label}`}>Focused</div>
              <div className={`${s.table_label}`}>Committed</div>
              <div className={`${s.table_label}`}>Attentive to detail</div>
              <div className={`${s.table_label}`}>Team-player</div>
              <div className={`${s.table_label}`}>Good communicator</div>
              <div className={`${s.table_label}`}>Adaptive</div>
              <div className={`${s.table_label}`}>Troppo</div>
              <div className={`${s.table_label}`}>Forte</div>
              <div className={`${s.table_label}`}>Ao</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
