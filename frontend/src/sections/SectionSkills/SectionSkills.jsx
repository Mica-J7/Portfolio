import Html from '@/assets/logo/html.png';
import Css from '@/assets/logo/css.png';
import Sass from '@/assets/logo/sass.png';
import JavaScript from '@/assets/logo/js.png';
import React from '@/assets/logo/react.png';
import Nodejs from '@/assets/logo/nodejs.png';
import Mongodb from '@/assets/logo/mongodb.png';
import Figma from '@/assets/logo/figma.png';
import Vite from '@/assets/logo/vite.png';
import Notion from '@/assets/logo/notion.png';
import Git from '@/assets/logo/git.png';
import GitHub from '@/assets/logo/github.png';
import './section-skills.scss';

function SectionSkills() {
  return (
    <section className="section-skills" id="skills">
      <h2>Mes compétences :</h2>
      <div className="all-sections">
        <div className="all-sections__front">
          <h3>Front-End :</h3>

          <div className="all-sections__front__top">
            <div className="group-logo">
              <img src={Html} alt="Logo HTML" />
              <span>HTML5</span>
            </div>
            <div className="group-logo">
              <img src={Css} alt="Logo CSS" />
              <span>CSS3</span>
            </div>
            <div className="group-logo">
              <img src={Sass} alt="Logo Sass" />
              <span>Sass</span>
            </div>
          </div>

          <div className="all-sections__front__bot">
            <div className="group-logo">
              <img src={JavaScript} alt="Logo JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="group-logo">
              <img src={React} alt="Logo React" />
              <span>React</span>
            </div>
          </div>
        </div>

        <div className="all-sections__back">
          <h3>Back-End :</h3>
          <div className="all-sections__back__group">
            <div className="group-logo">
              <img src={Nodejs} alt="Logo Node.js" />
              <span>Node.js</span>
            </div>
            <div className="group-logo">
              <img src={Mongodb} alt="Logo MongoDB" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <div className="all-sections__tools">
          <h3>Outils :</h3>
          <div className="all-sections__tools__top">
            <div className="group-logo">
              <img src={Figma} alt="Logo Figma" />
              <span>Figma</span>
            </div>
            <div className="group-logo">
              <img src={Vite} alt="Logo Vite" />
              <span>Vite</span>
            </div>
            <div className="group-logo">
              <img src={Notion} alt="Logo Notion" />
              <span>Notion</span>
            </div>
          </div>

          <div className="all-sections__tools__bot">
            <div className="group-logo">
              <img src={Git} alt="Logo Git" />
              <span>Git</span>
            </div>
            <div className="group-logo">
              <img src={GitHub} alt="Logo GitHub" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSkills;
