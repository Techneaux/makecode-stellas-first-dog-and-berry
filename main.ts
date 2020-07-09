input.onButtonPressed(Button.A, function () {
    images.createImage(`
        # # # # .
        # # # # .
        # # # # #
        . . . . #
        . . . . #
        `).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    images.createBigImage(`
        . . . . . . . . . .
        . . . . # # . . . .
        . . . # # # # . . .
        . . . # # # # . . .
        . . . # # # # . . .
        `).scrollImage(1, 200)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
})
images.createImage(`
    # # . . #
    # . # . .
    . . # . #
    # . . . #
    . . # . .
    `).showImage(0)
