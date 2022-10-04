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
            console.log(data.data[randomNumber2])

            // Pokemon 1 data
            const pokemonOneImage = document.querySelector('#p1-img')
            const pokemonOneName = data.data[randomNumber1].name
            pokemonOneImage.src = data.data[randomNumber1].images.small
            
            // Pokemon 2 data
            const pokemonTwoImage = document.querySelector('#p2-img')
            const pokemonTwoName = data.data[randomNumber2].name
            pokemonTwoImage.src = data.data[randomNumber2].images.small

            
            // Function to check if pokemon has both attacks and abilities or if no abilities
            // function moveCheckP1(){
            //     if(data.data[randomNumber1].abilities && data.data[randomNumber1].attacks){
            //         return true
            //     }else if(!data.data[randomNumber1].abilities && data.data[randomNumber1].attacks){
            //         return false
            //     }
            // }
            
            // function moveCheckP2(){
            //     if(data.data[randomNumber2].abilities && data.data[randomNumber2].attacks){
            //         return true
            //     }else if(!data.data[randomNumber2].abilities && data.data[randomNumber2].attacks){
            //         return false
            //     }
            // }
            //result is either true or false

            
            // Function to put it all together
            // function turnP1(){
            //     const resultOfMoveCheck = moveCheckP1() //true or false
            //     const coinToss1 = Math.floor(Math.random() * 2)
            //     // console.log(`The coin flipped to ${coinToss}`)

            //     if(resultOfMoveCheck === false){
            //         return data.data[randomNumber1].attacks[0].name
            //     }else if(resultOfMoveCheck === true){
            //         if(coinToss1 === 0){
            //             return data.data[randomNumber1].abilities[0].name
            //         }else if(coinToss1 === 1){
            //             return data.data[randomNumber1].attacks[0].name
            //         }
            //     }
            // }

            // function turnP2(){
            //     const resultOfMoveCheck = moveCheckP2() //true or false
            //     const coinToss2 = Math.floor(Math.random() * 2)
            //     // console.log(`The coin flipped to ${coinToss}`)

            //     if(resultOfMoveCheck === false){
            //         return data.data[randomNumber2].attacks[0].name
            //     }else if(resultOfMoveCheck === true){
            //         if(coinToss2 === 0){
            //             return data.data[randomNumber2].abilities[0].name
            //         }else if(coinToss2 === 1){
            //             return data.data[randomNumber2].attacks[0].name
            //         }
            //     }
            // }
            
            // Handle moves in DOM
            // const resultOfTurnP1 = turnP1()
            // const resultOfTurnP2 = turnP2()
            // document.querySelector('#pokemon1move1').innerText = `${pokemonOneName} used ${resultOfTurnP1}!`
            // document.querySelector('#pokemon2move1').innerText = `${pokemonTwoName} used ${resultOfTurnP2}!`
            
            // Check cards for weaknesses and return value
            function checkWeaknessesP1(){
                if(!data.data[randomNumber1].weaknesses){
                    console.log('P1 has no weaknesses')
                    return false
                }else if(data.data[randomNumber1].weaknesses[0].type){
                    console.log(`P1 is weak to ${data.data[randomNumber1].weaknesses[0].type}`)
                    return data.data[randomNumber1].weaknesses[0].type
                }
            }
            function checkWeaknessesP2(){
                if(!data.data[randomNumber2].weaknesses){
                    console.log('P2 has no weaknesses')
                    return false
                }else if(data.data[randomNumber2].weaknesses[0].type){
                    console.log(`P2 is weak to ${data.data[randomNumber2].weaknesses[0].type}`)
                    return data.data[randomNumber2].weaknesses[0].type
                }
            }
            

            // Check cards for resistances and return value
            function checkResistancesP1(){
                if(!data.data[randomNumber1].resistances){
                    console.log('P1 has no resistances')
                    return false
                }else if(data.data[randomNumber1].resistances[0].type){
                    console.log(`P1 is resistant to ${data.data[randomNumber1].resistances[0].type}`)
                    return data.data[randomNumber1].resistances[0].type
                }
            }
            function checkResistancesP2(){
                if(!data.data[randomNumber2].resistances){
                    console.log('P2 has no resistances')
                    return false
                }else if(data.data[randomNumber2].resistances[0].type){
                    console.log(`P2 is resistant to ${data.data[randomNumber2].resistances[0].type}`)
                    return data.data[randomNumber2].resistances[0].type
                }
            }


            // Check pokemon's types and return value
            function checkTypeP1(){
                console.log(`P1's type is ${data.data[randomNumber1].types[0]}`)
                return data.data[randomNumber1].types[0]
            }
            
            function checkTypeP2(){
                console.log(`P2's type is ${data.data[randomNumber2].types[0]}`)
                return data.data[randomNumber2].types[0]
            }
            
            

            // Compare weaknesses to opponent's element and return values
            function compareWeaknesses(){
                const resultOfP1Weakness = checkWeaknessesP1()
                const resultOfP2Weakness = checkWeaknessesP2()
                const resultOfP1Type = checkTypeP1()
                const resultOfP2Type = checkTypeP2()
                if(resultOfP1Weakness === resultOfP2Type){
                    console.log('P1 is weak to P2')
                }else{
                    console.log('P1 is not weak to P2')
                }
                if(resultOfP2Weakness === resultOfP1Type){
                    console.log('P2 is weak to P1')
                }else{
                    console.log('P2 is not weak to P1')
                }
            }
            compareWeaknesses()
            

            // Randomize winner based on certain conditions
            // function randomWinner(){
            //     const result = Math.floor(Math.random() * 2)
            //     if(result === 0){
            //         return `${pokemonOneName} has fainted! ${pokemonTwoName} wins the battle!`
            //     }else{
            //         return `${pokemonTwoName} has fainted! ${pokemonOneName} wins the battle!`
            //     }
            // }
            // document.querySelector('#winner').innerText = randomWinner()
        }
    }catch(error){
        console.log(error) //catch and print any errors
    }
}