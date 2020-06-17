
// CONSTANTS
const url = 'http://localhost:3000/users'
const div = document.createElement('div')
const body = document.querySelector("body")
const canvas = document.querySelector("#bird")
const usersArray = []
const scoresUrl = 'http://localhost:3000/scores'

fetch(url)
    .then(res => res.json())
    .then(users =>{
        for(const user of users){
            usersArray.push(user)
        }
    })

let currentUser = ""
let player = ''


// HEADER
const head = document.querySelector('head')
const section = document.createElement('section')
section.setAttribute('id', 'game-header')
const img = document.createElement('img')
img.src = 'http://www.canadianshakespeares.ca/images/speareLogoFinal.jpg'
section.append(img)
body.append(section)




const menuDiv = document.createElement('div')

// FLAPPY BIRD CARD
const flappy = document.createElement('nav')
flappy.setAttribute('id', 'flappy-game')
flappy.setAttribute('class', 'card')

const flappyh2 = document.createElement('h2')
flappyh2.innerText = 'Flappy Bird'

const flappyimage = document.createElement('img')
flappyimage.setAttribute('class', 'game-avatar')
flappyimage.src = 'img/new_flappypng.png'

// flappyimage.classList.add('.game-avatar')
flappy.append(flappyh2, flappyimage)
// body.append(flappy)


// TETRIS CARD
const tetris = document.createElement('nav')
tetris.setAttribute('id', 'tetris-game')
tetris.setAttribute('class', 'card')

const tetrish2 = document.createElement('h2')
tetrish2.innerText = 'Tetris'

const tetrisimage = document.createElement('img')
tetrisimage.setAttribute('class', 'game-avatar')
tetrisimage.src = 'img/tetris.jpg'

tetris.append(tetrish2, tetrisimage)
// body.append(tetris)


// MOUNTAIN RUNNER CARD
const mountain = document.createElement('nav')
mountain.setAttribute('id', 'mountain-game')
mountain.setAttribute('class', 'card')

const mountainh2 = document.createElement('h2')
mountainh2.innerText = 'Mountain Runner'

const mountainimage = document.createElement('img')
mountainimage.setAttribute('class', 'game-avatar')
mountainimage.src = 'img/mountainr.jpeg'

mountain.append(mountainh2, mountainimage)
// body.append(mountain)


// PING-PONG CARD
const ping = document.createElement('nav')
ping.setAttribute('id', 'ping-game')
ping.setAttribute('class', 'card')

const pingh2 = document.createElement('h2')
pingh2.innerText = 'Ping-Pong'

const pingimage = document.createElement('img')
pingimage.setAttribute('class', 'game-avatar')
pingimage.src = 'img/ping.jpg'

ping.append(pingh2, pingimage)
// body.append(ping)

menuDiv.append(flappy, tetris, mountain, ping)
menuDiv.style.display = 'none'
body.append(menuDiv)


// SHOW LOG IN FORMS
div.innerHTML = `<form class="login-form">
                    <input
                    class="username-input"
                    type="text"
                    name="username"
                    placeholder="Username" required
                    />
                    <button class="login-button" type="submit">submit</button>
                </form>
                
                    
                
                <form class="user-select">
                    <label for="users">Select User:</label>
                    <select id="user-menu" name="user">              
                    </select>
                    button class="proceed-button" type="submit">Enter Game Mode</button>
                </form>
                
                `

body.append(div)

addList()
function addList(){

    const select = document.querySelector("#user-menu")

    fetch(url)
    .then(res => res.json())
    .then(users => {
        for (const user of users){
            
            const option = document.createElement("option")
            option.value = user.username
            option.innerText = user.username
            select.append(option)
        }
    })
}


// FORMS
const inputform = document.querySelector('.login-form')
inputform.addEventListener('submit', (e) => {
    e.preventDefault();

    const new_user = document.querySelector('.username-input')

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: new_user.value
        }) 
    }

    const found = usersArray.some(el => el.username === new_user.value);    
    if(!found){  
        // canvas.style.display = "block" 
        div.style.display = 'none'
        menuDiv.style.display = 'block'


        fetch(url, options)
        .then(res=>{getuser()})
        
        function getuser(){
            let currentUser1 = ''
               fetch(url)
                .then(res => res.json())
                .then(users =>{
                    console.log(users)
                    currentUser1 = users.find(user => user.username == new_user.value)
                    console.log(currentUser1)
                    selectGame(currentUser1)
            })
        }       
    }
    else{
        alert("USER ALREADY EXISTS")
    }
   
})


const nameselect = document.querySelector('.user-select')
nameselect.addEventListener('submit', (e) => {
    e.preventDefault()
    // canvas.style.display = 'block'
    div.style.display = 'none'
    menuDiv.style.display = 'block'


    currentUser = document.querySelector("#user-menu").value

    let currentUser1 = ''
    fetch(url)
    .then(res => res.json())
    .then(users =>{
        currentUser1 = users.find(user => user.username == currentUser)
        console.log(currentUser1)
        selectGame(currentUser1)
    })

})


// START SELECTED GAME

let selectedCard = ""

menuDiv.addEventListener('click', (e) => {
    e.preventDefault()
    
    if (e.target == ''){ //if target == nav element

        //then make selectedCard = nav.id
        selectedCard =    
    }
})

function selectGame(currentUser){
    if (selectedCard = "flappy-game"){
        startFlappy(currentUser)
    }
    else{
        selectGame(currentUser)
    }
    

}
function startFlappy(currentUser1) {

    player = currentUser1

    score.best = currentUser1.scores.find_by('game': )

    console.log(score.best)

    localStorage.setItem("best", score.best)
    
    console.log(parseInt(localStorage.getItem("best")))

    loop();

}
