import GameCanvas       from '../gloop/src/GameCanvas.js'
import Graphics         from '../gloop/src/Graphics.js'
import Gloop            from '../gloop/src/Gloop.js'
import GloopCollection  from '../gloop/src/GloopCollection.js'
import BrowserEvent     from '../gloop/src/BrowserEvent.js'
import Player           from './Items/Player.js'
import Enemy            from './Items/Enemy.js'
import Soul             from './Items/Soul.js'

/*******************************************************************************
    OBJECT SETUP                                                                              
*******************************************************************************/
const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const game      = new Gloop(graphics)

const playerMove  = new BrowserEvent('keydown')
const playerStop  = new BrowserEvent('keyup')

const player = new Player()
player.x = canvas.width()/2 - 25
player.y = canvas.height() - 200
player.w = 50
player.h = 50
game.item(player)

const testEnemy = new Enemy()
testEnemy.x = 100 
testEnemy.y = 10
testEnemy.w = 10
testEnemy.h = 10
testEnemy.vx = 0
testEnemy.vy = 1
game.item(testEnemy)

const souls = new GloopCollection()
const soul = new Soul()
soul.stayAt({x:100, y:40})
souls.add(soul)
game.item(soul)

/*******************************************************************************
    CONTROLS                                                                              
*******************************************************************************/
playerMove.rule({
    when:  e => e.key == 'ArrowUp',
    then: () => player.goUp()
})
playerMove.rule({
    when: e => e.key == 'ArrowRight',
    then: () => player.goRight()
})
playerMove.rule({
    when: e => e.key == 'ArrowDown',
    then: () => player.goDown()
})
playerMove.rule({
    when: e => e.key == 'ArrowLeft',
    then: () => player.goLeft()
})
playerStop.rule({
    when:  e => e.key == 'ArrowUp',
    then: () => player.stopUp()
})
playerStop.rule({
    when: e => e.key == 'ArrowRight',
    then: () => player.stopRight()
})
playerStop.rule({
    when: e => e.key == 'ArrowDown',
    then: () => player.stopDown()
})
playerStop.rule({
    when: e => e.key == 'ArrowLeft',
    then: () => player.stopLeft()
})
/*******************************************************************************
    GAME RULES                                                                              
*******************************************************************************/
game.rule({
    when: () => player.collidesWith(testEnemy),
    then: () => {
        testEnemy.stop()
        console.log('game over')
    }
})
game.rule({
    when: () => true,
    then: () => souls.all( soul => {
        if(soul.distanceTo(testEnemy) < 200){
            soul.follow(testEnemy)
        }
    })
})

game.run()