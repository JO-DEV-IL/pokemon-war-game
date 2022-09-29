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
            
            function moveCheckP1(){
                if(data.data[randomNumber1].abilities && data.data[randomNumber1].attacks){
                    console.log('Pokemon has both abilities and attacks')
                }else if(!data.data[randomNumber1].abilities){
                    console.log('Pokemon does not have any abilities')
                }
            }
            moveCheckP1()
            
            // Randomize moveset
            // function pokemon1Moveset(){
            //     // Turns choices into an array
            //     const movesetArrays = [hasAbilitiesP1, hasAttacksP1]
            //     return Math.floor(Math.random() * movesetArrays.length)
            // }
            // pokemon1Moveset()
            
            //Randomize element
            // function pokemon1Element(pokemon1Moveset){
            //     if(pokemon1Moveset === hasAbilitiesP1){
            //         return Math.floor(Math.random() * hasAbilitiesP1.length)
            //     }else if(pokemon1Moveset === hasAttacksP1){
            //         return Math.floor(Math.random() * hasAttacksP1.length)
            //     }
            // }
            // pokemon1Element()
        }
    }catch(error){
        console.log(error) //catch and print any errors
    }
}