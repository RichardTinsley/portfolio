import "./Hero.css"

export default function Hero() {
    return (
        <div id="hero">
            <div id="hero-card">
                <div id="hero-text">
                    <div className="large-text">Software Engineer <br /> and Web Developer </div>
                    <div className="medium-text">With over 10 years of experience</div>  
                    <a href="#projects">
                        <button id="contact"> Projects </button>      
                    </a>
                </div>
            </div>
        </div>
    )
}