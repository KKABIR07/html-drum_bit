//for  tap

for (var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        // 
        // console.log(this.style.color="white");
        var mkb = this.innerHTML;
        sound(mkb);
       
            
        });

}
//for kebord output
document.addEventListener("keydown",function (event) {
    sound(event.key);
})

function sound (key) {
    switch (key) {
        case "w":
            var we=new Audio("./sounds/crash.mp3");
            we.play();
            break;
        case "a":
            var app=new Audio("./sounds/kick-bass.mp3");
            app.play();
            break;
        case "s":
            var sap=new Audio("./sounds/snare.mp3");
            sap.play();
            break;
        case "d":
            var dex= new Audio("./sounds/tom-1.mp3");
            dex.play();
            break;
        case "j":
            var jax=new Audio("./sounds/tom-2.mp3");
            jax.play();
            break;
        case "k":
            var kak=new Audio("./sounds/tom-3.mp3");
            kak.play();
            break;
        case "l":
            var lik=new Audio("./sounds/tom-4.mp3");
            lik.play();    
        default:
            console.log(key);
            break;
    }
    
}


