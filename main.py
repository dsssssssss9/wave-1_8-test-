def on_button_pressed_a():
    LCD1IN8.dis_number(randint(1, 160),
        randint(1, 128),
        32,
        LCD1IN8.Get_Color(LCD_COLOR.BLUE))
    LCD1IN8.LCD_Display()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    LCD1IN8.LCD_Clear()
    LCD1IN8.LCD_Display()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    LCD1IN8.LCD_SetBL(20)
    LCD1IN8.LCD_Display()
    LCD1IN8.dis_string(randint(1, 146),
        randint(1, 105),
        "Space The Final Frontier",
        LCD1IN8.Get_Color(LCD_COLOR.MAGENTA))
    LCD1IN8.LCD_Display()
input.on_button_pressed(Button.B, on_button_pressed_b)

LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(62)
LCD1IN8.LCD_Display()
LCD1IN8.draw_point(randint(1, 160),
    randint(1, 128),
    LCD1IN8.Get_Color(LCD_COLOR.RED),
    DOT_PIXEL.DOT_PIXEL_4)
LCD1IN8.LCD_Display()

def on_forever():
    pass
basic.forever(on_forever)
