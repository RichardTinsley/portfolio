export default class Particle {
    constructor(options, w, h){
        this.w = w;
        this.h = h;
		this.x = Math.random() * this.w;
		this.y = Math.random() * this.h;
		this.color = options.particleColor;
		this.radius = options.defaultRadius + Math.random() * options.variantRadius;
		this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
		this.directionAngle = Math.floor(Math.random() * 360);
		this.vector = {
			x: Math.cos(this.directionAngle) * this.speed,
			y: Math.sin(this.directionAngle) * this.speed
		}
    }

    draw(context){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.closePath();
        context.fillStyle = this.color;
        context.fill();
    }
    update() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
    }
    border() {
        if (this.x >= this.w || this.x <= 0) {
            this.vector.x *= -1;
        }
        if (this.y >= this.h || this.y <= 0) {
            this.vector.y *= -1;
        }
        if (this.x > this.w) this.x = this.w;
        if (this.y > this.h) this.y = this.h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
    }
}