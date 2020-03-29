export class FindPokemon {
    async findPokemon(type) {
        try{
        let response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
        } catch(error) {
            return response.status(400).send(error);
            }
        }
    }