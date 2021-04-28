$("#attempt").keyup(function(event) {
    var txt = $("#attempt").val();  // Current content of the input field
    var keycode = event.which;       
    var letter = String.fromCharCode(keycode); 

    if (! "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(letter)) { return }

    $.getJSON( "/_check", { txt: txt }).done(
               function(data) {
                 m = data.message;
                 matched = data.matched;
                 console.log(data)
                 htmlString = "";
                 if (m) {
                    $("#response").html(m);
                 }
                 if (f) {
                     for (i = 0; i<matched.length; i++)
                        htmlString+="<p>"+matched[i] + "</p>";
                    $("#results").html(htmlString);

                 }
                }
            ).fail(
               // if errors can't be handled
            );
    });
