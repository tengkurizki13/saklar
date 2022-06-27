let button = document.querySelector("#switch");
let lamps = document.querySelectorAll(".lamp");

lamps.forEach(function (val, index) {
  let dia = index;
  let ini = lamps[dia].classList;

  let klik = (val = lamps[dia]);

  klik.addEventListener("click", kamu);
  function kamu() {
    if (ini.contains("active")) {
      ini.remove("active");
    } else {
      ini.add("active");
    }
  }
});

button.addEventListener("click", switchLamp);

function switchLamp() {
  let number = document.querySelector("#numberLamp");
  let endClass = lamps[number.value - 1].classList;

  if (endClass.contains("active")) {
    endClass.remove("active");
  } else {
    endClass.add("active");
  }
}
