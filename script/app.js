(function () {
    `use strict`
     var colors = generateRandomColors(6)
 
     var squares = document.querySelectorAll(`.square`)
     var pickedColor = pickColor()
     var colorDisplay = document.getElementById(`colorDisplay`)
     var messageDisplay = document.querySelector(`#message`)
     var heading = document.querySelector(`h1`)
     var reload = document.querySelector(`#reload`)
 
     colorDisplay.textContent = pickedColor
 
     for (var i = 0; i < squares.length; i++) {
         squares[i].style.backgroundColor = colors[i]
 
         squares[i].addEventListener(`click`, function () {
             var clickedColor = this.style.backgroundColor
             if (clickedColor === pickedColor) {
                 messageDisplay.textContent = `ไชโย ถูกต้องแล้ว แล้วมาเล่นใหม่นะ`
                 heading.style.backgroundColor = clickedColor
                 changeColor(clickedColor)
             } else {
                 this.style.backgroundColor = "#232323"
                 messageDisplay.textContent = `ไม่ถูกต้อง ลองใหม่นะ`
             }
         })
     }
 
     reload.addEventListener(`click`, function () {
         location.reload()
     })
 
     function generateRandomColors(num) {
         var arr = []
         for (var i = 0; i < num; i++) {
             arr.push(randomColor())
         }
         return arr
     }
     function randomColor() {
         var red = Math.floor(Math.random() * 256)
         var green = Math.floor(Math.random() * 256)
         var blue = Math.floor(Math.random() * 256)
         return `rgb(` + red + `, ` + green + `, ` + blue + `)`
     }
     function pickColor() {
         var random = Math.floor(Math.random() * colors.length)
         return colors[random]
     }
     function changeColor(color) {
         for (var i = 0; i < colors.length; i++) {
             squares[i].style.backgroundColor = color
         }
     }
 
 })()
 