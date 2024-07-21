import { useRef, useEffect } from "react";
import Particle from "./Particle";
import "./Projects.css"

export default function Projects() {

    const canvasRef = useRef();

    let options = {
		particleColor: "rgba(255,255,255)",
		lineColor: "rgba(0,181,255)", // LIGHT BLUE
        // lineColor: "rgba(255,101,47)",  //DARK ORANGE
		particleAmount: 30,
		defaultRadius: 1,
		variantRadius: 1,
		defaultSpeed: .05,
		variantSpeed: .1,
		linkRadius: 200
	};

    let rgb = options.lineColor.match(/\d+/g);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        
        let animationID;

        const particles = [];
        for (let i = 0; i < options.particleAmount; i++)
            particles.push(new Particle(options, w, h));
        

        const renderer = () => {
            context.clearRect(0,0,w,h);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw(context);
            }
            for (let i = 0; i < particles.length; i++) {
                for (let j = 0; j < particles.length; j++) {
                    let distance = Math.sqrt(Math.pow(particles[j].x - particles[i].x, 2) + Math.pow(particles[j].y - particles[i].y, 2));
                    let opacity = 1 - distance / options.linkRadius;
                    if (opacity > 0) {
                        context.lineWidth = 0.5;
                        context.strokeStyle = 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+opacity+')';
                        context.beginPath();
                        context.moveTo(particles[i].x, particles[i].y);
                        context.lineTo(particles[j].x, particles[j].y);
                        context.closePath();
                        context.stroke();
                    }
                }
            }

            animationID = window.requestAnimationFrame(renderer);
        }
        renderer();
        
        const resizeReset = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        resizeReset();
        window.addEventListener("resize", resizeReset);
        
        return () => window.cancelAnimationFrame(animationID);
    }, []);

    return (
        <div id="projects">
            <div className="medium-text">Coming Soon</div>
            <canvas ref={canvasRef} />
        </div>
    );
}