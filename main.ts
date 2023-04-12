enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    music.playMelody("C G D E C5 G D A ", 120)
    basic.showString("ana jayie")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("good night")
    basic.showLeds(`
        . # . # .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    music.playMelody("C D E F G F D C ", 120)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.B, function () {
    DEGREES = input.compassHeading()
    if (DEGREES < 45) {
        basic.showString("N")
    } else if (DEGREES < 135) {
        basic.showString("E")
    } else if (DEGREES < 225) {
        basic.showString("S")
    } else if (DEGREES < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
input.onGesture(Gesture.Shake, function () {
    timer = 0
    basic.showIcon(IconNames.Surprised)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showArrow(randint(0, 6))
})
let timer = 0
let DEGREES = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    if (input.temperature() < 10 || input.temperature() > 20) {
        if (input.lightLevel() < 51) {
            basic.showString("HELP!")
        }
    }
})
basic.forever(function () {
    if (input.temperature() > 20) {
        basic.showLeds(`
            # # . # #
            # # # # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (input.temperature() < 15) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
    }
})
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        if (timer == 30) {
            basic.showIcon(IconNames.Asleep)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
        }
        if (timer == 40) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
            music.setBuiltInSpeakerEnabled(false)
            while (false) {
                basic.showIcon(IconNames.Skull)
            }
        }
    }
})
