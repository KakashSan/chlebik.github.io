let paysafecard = "0906-7613-9796-8377"

/*var heslacek = document.getElementById("heslo").value*/

function hesielko() {
   if(document.getElementById("heslo").value=="cernamamba") {
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