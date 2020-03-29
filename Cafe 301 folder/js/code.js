{
  $(".dishes").accordion({
    event: "click",
    collapsible: true,
    animate: 1000,
    active: false,
    heightStyle: true
  });

  $(".gallery").tooltip({
    show: { effect: "explode", duration: 500 },
    hide: { effect: "explode", duration: 500 }
  });

  function initMap() {
    // Map Options
    var options = {
      zoom: 8,
      center: { lat: 33.545179, lng: 73.064755 }
    };
    // Creating a new google map object
    var map = new google.maps.Map(document.getElementById("map"), options);

    // Add marker
    var marker = new google.maps.Marker({
      position: { lat: 33.545179, lng: 73.064755 },
      map: map
    });
  }

  var comments = [
    "After having issues at our hotel we found this restaurant using Yell.com so we had no idea what to expect, it was absolutely lovely.",
    "A warm and friendly welcome with fantastic customer service. Always great, tasty food served piping hot- just the way we like it. Would definitely recommend."
  ];

  var client = ["Daud Ijaz", "Atif Bashir"];

  $("#comment")
    .text(comments[0] + "-" + client[0])
    .fadeIn(2000);

  function hideComment() {
    $("#comment").fadeOut(2000);
  }

  let i = 0;
  function updateComment() {
    $("#comment")
      .text(comments[i] + "-" + client[i])
      .fadeIn(2000);
    if (i === comments.length - 1) {
      i = 0;
    }
    i -= -1;
  }

  setInterval("updateComment()", 7000);
  setInterval("hideComment()", 6000);

  // Users will be adding comments here
  // there names will be displayed along with their comments
  $("#postBtn").on("click", function() {
    var user = $("#user")
      .val()
      .toString();
    var review = $("#review")
      .val()
      .toString();

    if (review.length === 0) {
      alert("Please enter a review");
    } else {
      client.push(user);
      comments.push(review);
    }
  });

  // Booking a table interactivity will be below this line
  $("#bookTable").on("click", function() {
    $("#bookTableMessage").dialog({});
  });
}
