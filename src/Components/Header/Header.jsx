import "./Header.css"

export default function Header() {

    return (
        <header>
            <div className="logo">
                RT
            </div>

            <nav>
                <ul className="links">
                    <li><a href='./'>Skills</a></li> 
                    <li><a href='./'>Qualifications</a></li> 
                    <li><a href='./'>Projects</a></li> 
                    <li><a href='./'>About</a></li> 
                    <li><a href='./'>Contact</a></li> 
                </ul>  
            </nav>

            <div className="socials">
                    a
                <a className="">
                    {/* <img src={discord} width={190} height={40} alt="discord" /> */}
                </a>
            </div>
        </header>
    )
}