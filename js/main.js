// Button listener
document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    try{
        const response = await fetch('https://api.pokemontcg.io/v2/cards') //request data from api url
        if (!response.ok){ // if response is bad
            console.log('Bad response!') //console log it
        }else{
            const data = await response.json() // if good then retrieve the data
            
            console.log(data.data[0])
            
            document.querySelector('#p1').innerText = data.data[0].name
            document.querySelector('#p2').innerText = data.data[1].name
        }
    }catch(error){
        console.log(error) //catch and print any errors
    }
}