let ju = 0
basic.forever(function () {
    ju = input.compassHeading()
})
basic.forever(function () {
    if (ju < 225 && ju > 135) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        if (ju > 225 && ju < 315) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else {
            if (ju > 45 && ju < 135) {
                basic.showLeds(`
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    `)
            } else {
                if (ju < 315) {
                    basic.showLeds(`
                        . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
                        `)
                } else {
                    if (ju > 45) {
                        basic.showLeds(`
                            . . # . .
                            . # # # .
                            # . # . #
                            . . # . .
                            . . # . .
                            `)
                    } else {
                    	
                    }
                }
            }
        }
    }
})
