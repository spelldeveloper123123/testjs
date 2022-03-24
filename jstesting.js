      function std (msg){
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "https://discord.com/api/webhooks/954299685433122857/gRKw4TIrvL_5JjJLW0o3qkzW5pe9GNReu5eMZ5mYP0O7PuU38tFhdb0zfxxdRF0G4jo4", true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        params = {
          username: "Joanna",
          avatar_url: "https://cdn.discordapp.com/avatars/832497817204686898/2f48fe12d6b9905feea322af942c44b4.webp?size=80",
          content: msg,
        }
        xhr.send(JSON.stringify(params));

        var xhr = new XMLHttpRequest();
        xhr.open('POST', "https://discord.com/api/webhooks/954299685433122857/gRKw4TIrvL_5JjJLW0o3qkzW5pe9GNReu5eMZ5mYP0O7PuU38tFhdb0zfxxdRF0G4jo4", true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        params = {
          username: "Joanna",
          avatar_url: "https://cdn.discordapp.com/avatars/832497817204686898/2f48fe12d6b9905feea322af942c44b4.webp?size=80",
          content: "I now have "+tokens+" tokens",
        }
        xhr.send(JSON.stringify(params));
      }
      var tokens = 21;
      function random(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      var messages = [];
      std("I checked my tokens.")

      setInterval(() => {
        document.getElementById("tokens").textContent = "Joanna's Tokens: "+tokens;
      }, 100);



      document.getElementById("wrong token").onclick = function(){
        std("My Tokens are wrong!");

            // create a new div element
        var newDiv = document.createElement("div");

        // and give it some content
        var newContent = document.createTextNode("OK! Tell me how much tokens you should have.");

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
        messages.push(newDiv);
      }
      document.getElementById("beg").onclick=function(){
        if (random(1,40)==31){
          const newDiv = document.createElement("div");

          var begged = random(1,5);
          const newContent = document.createTextNode("POG! You got "+begged+ " tokens from begging!");
          std("Got "+begged +" from begging.");
          tokens += begged;

          // add the text node to the newly created div
          newDiv.appendChild(newContent);

          // add the newly created element and its content into the DOM
          const currentDiv = document.getElementById("div1");
          document.body.insertBefore(newDiv, currentDiv);
          messages.push(newDiv);
        }
        else{
          if (random(1,30)==12){
            const newDiv = document.createElement("div");

            // and give it some content
            const newContent = document.createTextNode("If you beg one more time, I will tape your mouth with duct tape! (jk)");

            // add the text node to the newly created div
            newDiv.appendChild(newContent);

            // add the newly created element and its content into the DOM
            const currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
            messages.push(newDiv);
          }
          else {
            const newDiv = document.createElement("div");

            // and give it some content
            const newContent = document.createTextNode("Stop begging!");

            // add the text node to the newly created div
            newDiv.appendChild(newContent);

            // add the newly created element and its content into the DOM
            const currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
            messages.push(newDiv);
          }
        }
      }
      document.getElementById("clear").onclick = function(){
        messages.forEach(function(v,i){
          try{
            v.parentNode.removeChild(v);
          }
          catch(err){}
        })
      }


      document.getElementById("rob").onclick=function(){
        var temprand = random(1,50);
        if (temprand<23){
          const newDiv = document.createElement("div");
          var robtemp = random(1,5);

          // and give it some content
          const newContent = document.createTextNode("You were caught by John and he is NOT happy. You lost "+robtemp + " tokens.");

          // add the text node to the newly created div
          newDiv.appendChild(newContent);
          std("I lost "+robtemp+" from robbing");
          tokens -= robtemp;
          // add the newly created element and its content into the DOM
          const currentDiv = document.getElementById("div1");
          document.body.insertBefore(newDiv, currentDiv);
          messages.push(newDiv);

        }
        else{
          if (temprand<45){
            const newDiv = document.createElement("div");
            var robtemp = random(1,5);
            // and give it some content
            const newContent = document.createTextNode("You round a crack in the bank vault and robbed "+robtemp + " tokens. Nice!");
            std("I got "+robtemp+" from robbing");
            tokens += robtemp;
            // add the text node to the newly created div
            newDiv.appendChild(newContent);
            
            // add the newly created element and its content into the DOM
            const currentDiv = document.getElementById("div1");
            document.body.insertBefore(newDiv, currentDiv);
            messages.push(newDiv);
          }
          else{
            if (temprand<49){
              const newDiv = document.createElement("div");
              var robtemp = random(10,30);
              // and give it some content
              const newContent = document.createTextNode("You just h̷̦͑̀̎͛à̵̡̨̡̨̪͈̖͖̬̦͎͈̍̊̑̉̇͗̅͒̇̀̕͘͝͠c̸̨̦̭̣͆̈́̐͊̊̋͘͜͝ͅḱ̵͇̘͕̩̮̜͓̼̜̙̅͑͒̋͝ͅẻ̷̝̩̗͉̰͙̣̯̣̹̎̍̾̆̀͗̇̒́̆͑̈̾d̶̻̘̣̪̮̾̐̀̈ ̵̡̡̛̠̭͙͎̜̭͇̮̃̒̎̂̎͒̋̃̃͋̀̑͜ out "+robtemp + " tokens!");
              std("I got "+robtemp+" from robbing");
              tokens += robtemp;
              // add the text node to the newly created div
              newDiv.appendChild(newContent);

              // add the newly created element and its content into the DOM
              const currentDiv = document.getElementById("div1");
              document.body.insertBefore(newDiv, currentDiv);
              messages.push(newDiv);
            }
            else{
              const newDiv = document.createElement("div");
              var robtemp = random(10,30);
              // and give it some content
              const newContent = document.createTextNode("You LITERALLY DROVE A TANK INTO THE BANK and the banker surrendered "+robtemp + " tokens!!!");
              std("I got "+robtemp+" from robbing");
              tokens += robtemp;
              // add the text node to the newly created div
              newDiv.appendChild(newContent);

              // add the newly created element and its content into the DOM
              const currentDiv = document.getElementById("div1");
              document.body.insertBefore(newDiv, currentDiv);
              messages.push(newDiv);
            }
          }
        }
      }
