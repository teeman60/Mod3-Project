
// loop();

const url = 'http://localhost:3000/users'
const div = document.createElement('div')
const body = document.querySelector("body")
const canvas = document.querySelector("#bird")
// const btn = document.createElement('button')
// btn.innerText = "Start Game"


const usersArray = []

fetch(url)
    .then(res => res.json())
    .then(users =>{
        for(const user of users){
            usersArray.push(user)
        }
    })

let currentUser = ""

let currentUser1 


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
                    <input type="submit">
                </form>
                
                `

                // <option value="volvo">Volvo</option>
                // <option value="saab">Saab</option>
                // <option value="fiat">Fiat</option>
                // <option value="audi">Audi</option>

            

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



const form = document.querySelector('.login-form')

form.addEventListener('submit', (e) => {
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
        canvas.style.display = "block"
        // div.style.display = "none"  
        start()
     
        fetch(url, options)
    }
    else{
        alert("USER ALREADY EXISTS")
    }
   
})


const nameselect = document.querySelector('.user-select')

nameselect.addEventListener('submit', (e) => {
    e.preventDefault()
    canvas.style.display = 'block'

    currentUser = document.querySelector("#user-menu").value

    currentUser1 = ''

    fetch(url)
    .then(res => res.json())
    .then(users =>{
        currentUser1 = users.find(user => user.username == currentUser)
        // console.log(currentUser1)
    })


    start()
})

function start() {

    localStorage.setItem("best", 0);
    
    loop();

}


// const updatedScore = document
// options = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         highest_score: updatedScore
//     })
// }

// fetch(url, options)
//     .then(res => res.json())
//     .then(score =>
//         {
//             highest_score = updatedScore
//         })
