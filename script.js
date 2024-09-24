            // newspaper subscribe signup start
            var modal = document.getElementById("myModal");

            var img = document.getElementById("myImg");
            
            var span = document.getElementsByClassName("close")[0];
            
            img.onclick = function () {
              modal.style.display = "block";
            }
                      span.onclick = function () {
              modal.style.display = "none";
            }
                      window.onclick = function (event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }
  