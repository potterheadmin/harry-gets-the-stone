sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    spell.destroy()
    Death_Eater.destroy(effects.fire, 200)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spell = sprites.createProjectileFromSprite(img`
. . . e e e . . . 
. . 5 4 5 5 . . . 
. e 4 5 f 5 5 e . 
e 4 4 4 f f 5 e e 
4 4 f 5 4 4 5 5 e 
e 4 f f 4 5 f e 5 
. e 5 5 e 4 4 5 . 
. . e e e e . . . 
. . . e . . . . . 
`, Harry, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Death_Eater.destroy(effects.warmRadial, 200)
    info.changeLifeBy(-1)
})
let Death_Eater: Sprite = null
let spell: Sprite = null
let Harry: Sprite = null
scene.setBackgroundColor(12)
Harry = sprites.create(img`
. . f f f f f f f f f . . . 
. f f f f f f f f f f f . . 
. f f f f 4 f f f f f f f . 
f f f f 4 2 f f f f f f f . 
f f f f 4 2 2 f f f f f f f 
f f f 4 4 4 2 4 4 4 f f f f 
f f f f f f 4 4 f f f f f f 
f f 4 4 7 f f f f 4 4 f f f 
f f 4 4 7 f 4 4 f 4 4 7 f f 
f f 4 4 7 f 4 4 f 4 4 7 f f 
f f f f f f 4 4 f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 f 
. . 4 4 4 2 2 2 2 4 4 4 . . 
. . . 4 4 2 2 2 2 4 4 . . . 
. . . . 4 4 4 4 4 4 . . . . 
`, SpriteKind.Player)
controller.moveSprite(Harry)
Harry.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Death_Eater = sprites.create(img`
. . f f 5 5 5 f f . . 
. f 5 f f f f f 5 f . 
5 f 5 5 5 5 5 5 5 f 5 
f f f f 5 5 5 f f f f 
5 5 f f f f f f f 5 5 
f 5 f 5 5 f 5 5 f 5 f 
f 5 5 f f f f f 5 5 f 
f f 5 f 5 5 5 f 5 f f 
f f 5 5 f 5 f 5 5 f f 
. 5 f 5 5 f 5 5 f 5 . 
. . f f 5 f 5 f f . . 
. . . f 5 5 5 f . . . 
`, SpriteKind.Enemy)
    Death_Eater.setVelocity(-100, 0)
    Death_Eater.setPosition(150, Math.randomRange(0, 120))
})
