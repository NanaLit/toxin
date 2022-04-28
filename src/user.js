
import * as $ from 'jquery';
import maskedInput from "./pug/libs/text-field/_mask";
import dropdown from "./pug/libs/input-dropdown/_dropdown";
import AirDatepicker from './pug/libs/datepicker/air-datepicker';
import './pug/libs/datepicker/air-datepicker.css';
import createButtons from './pug/libs/datepicker/_datepicker';



window.addEventListener('DOMContentLoaded', function() {
  maskedInput();
  dropdown();
  new AirDatepicker('#airdatepicker', {
    range: true,
    multipleDateSeparator: 2
  });
  new AirDatepicker('#datepicker', {
    range: true,
    multipleDateSeparator: 2
  });
  createButtons();
});