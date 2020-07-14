input.onButtonPressed(Button.A, function () {
    LCD1IN8.DisNumber(
    randint(1, 160),
    randint(1, 128),
    32,
    LCD1IN8.Get_Color(LCD_COLOR.BLUE)
    )
    LCD1IN8.LCD_Display()
})
input.onButtonPressed(Button.AB, function () {
    LCD1IN8.LCD_Clear()
    LCD1IN8.LCD_Display()
})
input.onButtonPressed(Button.B, function () {
    ran = randint(1, 104)
    LCD1IN8.LCD_SetBL(20)
    LCD1IN8.LCD_Display()
    LCD1IN8.LCD_Clear()
    LCD1IN8.LCD_Display()
    LCD1IN8.DisString(
    1,
    ran,
    "Space ",
    LCD1IN8.Get_Color(LCD_COLOR.MAGENTA)
    )
    LCD1IN8.LCD_Display()
    LCD1IN8.DisString(
    1,
    ran + 15,
    "The Final Frontier",
    LCD1IN8.Get_Color(LCD_COLOR.GRAY)
    )
    LCD1IN8.LCD_Display()
})
let ran = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(62)
LCD1IN8.LCD_Display()
LCD1IN8.DrawPoint(
randint(1, 160),
randint(1, 128),
LCD1IN8.Get_Color(LCD_COLOR.RED),
DOT_PIXEL.DOT_PIXEL_4
)
LCD1IN8.LCD_Display()
basic.forever(function () {
	
})
