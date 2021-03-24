function dropdown() {
    var x = document.getElementById("dropdownClick");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

const hello = () => {
    console.log("Welcome to my Gym Sample\nBy: Amado Lazo\n\nLazoali98@gmail.com");
}
hello();