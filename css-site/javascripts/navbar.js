  function dropdownmenu(){
           var x = document.getElementById("dropdownclick");
            if (x.className === "topnavleft") {
                x.className += " responsive" ;
            }
            else {
                x.className = "topnavleft";
            }
        } 