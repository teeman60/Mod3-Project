const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>

fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(trainers => {
        console.log(trainers)
        for(const trainer of trainers){
            
            makeTrainer(trainer)
        }
    })

function makeTrainer(trainer){

    console.log(trainer)

    const div = document.createElement('div')
    div.classList.add("card")
    div.dataset.id = trainer.id
    div.innerHTML = `<p>${trainer.name}</p>`

    const btn = document.createElement('button')
    btn.dataset.trainerId = trainer.id
    btn.innerText = "Add Pokemon"

    
    const ul = document.createElement('ul')
    for(const poke of trainer.pokemons){
        const li = document.createElement('li')
        li.append(`${poke.nickname} (${poke.species})`)

        const btn = document.createElement('button')
        btn.classList.add('release')
        btn.dataset.pokemonId = poke.id
        btn.innerText = "Release"

        li.append(btn)

        ul.append(li)
    }

    div.append(btn, ul)

    const main = document.querySelector('body main') 
    // console.log(main)
    main.append(div)

    

}

const mainSpace = document.querySelector("main")

mainSpace.addEventListener('submit', e =>{

    e.preventDefault

    // debugger
    
    if (e.target.childNode ===  ){

        fetch(POKEMONS_URL, options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                trainer_id: trainer_id
            })

        })
    }


})







