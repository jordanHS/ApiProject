export class LookupService {
    async findPokemon(name) {
        try{
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/name=${name}`);
            let jsonifiedResponse = await response.json();
            return jsonifiedResponse;
        } catch(error) {
            return response.status(400).send(error);
        }
    }
}