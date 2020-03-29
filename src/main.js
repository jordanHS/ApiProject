import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min';
import $ from 'jquery';
import './styles.css';
import { FindPokemon } from './lookup-service';

$(document).ready(function() {
    $('#findPokemon').click(function() {
        const type = $("#type").val();
            $('#type').val("");



        FindPokemon()
            .then((response) => {
                $("#showPokemon").empty();
                const body = JSON.parse(response);
                const pokemonList = body.pokemon;

                for(let i in pokemonList) {
                    if( pokemonList[i] > 0) {
                        $("#showPokemon").append(`${pokemonList[i].pokemon}`)
                    }
                } 

            })

        function(error) {
             if(response.meta.error){
               if(response.meta.http_status_code == 400)
                   $('.showPokemon').text(`Please enter a type`);
              return;
            }
              if(pokemonList[i].length == 0)
               $('.showPokemon').text(`No Pokemon of that type were found.`);
          }
          });
        });

        
