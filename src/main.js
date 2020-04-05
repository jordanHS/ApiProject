import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min';
import $ from 'jquery';
import './styles.css';
import { FindPokemon } from './lookup-service';

$(document).ready(function() {
    $('#findPokemon').click(function() {
        const type = $("#type").val();
            $('#type').val("");

        const search = new FindPokemon()



        search.FindPokemon(type)
            .then((response) => {
                $("#showPokemon").empty();
                const pokemonList = response;

                for(let i in pokemonList) {
                    if( pokemonList[i] > 0) {
                        $("#showPokemon").append(`${pokemonList[i].pokemon}`)
                    } else if(pokemonList[i].length == 0)
                    $('.showPokemon').text(`No Pokemon of that type were found.`);
                }
                getElements(response); 
            })

        const getElements = function(response) {
             if(response.meta.error){
               if(response.meta.http_status_code == 400)
                   $('.showPokemon').text(`Please enter a type`);
              return;
            }
          }
          });
        });

        
