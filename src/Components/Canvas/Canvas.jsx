import { useRef, useEffect } from "react";
import Unit from "./Unit";
import "./Canvas.css"

export default function Canvas() {

    const canvasRef = useRef();
    let unitCount = 10;
    let unitTimer = 200;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        
        let animationID;
        let units = [];
        

        for (let i = 0; i < unitCount; i++){
            setTimeout(() => {
                units.push(new Unit(w, h));
            
            }, i * unitTimer);
        }

        const renderer = () => {
            // context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.fillStyle = "rgba(0, 0, 0, .05)";
            context.fillRect(0,0,w,h);

            for (let i = 0; i < units.length; i++){
                units[i].update();
                units[i].draw(context);
            }

            animationID = window.requestAnimationFrame(renderer);
        }
        renderer();
        

        const resizeReset = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            console.log(w, h);
        }
        resizeReset();
        window.addEventListener("resize", resizeReset);
        
        return () => window.cancelAnimationFrame(animationID);
    }, []);


    return <canvas id="canvas" ref={canvasRef} />;
}