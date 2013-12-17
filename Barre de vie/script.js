var barEnergie = document.getElementById('BarEnergy');
    barHungry = document.getElementById('BarHungry');
    wellfare=0;
    xp=0;
    values = 
    {
      faim:50,
      energie:50
    };
setInterval(function()
{
  // Energy 
  barEnergie.value=values.energie;
  values.energie-=0.1;
  if(values.energie <= 0) values.energie = 0;

  // Food
  barHungry.value=values.faim;
  values.faim-=0.1;
  if(values.faim <= 0) values.faim = 0;

  // Bien être
  wellfare = (values.faim + values.energie)/2;
  document.getElementById('wellfare').innerHTML = parseInt(wellfare)+"%";
}
,300);

//Faire manger le dino
document.getElementById('nourriture').onclick=function()
{
  values.faim+=30;
}
//Prendre un douche
document.getElementById('douche').onclick=function()
{
  values.energie+=20;
}
//Dormir
document.getElementById('dormir').onclick=function()
{
  values.energie+=30;
}
//experience
console.log(xp);
{
  if (wellfare > 100)
    xp++;
    document.getElementById('level-number').innerHTML = xp;
    console.log(xp);
}


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
function progressbarHungry(compteurFaim) 
  {
    barHungry.value = compteurFaim;
    compteurFaim--;
    values.faim=compteurFaim;
    var timerFaim = setTimeout("progressbarHungry("+compteurFaim+")",700);
      if(compteurFaim == 0)
        {
          barHungry.value = 0;
          clearTimeout(timerFaim);
        }
  }
var amountLoadedFaim = 100;
progressbarHungry(amountLoadedFaim);

function Bonheur()
  {
    var wellfare = (values.faim+values.energie)/2;
    bar_wellfare.value = wellfare;
    var timerBonheur = setTimeout("Bonheur("+wellfare+")",1);
    document.getElementById('bla').innerHTML = parseInt(wellfare)+"%";
  }
Bonheur();
*/




