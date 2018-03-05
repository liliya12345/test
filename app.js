
    var nowyear = new Date().getFullYear();


    function count_age() {


        var x = document.getElementById("year").selectedIndex;
        var y = document.getElementById("year").options;
        var sel = y[x].text;
        var z = nowyear - sel;
        var w = 18-z;
       
        
        

        if (z >= 18  ) {


            alert("Welcome! You are older than 18!");
            window.open("https://www.youtube.com/watch?v=dCyqhpz4vV8");


        }
        else {
            alert("Sorry! Go back in "  + w + " years!");


        }
    }

    // document.getElementById("month").addEventListener("click", myFunction);





    var month = ["Jan", "Feb", "Mars", "April", "May", "Juni", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < month.length; i++) {

        document.getElementById("month").innerHTML += "<option value = " + month[i] + " >" + month[i] + "</option>";



    }


    for (let i = nowyear - 100; i <= nowyear; i++) {
        document.getElementById("year").innerHTML += "<option value = " + i + " >" + i + "</option>";



    }
    for (let i = 1; i <= 31; i++) {
        document.getElementById("day").innerHTML += "<option value = " + i + " >" + i + "</option>";



    }

    function myFunction() {
        var sel = window.document.getElementById("day");

        var opts = sel.options;

        while (opts.length > 0) {

            opts[opts.length - 1] = null;

        }
        var x = document.getElementById("year").selectedIndex;
        var y = document.getElementById("year").options;
        var q = parseInt(y[x].text);
        var a = document.getElementById("month").selectedIndex;
        var daylenght = 31;

        for (j = 1; j <= daylenght; j++) {
            if (a === 1) {


                if (q%4 === 0) {
                    daylenght = 29;
                }
                else {
                    daylenght = 28;
                }

            }
            else if (a === 0 || a === 2 || a === 4 || a === 6 || a === 7 || a === 9 || a === 11) {
                daylenght = 31;
            }
            else {
                daylenght = 30;
            }
            document.getElementById("day").innerHTML += "<option value = " + j + " >" + j + "</option>";


        }
    }
