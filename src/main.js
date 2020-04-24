import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Xchange } from './exchange.js';

$(document).ready(function () {
  $('#button').click(function () {
    (async () => {
      let xchange = new Xchange();
      const response = await xchange.getRate();
      console.log('response: ', response);
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        let rate = response.filler
        $('#result').text(rate)
      } else {
        $('#result').text('Uh oh, something went wrong. Make sure you have the proper CORS plugin/permission and try again.');
      }
    }
    });
  })