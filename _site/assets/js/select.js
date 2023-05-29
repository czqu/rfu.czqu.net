function travelling() {
  var url = [
    "https://rfu.czqu.net/index-en.html",
    "https://rfu.czqu.net/index-cn.html"
  ];

  if (document.referrer) {
    var origin = new URL(document.referrer).origin;
    if (url.includes(origin)) {
      url.splice(url.indexOf(origin), 1);
    }
  }

  var requestUrl = "https://ipapi.co/json/";

  $.ajax({
    url: requestUrl,
    type: 'GET',
    success: function (json) {
      var country = json.country;
      if (country === 'CN') {
        window.location = url[1];
      } else {
        window.location = url[0];
      }
    },
    error: function (err) {
      window.location = url[0]; // 默认跳转到英文页面
    }
  });
}