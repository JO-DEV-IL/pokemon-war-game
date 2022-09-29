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
                    return
                }else if(!data.data[randomNumber1].abilities){
                    return
                }
            }
            
            // Randomize moveset
            function pokemon1Moveset(){
                // const resultOfMoveCheckp1 = moveCheckP1()
                const movesetArrays = ['abilities', 'attacks']
                return Math.floor(Math.random() * movesetArrays.length)
            }
            
            // Randomize element
            function pokemon1Element(){
                const resultOfMoveset = pokemon1Moveset()
                const randomElement = Math.floor(Math.random() * )
                if(resultOfMoveset === 'abilities'){
                    return data.data[randomNumber1]
                }else if(resultOfMoveset === 'attacks'){
                    return
                }
            }
            pokemon1Element() //result is stored
        }
    }catch(error){
        console.log(error) //catch and print any errors
    }
}