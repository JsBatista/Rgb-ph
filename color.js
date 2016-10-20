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
  };

  function changeLabel() {
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName("numbColor")[i].value = getRGB()[i];
    }
  };

  function callIt(time) {
    let go = setInterval(() => {
      changeColor();
      changeLabel();
    }, time);

    if (!time) {
      clearInterval(go);
    };
  };

  return {
    callIt: callIt,
    getRGB: getRGB,
  }

}

let x = Color("changeColor");
x.callIt(50);
