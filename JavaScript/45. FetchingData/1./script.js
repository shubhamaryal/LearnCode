fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data=>console.log(data))
    .catch(error=> console.error(error));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data=>console.log(data.name))
    .catch(error=> console.error(error)); 

fetch("https://pokeapi.co/api/v2/pokemon/spongbob")
    .then(response => {
        if(!response.ok){
            throw new Error("Couldnot fetch");
        }
        return response.json();
    })
    .then(data=>console.log(data.name))
    .catch(error=> console.error(error));