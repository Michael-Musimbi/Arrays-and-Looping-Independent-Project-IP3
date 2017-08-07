function showAndClearField(frm){
              if (frm.num.value == "")
                alert("Kindly enter a number!")
            else{

            var val = document.getElementById("value").value;
          // List of outputs
            var outputs = [{
              mult: 3,
                str: 'ping'
            }, {
              mult: 5,
              str: 'pong'
            }

            ];

            // Loop 100 times
            for (var i = 1; i <= val; i += 1) {

            // Set empty vars
              var result, string = '';

            // Loop through the listed output objects
              outputs.forEach(function(output) {

            // If listed multiple, concat string
            if (i % output.mult === 0) {
              string += output.str;
            }

            });

            // Set result
              if (string.length) {
                result = string;
              } else {
                result = i;
              }

              // print result

             document.getElementById("show-result").innerHTML += result +'<br>';
              }
              //  alert("Result: " + result)
              }
              frm.firstName.value = ""
              }
