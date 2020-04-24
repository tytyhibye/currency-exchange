import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Xchange } from './exchange.js';

$(document).ready(function () {
  $('#button').click(function (event) {
    event.preventDefault();
    let inputCurrency = $('#currency').val();
    let inputAmount = $('#dollar').val();
    (async () => {
      let xchange = new Xchange();
      let response = await xchange.getData(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      getElements(response.conversion_rates[inputCurrency]);
    })();
    function getElements(response) {
      if (response) {
        $('#result').text(parseInt(response * inputAmount));
      } else {
        $('#result').text("Uh oh, this doesn't seem to be a recognized currency. Please select another from the list.");
      }
    }
  });
});