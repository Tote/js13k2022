import PhysicItem from "../../gloop/src/PhysicItem.js"
export default class Soul extends PhysicItem{
    constructor( target ){
        super()
        this.target = target
        this.w = 5
        this.h = 5
        this.x = target.x + (Math.random() * 20) - 10
        this.y = target.y + target.h + (Math.random() * 20) - 10
    }

    draw(g){
        g
        .color('blue')
        .circle(this)
    }
    next(t){
        this.vx = this.target.vx
        this.vy = this.target.vy
        super.next() 
    }
}