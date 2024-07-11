
import "./Navbar.css"

export default function Navbar() {

  return (
    <header>
      <div className="logo">
        RT-Logo
      </div>

      <nav>
        <ul className="links">
          <li><a href='./'>Projects</a></li> 
          <li><a href='./'>Contact</a></li> 
        </ul>  
      </nav>
    </header>
  )
}


