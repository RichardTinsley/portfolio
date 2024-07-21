import "./Header.css"
import Github from "./Github"
import LinkedIn from "./LinkedIn"
import Youtube from "./Youtube"

export default function Header() {

    return (
        <header>
            <div className="logo">
                Richard Tinsley
            </div>

            {/* <nav>
                <ul className="links">
                    <li><a href='./'>Skills</a></li> 
                    <li><a href='./'>Qualifications</a></li> 
                    <li><a href='./'>Projects</a></li> 
                    <li><a href='./'>About</a></li> 
                    <li><a href='./'>Contact</a></li> 
                </ul>  
            </nav> */}

            <div className="socials">
                <a href="https://www.linkedin.com/in/richard-tinsley-aa5180186/">
                    <LinkedIn/>
                </a>
                <a href="https://github.com/RichardTinsley">
                    <Github/>
                </a>
                <a href="https://www.youtube.com/@richardtinsley7715">
                    <Youtube/>
                </a>
            </div>
        </header>
    )
}