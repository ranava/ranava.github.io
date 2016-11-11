$(document).ready(function(){
  var api;
  var lat;
  var lon;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      api = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=973de58f1f5eef677b6bf3347b1ff70a';

      $.getJSON(api, function(data){
        var loc = data.name;
        var temp = data.main.temp;
        var desc = data.weather[0].description;
        var cel = (temp-273.15).toFixed(0);
        var fah = (cel * 9 / 5 + 32).toFixed(0);
        var units = "f";
        $("#location").html(loc);
        $("#temp").html(fah + " &deg ");
        $("#weather").html(desc);

        $("#CFButton").click(function() {
      //function to change from f to c
      if (units === "f") {
        units = "c";
        $("#temp").html(cel + " &deg ");
        $("#CFButton").html("C");
      } else {
        units = "f";
        $("#temp").html(fah + " &deg ");
        $("#CFButton").html("F");
      };
        });

      switch (desc) {
	    case "few clouds":
      case "clear sky":
          $("#weatherImage").attr("src", "https://static.pexels.com/photos/51947/tuscany-grape-field-nature-51947-large.jpeg");
      break;

      case "scattered clouds":
      case "broken clouds":
          $("#weatherImage").attr("src", "https://static.pexels.com/photos/29859/pexels-photo-29859-large.jpg");
      break;

      case "shower rain":
      case "rain":
          $("#weatherImage").attr("src", "https://static.pexels.com/photos/7816/pexels-photo-large.jpg");
      break;

      case "thunderstorm":
          $("#weatherImage").attr("src", "https://static.pexels.com/photos/26517/pexels-photo-26517-large.jpg");
      break;

      case "snow":
          $("#weatherImage").attr("src", "https://static.pexels.com/photos/25112/pexels-photo-25112-large.jpg");
      break;

      case "mist":
          $("#weatherImage").attr("src", "https://static.pexels.com/photos/48678/pexels-photo-48678-large.jpeg");
    break;
                  };


                  })
                                             });
  }
                                             });
