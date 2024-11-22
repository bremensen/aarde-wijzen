input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(200)
    basic.showArrow(ArrowNames.East)
    basic.pause(200)
    basic.showArrow(ArrowNames.South)
    basic.pause(200)
    basic.showArrow(ArrowNames.West)
})
basic.forever(function () {
	
})
