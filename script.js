function myFunction() {
   var elem = document.getElementById("bt1");
   document.querySelector('p').classList.add("pidor");
   document.querySelector('button').classList.add("bt");
   if (elem.innerHTML == "click me pidor") elem.innerHTML = "HAHA NAEBAL";
   else elem.innerHTML = "click me pidor";
   if (document.body.style.backgroundColor === "white") {
     document.body.style.backgroundColor = "black";
   } else if (document.body.style.backgroundColor === "black") {
     document.querySelector('p').classList.remove("pidor");
     document.querySelector('button').classList.remove("bt");
     document.body.style.backgroundColor = "white"
   }
 }