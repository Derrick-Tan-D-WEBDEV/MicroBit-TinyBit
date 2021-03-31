let distance = 0
Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
basic.forever(function () {
    distance = Tinybit.Ultrasonic_Car()
    if (distance < 15) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 60)
        basic.pause(200)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 60)
        basic.pause(200)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
    }
})
