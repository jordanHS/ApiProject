export class FindPokemon {
    async findPokemon(type) {
        try{
        let response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
        } catch(error) {
            console.error("There was an error handling your request:" + error.message);   
            }
        }
    }