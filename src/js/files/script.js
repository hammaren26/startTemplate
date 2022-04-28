// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

import jQuery from "jquery";
import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';
window.$ = window.jQuery = jQuery;
import 'selectric';
import { checkInput, closest } from "./functions.js";
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery-bundle.min.css';


lightGallery(document.getElementById('lightgallery'), {
   speed: 500,
   controls: true
});


const player = document.querySelector('.player');
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');