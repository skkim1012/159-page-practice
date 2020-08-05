let 거리 = 0
basic.forever(function () {
    거리 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (거리 < 4) {
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
