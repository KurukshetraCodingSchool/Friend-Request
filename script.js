var btn =   document.querySelector("#card button")

var count = 0

btn.addEventListener("click", function(){
    if (count===0) {
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "Red";
        btn.style.color = "white";
        count++;
    }

   else{
    btn.innerHTML = "Add Frined";
    btn.style.backgroundColor = "white";
    btn.style.color = "green";
    count--;
   }
})

