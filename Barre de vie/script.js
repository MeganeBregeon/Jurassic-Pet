window.onload = function() {

  var barFatigue  = document.getElementById('BarTired'),
      barHungry   = document.getElementById('BarHungry'),
      wellfare    = 0,
      lvl         = 1,
      values      = { faim:50, fatigue:50 };

  setInterval(function() {
    // Energy
    barFatigue.value=values.fatigue;
    values.fatigue-=0.1;
    if(values.fatigue <= 0) values.fatigue = 0;

    // Food
    barHungry.value=values.faim;
    values.faim-=0.1;
    if(values.faim <= 0) values.faim = 0;

    // Bien être
    wellfare = (values.faim + values.fatigue)/2;
    if(wellfare >= 100) {
      document.getElementById('wellfare').innerHTML = 100 + "%";
    } else {
      document.getElementById('wellfare').innerHTML = parseInt(wellfare)+"%";
    }

    if (wellfare >= 100) {
      values.fatigue = 50;
      values.faim = 50;
      lvl++;
      document.getElementById('level-number').innerHTML = lvl;
    }
  }, 300);

  //Faire manger le dino
  document.getElementById('nourriture').onclick=function()
  {
    values.faim = values.faim + (50 / lvl);
  }
  //Prendre un douche
  document.getElementById('douche').onclick=function()
  {
    values.fatigue = values.fatigue + (50 / lvl);
  }
  //Dormir
  document.getElementById('dormir').onclick=function()
  {
    values.fatigue = values.fatigue + (100 / lvl);
  }

};



