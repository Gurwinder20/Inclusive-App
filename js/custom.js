jQuery('#map').usmap({
  stateSpecificStyles: {
    'FL': {fill: '#d9b30f'},
    'CO': {fill: '#d9b30f'}
    },
    click: function(event, data) {
      jQuery('#clicked-state')
        .text('You clicked: '+data.name)
        .parent().effect('highlight', {color: '#d9b30f'}, 2000);
    }
  });

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more +"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less -"; 
      moreText.style.display = "inline";
    }
  }

  $('#map').usmap({
    
    });