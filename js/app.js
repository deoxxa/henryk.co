var ajaxpCounter = 0;
var ajaxp = function ajaxp(url, cb) {
  var k = "ajaxp_" + ajaxpCounter++;

  window[k] = function(r) {
    delete window[k];
    cb(r);
  };

  var s = document.createElement("script");
  if (url.indexOf("?") === -1) {
    s.src = url + "?callback=" + k;
  } else {
    s.src = url + "&callback=" + k;
  }

  document.getElementsByTagName("script")[0].parentNode.appendChild(s);
};

(function() {
  var userId = 1777759803;
  var accessToken = "1777759803.467ede5.ff9d3f78879b44c6b9205467bfe7ef15";

  var url = "https://api.instagram.com/v1/users/" + userId + "/media/recent/?access_token=" + accessToken;

  var photo = document.getElementById("photo");

  ajaxp(url, function(r) {
    if (!r) {
      return;
    }

    var img = r.data[0].images.standard_resolution;

    photo.src = img.url;
    photo.height = img.height;
    photo.width = img.width;
  });
})();
