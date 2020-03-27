import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min';
import $ from 'jquery';
import './styles.css';
import { LookupService } from './lookup-service';

$(document).ready(function() {
    $('#findPokemon').click(function() {
        const name = $("#name").val();
            $('#name').val("");

        (async () => {
            let lookupService = new LookupService();
            const response = await lookupService.findPokemon(name);
        })
    })
});
