function pinGen() {
  const pin = Math.round(Math.random() * 100000);
  const pinString = pin + "";
  if (pinString.length === 5) {
    // console.log(pin);
    return pin;
  } else {
    // console.log("item has been missing", pin);
    return pinGen(); // recursive function call kora
  }
}
function generatePin() {
  const inputPin = document.getElementById("input-pin");
  inputPin.value = pinGen();
}
document.getElementById("calc-btn").addEventListener("click", function (event) {
  const calcPin = document.getElementById("calc-pin");
  const number = event.target.innerText;
  const previousPin = calcPin.value;

  if (isNaN(number)) {
    if (number == "C") {
      calcPin.value = "";
    }
  } else {
    const newPin = previousPin + number;
    calcPin.value = newPin;
  }

  //   console.log("clicked", typeof event.target.innerText);
});

function verify() {
  const pin = document.getElementById("input-pin").value;
  const calcPin = document.getElementById("calc-pin").value;
  const success = document.getElementById("notify-success");
  const failure = document.getElementById("notify-failure");
  if (pin === calcPin) {
    success.style.display = "block";
    failure.style.display = "none";
  } else {
    success.style.display = "none";
    failure.style.display = "block";
  }
}
