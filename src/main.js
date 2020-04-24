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
    console.log(inputAmount);
    console.log(inputCurrency);
    (async () => {
      let xchange = new Xchange();
      let response = await xchange.getData(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      console.log('response: ', response);
      getElements(response.conversion_rates[inputCurrency]);
    })();
    function getElements(response) {
      if (response) {
        $('#result').text(parseInt(response * inputAmount));
      } else {
        $('#result').text('Uh oh, something went wrong. Make sure you have the proper CORS plugin/permission and try again.');
      }
    }
  });
});