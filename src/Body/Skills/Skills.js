import './Skills.css';
    
function Skills () {
    return (
        <div id="skills" className="Skills">
            <div className='Skills-header'>
                <h1>Skills</h1>
                <div className='skills-line'></div>
            </div>
            <div className="Skills-div">
                <div className='skill-div'>
                    <h2>Backend</h2>
                    <ul>
                        <li className='python'>Python</li>
                        <li className='django'>Django</li>
                        <li className='fastapi'>FastAPI</li>
                        <li className='java'>Java</li>
                        <li className='c'>C++</li>
                    </ul>
                </div>
                <div className='skill-div'>
                    <h2>Frontend</h2>
                    <ul>
                        <li className='javascript'>JavaScript</li>
                        <li className='typescript'>TypeScript</li>
                        <li className='reactjs'>React Js</li>
                        <li className='redux'>Redux</li>
                    </ul>
                </div>
                <div className='skill-div'>
                    <h2>Database</h2>
                    <ul>
                        <li className='postgresql'>PostgreSQL</li>
                        <li className='mysql'>MySQL</li>
                        <li className='elastic-search'>Elastic Search</li>
                    </ul>
                </div>
                <div className='skill-div'>
                    <h2>Tools</h2>
                    <ul>
                        <li className='git'>Git</li>
                        <li className='postman'>Postman</li>
                        <li className='github'>GitHub</li>
                        <li className='gitlab'>GitLab</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;