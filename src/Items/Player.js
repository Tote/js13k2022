import PhysicItem from "../../gloop/src/PhysicItem.js"

export default class Player extends PhysicItem{
    constructor(){
        super()
        this.maxV = 10
    }

    draw(g){
        g.color('limegreen').rect(this)
    }

    goUp(){this.vy = -this.maxV}
    goRight(){this.vx = this.maxV}
    goDown(){this.vy = this.maxV}
    goLeft(){this.vx = -this.maxV}
    stopUp(){this.vy = 0}
    stopRight(){this.vx = 0}
    stopDown(){this.vy = 0}
    stopLeft(){this.vx = 0}
}