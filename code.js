const container = document.querySelector('.container')



function generateGame() {
    for (let i = 0; i <100 ; i++) {

        container.innerHTML += `
        <div id="${[i]}" class="square" onclick="createGame(event)"></div>`
    }
}

generateGame()

function createGame(event) {
            if (event.target.id === '78') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '79') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '77') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '76') {
                event.path[0].classList.add('red')
            }



            else if  (event.target.id === '51') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '41') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '31') {
                event.path[0].classList.add('red')
            }



            else if  (event.target.id === '12') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '13') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '14') {
                event.path[0].classList.add('red')
            }

            else if  (event.target.id === '71') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '81') {
                event.path[0].classList.add('red')
            }

            else if  (event.target.id === '34') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '33') {
                event.path[0].classList.add('red')
            }



            else if  (event.target.id === '98') {
                event.path[0].classList.add('red')
            }
            else if  (event.target.id === '97') {
                event.path[0].classList.add('red')
            }


            else if  (event.target.id === '9') {
                event.path[0].classList.add('red')
            }


            else if  (event.target.id === '47') {
                event.path[0].classList.add('red')
            }


            else if  (event.target.id === '93') {
                event.path[0].classList.add('red')
            }


            else if  (event.target.id === '74') {
                event.path[0].classList.add('red')
            }


            else{
                event.path[0].classList.add('grey')
            }







}

