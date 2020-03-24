import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min';
import $ from 'jquery';
import './styles.css';
import { LookupService } from './lookup-service';

$(document).ready(function() {
    $('#doctorSearch').click(function() {
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
            $('#firstName').val("");
            $('#lastName').val("");

        function doctorSearch() {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&user_location=47.6062%2C-122.3321&skip=0&limit=10&user_key=${process.env.API_KEY}`

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

        doctorSearch()
        .then(function(response) {
            let body = JSON.parse(response);
            let doctorList = body.main.
        }
        )
    })
});
