
function AktionHandbuch() {
    document.querySelector('.Titelbildschirm').style.display = 'none';
    document.getElementById('Handbuch').style.display = 'flex'; 
}

function AktionHandbuchZu() {
    document.getElementById('Handbuch').style.display = 'none'; 
    document.querySelector('.Titelbildschirm').style.display = 'flex'; 
}

function Neustart() {
    window.location.reload(true);
}


function StartSpiel() {
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Gosse-1').style.display = 'flex'; 
}

function AktionWeiter1(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Gosse-2').style.display = 'flex';
}

function AktionWeiter2(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Gasse-1').style.display = 'flex';
}

function AktionHelfen() {
    localStorage.setItem('action', 'eins');
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Gasse-2').style.display = 'flex'; 
}

function AktionNichtHelfen(){
    localStorage.setItem('action', 'zwei');
    document.querySelector('.Handbuch').style.display = 'none'; 
    document.getElementById('szene-Gasse-3').style.display = 'flex'; 
}

function AktionWeiter3(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Straße').style.display = 'flex';
}

function AktionKanalisation(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Kanalisation').style.display = 'flex';
}

function AktionSeitenstraße(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Seitenstraße').style.display = 'flex';
}

function AktionSpielen(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Wohngegend').style.display = 'flex';
}

function AktionNichtSpielen(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Park-2').style.display = 'flex';
}

function AktionPark(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Straße').style.display = 'flex';
}

function AktionNaschen(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Wohnung-1').style.display = 'flex';
}

function AktionNichtNaschen() {
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Park-3').style.display = 'flex';
}

function AktionWeiter5(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Wohnung-2').style.display = 'flex';
}


function AktionEssen(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-nettes-Viertel').style.display = 'flex';
}

function AktionNichtEssen(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Park-1').style.display = 'flex';
}

function AktionWegrennen(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Tierarzt').style.display = 'flex';
}

function AktionNichtWegrennen(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-reichen-Viertel-2').style.display = 'flex';
}

function AktionJA(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-chillen').style.display = 'flex';
}

function AktionNein(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-reichen-Viertel-1').style.display = 'flex';
}

function AktionWeiter4(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-Villa').style.display = 'flex';
}

function AktionEndeVilla(){
    const action = localStorage.getItem('action');
    if (action === 'zwei') {
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-weggeschickt').style.display = 'flex';
    } else {
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-bleiben-1').style.display = 'flex';
    }
}
function AktionWeiter6(){
    document.getElementById('Handbuch').style.display = 'none'; 
    document.getElementById('szene-bleiben-2').style.display = 'flex';
}
