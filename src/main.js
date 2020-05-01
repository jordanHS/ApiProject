// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min';
import $ from 'jquery';
import './styles.css';
import { PokemonSearch } from './lookup-service';

$(document).ready(function() {
    $('#findPokemon').click(function() {
        const type = $("#type").val();
        $('#type').val("");

        const search = new PokemonSearch();
        
    search.findPokemon(type).then((response) => {
      $(".showPokemon").empty();
      const pokemonList = response.pokemon;

      for (let poke of pokemonList) {
        if  (pokemonList.length > 0) {
            $(".showPokemon").append(`${poke.pokemon.name} `);
        }  else if(pokemonList.length == 0) {
            $('.showPokemon').text(`No Pokemon of that type were found.`);
          }
        }
    });
  });
});

        
