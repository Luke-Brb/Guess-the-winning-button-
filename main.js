function myAdd() {
    var n = document.getElementById("myNumber").value;
    var randomButton = [Math.floor(Math.random() * n)];
   for (i = 0; i < n; i++) {
       var btnGen = document.createElement("button");
       btnGen.innerHTML = "Pick me!";
       btnGen.id = i;
       document.getElementById("buttonContainer").appendChild(btnGen);
       btnGen.addEventListener("click", function() {
            if (btnGen.id == randomButton) {
                alert("You have discovered the winning button!");
            } else {
                alert("Try another one!");
            }
            resetGame();
       })
    }
}
function resetGame() {
 const clearButtons = document.getElementById("buttonContainer");
 while (clearButtons.firstChild) {
  clearButtons.removeChild(clearButtons.lastChild);
 }
 document.getElementById("myNumber").value = '';
}
