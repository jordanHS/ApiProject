import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min';
import $ from 'jquery';
import './styles.css';
import { LookupService } from './lookup-service';

$(document).ready(function() {
    $('#doctorSearch').click(function() {
        let name = $("#name").val();

        function pokemonLookup() {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                let url = `https://pokeapi.co/api/v2/pokemon/name=${name}`

                request.onload = function() {
                    if (this.status === 200) {
                        resolve(request.response);
                    } else {
                        reject(Error(request.statusText));
                    }
                }
                request.open("GET", url, true);
                request.send();
            });
        }
    })
});
