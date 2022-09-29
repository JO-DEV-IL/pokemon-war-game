// Button listener
document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    try{
        const response = await fetch('https://api.pokemontcg.io/v2/cards') //request data from api url
        if (!response.ok){ // if response is bad
            console.log('Bad response!') //console log it
        }else{
            const data = await response.json() // if good then retrieve the data
            
            console.log(data) // print data from api

            // Randomize pokemon cards
            const randomNumber1 = Math.floor(Math.random() * 250)
            const randomNumber2 = Math.floor(Math.random() * 250)

            //Pokemon 1 data
            document.querySelector('#p1').innerText = data.data[randomNumber1].name
            const pokemonOneImage = document.querySelector('#p1-img')
            pokemonOneImage.src = data.data[randomNumber1].images.small
            
            // Pokemon 2 data
            document.querySelector('#p2').innerText = data.data[randomNumber2].name
            const pokemonTwoImage = document.querySelector('#p2-img')
            pokemonTwoImage.src = data.data[randomNumber2].images.small
        }
    }catch(error){
        console.log(error) //catch and print any errors
    }
}