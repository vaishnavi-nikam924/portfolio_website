import Info from "../../components/Info";
import Cv from '../../pdf/Vaishnavi Nikam Resume VF1.pdf'
import { RiDownload2Line } from 'react-icons/ri'
import Image from '../../assets/Profile-image.jpg'
import './about.css';
import { skill } from '../../Data';
import SkillsItem from '../../components/SkillsItem';
import { resume } from '../../Data';
import ResumeItem from '../../components/ResumeItem';
const About = () => {
  return (
    <main className="section container ">
      <h2 className="section-title">About Me</h2>


      <div className="about-container">
        <section className="resume">
          <h3 className="section-subtitle subtitle-center">
            Experience & Education
          </h3>
          <div className="resume-container grid">
            <div className="resume-group grid">
              {resume.map((val) => {
                if (val.category === 'experience') {
                  return <ResumeItem key={val.id} {...val} />
                }
              })}
            </div>

            <div className="resume-group grid">
              {resume.map((val) => {
                if (val.category === 'education') {
                  return <ResumeItem key={val.id} {...val} />
                }
              })}
            </div>
          </div>
        </section>

        <div className="seperator"></div>

        <section className="skills">
          <h3 className="section-subtitle subtitle-center">My Skills</h3>
          <div className="skills-container grid">
            <div className="skills-group">
              <h3 className="skill-title"></h3>
              <div className="skills-items grid">
                {skill.map((val) => {
                  if (val.category === 'developer') {
                    return <SkillsItem Key={val.id} {...val} />
                  }
                })}
              </div>
            </div>

          </div>
        </section>
      </div>

    </main>
  )
}
export default About;
