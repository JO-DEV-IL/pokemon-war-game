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
            // console.log(data.data[randomNumber1])
            // console.log(data.data[randomNumber2])

            // Pokemon 1 data
            const pokemonOneImage = document.querySelector('#p1-img')
            const pokemonOneName = data.data[randomNumber1].name
            pokemonOneImage.src = data.data[randomNumber1].images.small
            
            // Pokemon 2 data
            const pokemonTwoImage = document.querySelector('#p2-img')
            const pokemonTwoName = data.data[randomNumber2].name
            pokemonTwoImage.src = data.data[randomNumber2].images.small

            
            // Function to check if pokemon has both attacks and abilities or if no abilities
            function moveCheckP1(){
                if(data.data[randomNumber1].abilities && data.data[randomNumber1].attacks){
                    return true
                }else if(!data.data[randomNumber1].abilities && data.data[randomNumber1].attacks){
                    return false
                }
            }
            
            function moveCheckP2(){
                if(data.data[randomNumber2].abilities && data.data[randomNumber2].attacks){
                    return true
                }else if(!data.data[randomNumber2].abilities && data.data[randomNumber2].attacks){
                    return false
                }
            }
            //result is either true or false

            
            // Function to put it all together
            function turnP1(){
                const resultOfMoveCheck = moveCheckP1() //true or false
                const coinToss1 = Math.floor(Math.random() * 2)
                // console.log(`The coin flipped to ${coinToss}`)

                if(resultOfMoveCheck === false){
                    return data.data[randomNumber1].attacks[0].name
                }else if(resultOfMoveCheck === true){
                    if(coinToss1 === 0){
                        return data.data[randomNumber1].abilities[0].name
                    }else if(coinToss1 === 1){
                        return data.data[randomNumber1].attacks[0].name
                    }
                }
            }

            function turnP2(){
                const resultOfMoveCheck = moveCheckP2() //true or false
                const coinToss2 = Math.floor(Math.random() * 2)
                // console.log(`The coin flipped to ${coinToss}`)

                if(resultOfMoveCheck === false){
                    return data.data[randomNumber2].attacks[0].name
                }else if(resultOfMoveCheck === true){
                    if(coinToss2 === 0){
                        return data.data[randomNumber2].abilities[0].name
                    }else if(coinToss2 === 1){
                        return data.data[randomNumber2].attacks[0].name
                    }
                }
            }
            const resultOfTurnP1 = turnP1()
            const resultOfTurnP2 = turnP2()
            document.querySelector('#pokemon1move1').innerText = `${pokemonOneName} used ${resultOfTurnP1}!`
            document.querySelector('#pokemon2move1').innerText = `${pokemonTwoName} used ${resultOfTurnP2}!`

            function randomWinner(){
                const result = Math.floor(Math.random() * 2)
                if(result === 0){
                    return `${pokemonOneName} has fainted! ${pokemonTwoName} wins the battle!`
                }else{
                    return `${pokemonTwoName} has fainted! ${pokemonOneName} wins the battle!`
                }
            }
            
            document.querySelector('#winner').innerText = randomWinner()
        }
    }catch(error){
        console.log(error) //catch and print any errors
    }
}