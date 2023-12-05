import './Projects.css';
import todoImage from '../../images/todo.jpg';

function Projects () {
    const projects = [
        {
            key: 'project1',
            title: 'Microsoft To Do Clone',
            description: 'Designed and implemented a user-authenticated Task Management Application with robust features, including task creation, deletion, searching, scheduling, and updates.',
            imageUrl: todoImage,
            skills: ['Angular', 'TypeScript', 'Django', 'PostgreSQL'],
            github: 'https://github.com/Aasmeen/to_do_frontend'
        }
    ];
    return (
        <div id="projects" className="Projects">
            <div className='Projects-header'>
                <h1>Projects</h1>
                <div className='projects-line'></div>
            </div>
            <div className="projects-container">
                {projects.map((project)=>(
                    <div className="project-container" key={project.key}>
                        <div className="project-image-div">
                        <img src={project.imageUrl} alt={project.title} className="project-image"/>
                        </div>
                        <div className="project-data">
                            <h1>{project.title}</h1>
                            <div className="prject-description">
                                {project.description}
                            </div>
                            <div className='project-skills-div'>
                                {
                                    project.skills.map((skill)=>(
                                        <div className='project-skill' key={skill}>{skill}</div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    project.github && 
                                    <a className='github-icon' href={project.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={"20px"}>
                                            <title>GitHub</title>
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
