let paysafecard = "0782 8490 8314 9098"

/*var heslacek = document.getElementById("heslo").value*/

function hesielko() {
   if(document.getElementById("heslo").value=="smrditijaskyna") {
      botkobotko()
   }
   else {
   document.getElementById("nespravne").innerHTML = "NESPRAVNE"
   }
}

function botkobotko(){
   document.getElementById("NICOTA").innerHTML = ""
   document.getElementById("test1234").innerHTML = paysafecard
   document.getElementById("test1234").style.color = "#131313"

   document.getElementById("bot").innerHTML = "copy";
}