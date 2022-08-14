import PhysicItem from "../../gloop/src/PhysicItem.js"

export default class Player extends PhysicItem{
    constructor(){
        super()
    }

    draw(g){
        g.color('limegreen').rect(this)
    }

    goUp(){this.vy = -1}
    goRight(){this.vx = 1}
    goDown(){this.vy = 1}
    goLeft(){this.vx = -1}
    stopUp(){this.vy = 0}
    stopRight(){this.vx = 0}
    stopDown(){this.vy = 0}
    stopLeft(){this.vx = 0}
}