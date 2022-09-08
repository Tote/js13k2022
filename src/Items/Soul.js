import PhysicItem from "../../gloop/src/PhysicItem.js"
export default class Soul extends PhysicItem{
    constructor( target ){
        super()
        this.target = target
        this.w = 5
        this.h = 5
        this.x = target.x + target.w/2
        this.y = target.y + target.h/2
        this.offsetX = Math.random() * 50
        this.offsetY = Math.random() * 50
        this.targetDistance = 100
        this.springConstant = .1
        this.damping        = 1
    }

    draw(g){
        g
        .color('blue')
        .circle(this)
    }
    next(t){
        const dx = this.target.x - this.x + this.offsetX
        const dy = this.target.y - this.y + this.offsetY
        const distance = this.distanceTo(this.target)
        const force = -this.springConstant * (this.targetDistance - distance)
        const forceX = force * dx / distance
        const forceY = force * dy / distance
        
        this.ax = forceX - this.damping * (this.vx - this.target.vx)
        this.ay = forceY - this.damping * (this.vy - this.target.vy)
        super.next() 
        
    }
}