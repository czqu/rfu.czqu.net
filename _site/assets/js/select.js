function travelling() {
  var url = new Array();
  url[0] = "https://rfu.czqu.net/index-en.html";
  url[1] = "https://rfu.czqu.net/index-cn.html";
  if (document.referrer) {
    var origin = new URL(document.referrer).origin;
    if (url.includes(origin)) {
      url.splice(url.indexOf(origin), 1);
    }
  }
  var requestUrl = "https://ip-api.com/json";

  var country;
  $.ajax({
    url: requestUrl,
    type: 'GET',
    success: function (json) {
      country = json.countryCode;
    },
    error: function (err) {
      country = CN;
    }
  });

  if (country === 'CN') {
    ints = 1;
  }
  else {
    ints = 0;
  }
  window.location = url[ints];
}
