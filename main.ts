let ju = 0
basic.forever(function () {
    ju = input.compassHeading()
    if (ju > 45 || ju < 315) {
        basic.showString("N")
    } else {
        basic.showString("")
    }
})
