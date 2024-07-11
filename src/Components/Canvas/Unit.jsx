export default class Unit {
    constructor(w, h){
        this.w = w;
        this.h = h;
        this.reset();
        this.constructed = true;
    }

    reset(){
        this.x = Math.round(this.w / 2);
        this.y = Math.round(this.h / 2);
        this.sx = this.x;
        this.sy = this.y;
        this.angle = 60 * this.getRandomInt(0, 5);
        this.size = 1;
        this.radian = (Math.PI / 180) * (this.angle + 90);
        this.speed = 2; 
        this.maxDistance = 100;
        this.time = 0;
        this.ttl = this.getRandomInt(180, 300);
    }
    draw(context){
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `hsl(0, 100%, 50%)`;
        // context.fillStyle = `rgb(156,156,156, 0.2)`;
        context.fill();
        context.closePath();
        context.restore();
    }
    update(){
		let dx = this.sx - this.x;
		let dy = this.sy - this.y;
		let distance = Math.sqrt(dx * dx + dy * dy);

		if (distance >= this.maxDistance) {
			if (this.getRandomInt(0, 1)) {
				this.angle += 60;
			} else {
				this.angle -= 60;
			}

			this.radian = (Math.PI / 180) * (this.angle + 90);
			this.sx = this.x;
			this.sy = this.y; 
		}
        this.x += this.speed * Math.sin(this.radian);
        this.y += this.speed * Math.cos(this.radian);

        if (this.time >= this.ttl || this.x < 0 || this.x > this.w || this.y < 0 || this.y > this.h) {
			this.reset();
		}

		this.time++;
	
    }

    getRandomInt(min, max){
        return Math.round(Math.random() * (max - min)) + min;
    }

}