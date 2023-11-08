import './Experience.css';

function Experience () {
    return (
        <div className='Experience'>
            <div className='Experience-header'>
                <h1>Experience</h1>
                <div className='experience-line'></div>
            </div>
            <div className='Experience-div'>
                <h2>Software Developer at Josh Technology Group</h2>
                <p>Jan 2020 - Oct 2023</p>
                <ul>
                    <li>Designed and Developed 5+ features using Django, FastAPI, ReactJs, Redux, TypeScript, HTML, CSS.</li>
                    <li>Created a feature where company employees can refer candidates, giving the product a competitive edge in the market and driving a significant 5% sales boost.</li>
                    <li>Created an API for user registration in a Hackathon, leading to a substantial 15% increase in number of platform users.</li>
                    <li>Built API for CTA functionality. Implemented advanced logic to handle 30+ cases to calculate dynamic CTA values for different user types.</li>
                    <li>Integrated 20+ Django and FastAPI-developed RESTful APIs with ReactJS, Redux, TypeScript, and AngularJS front-end, ensuring seamless data flow and user experience while overcoming technical challenges.</li>
                    <li>Effectively used Git for code version control, enabling seamless collaboration with a 15+ member team and ensuring efficient code maintenance.</li>
                    <li>Collaborated in an Agile environment utilizing JIRA, actively engaging in daily stand-up meetings, sprint planning, reviews, and retrospectives to drive efficient project execution.</li>
                </ul>
            </div>
        </div>
    );
}

export default Experience;