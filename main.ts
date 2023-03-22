input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendValue("JOSHUA", 68)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
basic.showIcon(IconNames.Happy)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
