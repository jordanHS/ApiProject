export class PokemonSearch {
    async findPokemon(type) {
        let response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
        }
    }