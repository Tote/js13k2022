import PhysicItem from "../../gloop/src/PhysicItem.js"
export default class Enemy extends PhysicItem{
    constructor(){
        super()
    }

    draw(g){
        g
        .color('red')
        .circle(this)
    }
    next(t){
        super.next(t)
        this.vx = Math.sin(this.y * 2 * Math.PI / 100) * 10
    }
}