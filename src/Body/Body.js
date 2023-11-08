import './Body.css';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function Body () {
    return (
        <div className='body-div'>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
        </div>
    );
}

export default Body;