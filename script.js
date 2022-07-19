
/* Creates grid wit default value when screen starts*/
let defaultn = 16;
createGrid(defaultn);
function startButton() {
     /* Asks for Grid size and Creates Grid*/
     let n = window.prompt("enter div number(1-100):", '')
     if (n < 101) {
          container.innerHTML = '';
          createGrid(n)
     } else {
          alert("value must be less than 100. Try Again!")
     }
}

function createGrid(n) {
     /*Creates grid*/
     container.innerHTML =
          `<section class="row">${"<div class='cell'></div>".repeat(n)}</section>`
               .repeat(n);
}

function drawBlack() {
     /*Colours Grid cell with black*/
     const cells = document.querySelectorAll('div');
     cells.forEach((div) => {
          div.addEventListener('mouseover', () => {
               div.style.backgroundColor = ''
               div.setAttribute('id', 'black');
          });
     })
}
function createRandomRGB() {
     /*creates Random colour*/
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function drawRandom() {
      /*Colours Grid cell with random colour*/
     const cells = document.querySelectorAll('div');
     cells.forEach((div) => {
          div.addEventListener('mouseover', () => {
               let cellColour = createRandomRGB();
               div.removeAttribute('id');
               div.style.backgroundColor = cellColour
          });
     })

}
function drawPencil() {
      /*Colours Grid cell in each pass*/
     const cells = document.querySelectorAll('div');
     cells.forEach((div) => {
          div.addEventListener('mouseover', () => {
               div.removeAttribute('id');
               div.style.backgroundColor = ''
               if (!(div.classList.contains('black10'))) {
                    div.classList.add('black10');
               } else {
                    if (div.classList.contains('black20')) {
                         div.classList.remove('black20')
                         div.classList.add('black30')

                    } else if (div.classList.contains('black30')) {
                         div.classList.remove('black30')
                         div.classList.add('black40')

                    } else if (div.classList.contains('black40')) {
                         div.classList.remove('black40')
                         div.classList.add('black50')

                    } else if (div.classList.contains('black50')) {
                         div.classList.remove('black50')
                         div.classList.add('black60')

                    } else if (div.classList.contains('black60')) {
                         div.classList.remove('black60')
                         div.classList.add('black70')

                    } else if (div.classList.contains('black70')) {
                         div.classList.remove('black70')
                         div.classList.add('black80')

                    } else if (div.classList.contains('black80')) {
                         div.classList.remove('black80')
                         div.classList.add('black90')

                    } else if (div.classList.contains('black90')) {
                         div.classList.remove('black90')
                         div.classList.add('black100')

                    }
                    else if (div.classList.contains('black10')) {
                         div.classList.remove('black10')
                         div.classList.add('black20')
                    }
               }
          });
     })
}
