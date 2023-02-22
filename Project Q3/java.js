//this is an object
function player() {
    //define its position
    this.x = w/2
    this.y = h/2
    //gravity
    this.gravity = 0.5
    //oppose gravity
    this.lift = -20
    //velocity
    this.velocity = 0
    this.height = 50
    this.width = 50

    //build a function to declare what I look like
    this.show = function() {
        fill(255, 0, 0)
        rect(this.x, this.y, this.width, this.height)
    }

    this.up = function() {
        //take initial velocity and modify by opposing gravity
        this.velocity += this.lift
    }

    this.left = function() {
        this.x -= 10
    }

    this.down = function() {
        this.velocity -= this.lift
    }

    this.right = function() {
        this.x += 10
    }

    this.update = function() {
        this.velocity += this.gravity
        this.y += this.velocity
        //air resistance
        this.velocity *= 0.9
        //stop jumper from leaving the floor
        if (this.y + 50 > h) {
            this.y = h - 50
            this.velocity = 0
        }
        //this will prevent the jumper from leaving the ceiling
        if (this.y < 0) {
            this.y = 0
        }
    }
}