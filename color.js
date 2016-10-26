function Color() {

  function getRGB() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(document.getElementsByClassName("changeColor")[i].value);
    }

    return rgb;
  };

  function changeColor() {
    getRGB();
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName("Color")[i].style.backgroundColor = "rgb(" + getRGB()[0] + "," +  getRGB()[1] + "," + getRGB()[2] +")";
    }
    document.getElementsByTagName("header")[0].style.backgroundColor = "rgb(" + getRGB()[0] + "," +  getRGB()[1] + "," + getRGB()[2] +")";
  };

  function changeLabel() {
    for (let i = 0; i < 3; i++) {
      [ document.getElementsByClassName("numbColor")[i].value, getRGB()[i] ] = [ getRGB()[i], document.getElementsByClassName("numbColor")[i].value ];
    }
  };

  function changeByNumber(){    
      for(let i = 0; i < 3; i++){
          document.getElementsByClassName("changeColor")[i].value = document.getElementsByClassName("numbColor")[i].value;
      }
      changeColor();
  }

  function randomColor(){
      for(let i = 0; i < 3; i++){
          document.getElementsByClassName("numbColor")[i].value = Math.floor(Math.random() * (256));
      }
      changeByNumber();
  }
    
  return {
    changeColor : changeColor,
    changeLabel : changeLabel,    
    changeByNumber : changeByNumber,
    randomColor: randomColor,
    getRGB: getRGB,
  }

}

let x = Color();

function load(){
    for( let i = 0; i<3; i++ ){
        document.getElementsByClassName("changeColor")[i].addEventListener("mouseup", function() { x.changeColor(); x.changeLabel()  });
        document.getElementsByClassName("numbColor")[i].addEventListener("keyup", function() { x.changeByNumber() });
    }
    document.getElementById("surprise").addEventListener("click", function(){ x.randomColor() });
}

window.onload = load();