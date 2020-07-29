function move () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # # . .
            . # # . .
            . # # . .
            . # # . .
            # . . # #
            `)
        pins.servoWritePin(AnalogPin.P1, 5)
        basic.pause(200)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . # # .
            . . # # .
            . # . # #
            `)
        pins.servoWritePin(AnalogPin.P1, 150)
        basic.pause(200)
    }
}
basic.showNumber(input.lightLevel())
basic.showNumber(input.lightLevel())
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.lightLevel() > 150) {
        basic.showNumber(input.lightLevel())
        move()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
