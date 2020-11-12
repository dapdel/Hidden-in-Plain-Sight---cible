import './style.scss';
import $ from 'jquery';
// import axios from 'axios';

$('.cible').on('click', function () {
  $('img').css('display', 'block');
  setTimeout(function () {
    $('img').css('display', 'none');
  }, 1500);
});
