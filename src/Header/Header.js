import './Header.css';
import { HashLink } from 'react-router-hash-link';


function Header () {

    return (
        <div className='header-div'>
            <ul className='header'>
                <HashLink className="headerLink" smooth to='#about'>About</HashLink>
                <HashLink className="headerLink" smooth to='#skills'>Skills</HashLink>
                <HashLink className="headerLink" smooth to='#experience'>Experience</HashLink>
                <HashLink className="headerLink" smooth to='#projects'>Projects</HashLink>
            </ul>
        </div>
    );

}

export default Header;