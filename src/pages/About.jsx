import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Matin</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Web Developer from Iran, born on September 1999 who's really interested in developing cool, modern websites by becoming professional in software engineering technologies.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>Spearheaded my freelance journey in web development for five years, with a notable period of about two years engaging in collaborative ventures alongside knowledgeable peers in adjacent computer fields like graphic design, digital marketing, SEO tactics, and accounting principles, fueling mutual growth and shared success:</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience)=>(
              <VerticalTimelineElement>
                <div>
                  <h3>
                    {experience.title}
                  </h3>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

    </section>
  )
}

export default About