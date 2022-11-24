input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # #
        . # . # .
        . # . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # .
        . # . # .
        . . . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showString("GO")
})
basic.showString("micro:cart")
basic.forever(function () {
	
})
