{
  var today = new Date();

  $("#date1").datepicker({
    changeYear: true,
    changeMonth: true,
    showOtherMonths: true,
    minDate: today.getUTCDate(),
    maxDate: new Date(2020, 11, 31)
  });

  $("#date2").datepicker({
    changeYear: true,
    changeMonth: true,
    showOtherMonths: true,
    minDate: today.getUTCDate(),
    maxDate: new Date(2020, 11, 31)
  });

  var RYK = { lat: 28.422158, lng: 70.304103 };
  var KP = { lat: 28.651175, lng: 70.648059 };
  var ATK = { lat: 33.772139, lng: 72.362022 };
  var ISB = { lat: 33.707545, lng: 73.080308 };
  var KRI = { lat: 24.947692, lng: 67.067337 };
  var QUE = { lat: 30.190793, lng: 66.991198 };

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: KP,
      zoom: 5
    });

    var marker = new google.maps.Marker({
      position: RYK,
      map: map,
      title: "Rahim Yar Khan"
    });

    var marker = new google.maps.Marker({
      position: KP,
      map: map,
      title: "Khanpur"
    });

    var marker = new google.maps.Marker({
      position: ATK,
      map: map,
      title: "Attock City"
    });

    var marker = new google.maps.Marker({
      position: ISB,
      map: map,
      title: "Islamabad"
    });

    var marker = new google.maps.Marker({
      position: KRI,
      map: map,
      title: "Karachi"
    });

    var marker = new google.maps.Marker({
      position: QUE,
      map: map,
      title: "Quetta"
    });
  }
}

//AIzaSyC2vwp8dNlYIocvO4pWqmiYnY9l8CHWkPc
