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

            // Randomize pokemon cards and assign variables
            const randomNumber1 = Math.floor(Math.random() * 250)
            const randomNumber2 = Math.floor(Math.random() * 250)
            console.log(data.data[randomNumber1])
            // console.log(data.data[randomNumber2])

            // Pokemon 1 data
            const pokemonOneImage = document.querySelector('#p1-img')
            const pokemonOneName = data.data[randomNumber1].name
            pokemonOneImage.src = data.data[randomNumber1].images.small
            
            // Pokemon 2 data
            const pokemonTwoImage = document.querySelector('#p2-img')
            const pokemonTwoName = data.data[randomNumber2].name
            pokemonTwoImage.src = data.data[randomNumber2].images.small
            
            // Function to coinflip between 'abilities' and 'attacks'
            function pokemonMoveset(){
                const movesetArrays = ['abilities', 'attacks']
                return Math.floor(Math.random() * movesetArrays.length)
            }
            //result is either 0 or 1

            // Function to check if pokemon has both attacks and abilities or if no abilities
            function moveCheckP1(){
                if(data.data[randomNumber1].abilities && data.data[randomNumber1].attacks){
                    return true
                }else if(!data.data[randomNumber1].abilities){
                    return false
                }
            }
            //result is either true or false

            // Function to put it all together
            function turnP1(){
                const resultOfMoveset = pokemonMoveset() //0 or 1
                const resultOfMoveCheck = moveCheckP1() //true or false
                
                // ISSUE: THESE PATHS ARE TECHNICALLY NOT ARRAYS, SO THEY CAN'T USE ARRAY LENGTH? //
                const abilityArray = data.data[randomNumber1].abilities
                const attackArray = data.data[randomNumber1].attacks
                
                const randomElementAbility = () => {
                    if(!data.data[randomNumber1].abilities){
                        console.log('No abilities')
                    }else{
                        return Math.floor(Math.random() * abilityArray.length)
                    }
                }
                const randomElementAttack = Math.floor(Math.random() * attackArray.length)
                
                if(resultOfMoveCheck === true)
                    if(resultOfMoveset === 1){
                        return data.data[randomNumber1].attacks[randomElementAttack].name
                    }else if(resultOfMoveset === 0){
                        return data.data[randomNumber1].abilities[randomElementAbility].name
                }else if(resultOfMoveset === false){
                    return data.data[randomNumber1].attacks[randomElementAttack].name
                }
            }
            const resultOfTurnP1 = turnP1()
            document.querySelector('#pokemon1move1').innerText = `${pokemonOneName} used ${resultOfTurnP1}!`
        }
    }catch(error){
        console.log(error) //catch and print any errors
    }
}