var barEnergie = document.getElementById('BarEnergy');
var bar_moyenne = document.getElementById('bla');
var statusEnergie = document.getElementById('statusEnergy');
var barFaim = document.getElementById('BarHungry');
var statusFaim = document.getElementById('statusHungry');

var values = {
  faim:100,
  energie:100
};

document.getElementById('sport').onclick=function(){
  values.energie-=10;
}

setInterval(function(){

  // Energy 
  barEnergie.value=values.energie;
  values.energie-=2;
  if(values.energie <= 0) values.energie = 0;

  // Food
  barFaim.value=values.faim;
  values.faim--;
  if(values.faim <= 0) values.faim = 0;

  // Moyenne
  var moyenne = (values.faim + values.energie)/2;
  document.getElementById('bla').innerHTML = parseInt(moyenne)+"%";

},500);

/*function progressBarEnergie(compteur) 
  {
    bar.value = compteur;
    compteur--;

    document.getElementById('sport').onclick=function()
    {
      faitdusport=true;
      //bar.value - 40;
      //compteur--;
      //var amountLoaded = 100 - bar.value;
      //progressBarEnergie(amountLoaded);
      //alert('test')
    }

    if(faitdusport==true){
      compteur-=40;
      console.log(compteur);
    }

    values.energie=compteur;

    var timer = setTimeout("progressBarEnergie("+compteur+")",1000);
    
    if(compteur == 0)
    {
      bar.value = 0;
      clearTimeout(timer);
    }
  }
var amountLoaded = 100;
progressBarEnergie(amountLoaded);
function progressBarFaim(compteurFaim) 
  {
    barFaim.value = compteurFaim;
    compteurFaim--;
    values.faim=compteurFaim;
    var timerFaim = setTimeout("progressBarFaim("+compteurFaim+")",700);
      if(compteurFaim == 0)
        {
          barFaim.value = 0;
          clearTimeout(timerFaim);
        }
  }
var amountLoadedFaim = 100;
progressBarFaim(amountLoadedFaim);

function Bonheur()
  {
    var moyenne = (values.faim+values.energie)/2;
    bar_moyenne.value = moyenne;
    var timerBonheur = setTimeout("Bonheur("+moyenne+")",1);
    document.getElementById('bla').innerHTML = parseInt(moyenne)+"%";
  }
Bonheur();
*/




