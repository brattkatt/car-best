radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 37)
        basic.pause(300)
    }
    if (receivedNumber == 1) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 12)
        basic.pause(20)
    }
    if (receivedNumber == 2) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 12)
        basic.pause(20)
    }
    if (receivedNumber == 3) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 20)
        basic.pause(500)
    }
})
radio.setGroup(99)
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    . . . . #
    # # # # #
    `)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
