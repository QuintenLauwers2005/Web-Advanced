'use strict';

const loadingmessage = document.getElementById('loadingmessage');

window.addEventListener('load', function() {
loadingmessage.textContent= 'welcome!';

setTimeout(function(){
    loadingmessage.style.display = 'none';
}, 2000);

});