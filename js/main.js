// Button listener
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    try{
        const response = await fetch('https://api.pokemontcg.io/v2/cards') //request data from api url
        if (!response.ok){ // if response is bad
            console.log('Bad response!') //console log it
        }else{
            const data = await response.json() // if good then retrieve the data
            
            // console.log(data) // print data from api

            
            
            // RANDOMIZE POKEMON CHOICES //
            
            // Randomize pokemon cards and assign variables
            const randomNumber1 = Math.floor(Math.random() * 250)
            const randomNumber2 = Math.floor(Math.random() * 250)
            console.log(data.data[randomNumber1])
            console.log(data.data[randomNumber2])

            // Pokemon 1 data
            const pokemonOneImage = document.querySelector('#p1-img')
            const pokemonOneName = data.data[randomNumber1].name
            pokemonOneImage.src = data.data[randomNumber1].images.small
            
            // Pokemon 2 data
            const pokemonTwoImage = document.querySelector('#p2-img')
            const pokemonOneTwo = data.data[randomNumber2].name
            pokemonTwoImage.src = data.data[randomNumber2].images.small

            
            // POKEMON BATTLE RANDOMIZER //

            // Assign move variables
            const p1m1 = document.querySelector('#pokemon1move1')
            const p2m1 = document.querySelector('#pokemon2move1')
            const p1m2 = document.querySelector('#pokemon1move2')
            const p2m2 = document.querySelector('#pokemon2move2')
            
            // Assign attacks/abilities variables for Pokemon 1
            const attacksArrayPokemonOne = data.data[randomNumber1].attacks
            const abilityArrayPokemonOne = data.data[randomNumber1].abilities
            
            // Assign randomizing variables
            const randomAttackPokemonOne = Math.floor(Math.random() * attacksArrayPokemonOne.length)
            const randomAbilityPokemonOne = Math.floor(Math.random() * abilityArrayPokemonOne.length)
            
            const attackOrAbilityArray = [randomAbilityPokemonOne, randomAttackPokemonOne]
            const attackOrAbility = Math.floor(Math.random() * attackOrAbilityArray.length)
            
            // Handle Pokemon 1 moves
            function pokemonOneMoves(){
                // Does it have both abilities and attacks?
                if(attacksArrayPokemonOne && abilityArrayPokemonOne){
                    // If it does, randomly choose one to use and randomize its array
                    // PRETTY SURE THIS WON'T WORK THE WAY I WANT IT TO?
                    return `${pokemonOneName} uses ${data.data[randomNumber1].attackOrAbility[attackOrAbility]}`
                // if it doesn't have both, does it have attacks?
                }else if(attacksArrayPokemonOne){
                    // if yes then randomize the attack array
                    return `${pokemonOneName} uses ${randomAttackPokemonOne}!`
                }else if(abilityArrayPokemonOne){
                    // else it randomizes the abilities array
                    return `${pokemonOneName} uses ${randomAbilityPokemonOne}!`
                }else{
                    // if none of the above are satisfied something might be borked
                    console.log('I dont even know what happened man')
                }
            }
            pokemonOneMoves()
        }
    }catch(error){
        console.log(error) //catch and print any errors
    }
}