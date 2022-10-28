//sliding image
//var images = [
    //"nestle-cerelac.jpeg",
   // "nestle-milo.jpeg",
    //"indomie-chicken.jpeg",
   // "peak-milk.jpeg",
   // "nutribom.jpeg",
   // "dano-cool-cow.jpeg",
    //"Alpen.jpeg"
  //]
  
  //var imageHead = document.getElementById("images");
  //var i = 0;
  //setInterval(function () {
   // imageHead.style.backgroundImage = "url(" + images[i] + ")";
    //i = i + 1;
    //if (i == images.length) {
    //  i = 0;
   // }
//  }, 1000);




var images = [];

images[0] = ['nestle-cerelac.jpeg'];
images[1] = ['nestle-milo.jpeg'];
images[2] = ['indomie-chicken.jpeg'];
var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 2) {
    index = 0;
  }else {
    index++;
  }

 setTimeout(change, 3000);
}

window.onload = change();

