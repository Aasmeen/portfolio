import './Experience.css';

function Experience () {
    const experiences = [
        {
            key: 'experience1',
            title: 'Software Developer at Josh Technology Group',
            date: 'Jan 2020 - Oct 2023',
            keyPoints: [
                'Deleveloped and maintained a large scale cross browser recruitment platform that connects recruiter to candidates. Having features to conduct Placement Drives, Recruitment Drives, Assessments, Hackathons and even extend the offer to the candidates.',
                'Effectively used Git for code version control, enabling seamless collaboration with a 15+ member team and ensuring efficient code maintenance.',
                'Collaborated in an Agile environment utilizing JIRA, actively engaging in daily stand-up meetings, sprint planning, reviews, and retrospectives to drive efficient project execution.',
            ],
        }
    ];
    const resumeLink = 'https://drive.google.com/file/d/15z6_LI0ntvHxKya4ow9-fE07IfZxhafg/view?usp=sharing';
    return (
        <div id="experience" className='Experience'>
            <div className='Experience-header'>
                <h1>Experience</h1>
                <div className='experience-line'></div>
            </div>
            {
                experiences.map((experience)=>(
                    <div className='Experience-div' key={experience.key}>
                        <h2>{experience.title}</h2>
                        <p>{experience.date}</p>
                        <ul>
                            {experience.keyPoints.map((keyPoint, index)=>(
                                <li key={index}>{keyPoint}</li>
                            ))}
                        </ul>
                    </div>
                ))
            }
            {
                resumeLink && <div className="view-resume-div">
                    <a href={resumeLink} target='_blank' rel="noreferrer"><button>View Resume</button></a>
                </div>
            }
        </div>
    );
}

export default Experience;