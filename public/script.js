var waveform = new Waveform({
container: document.getElementById("test"),
data: [1, 0.2, 0.5]
});

$(document).ready(function(){
  console.log('Get it!');
  $('#test').on('click', function(event) {
      $('#test').hide();
    }

  );
});
