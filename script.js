//Input Calibration 1 einlesen
//Input Calibration 2 einlesen

function arithmeticAverage(Value1, Value2, Value3, Value4, Value5) {
  console.log(Value1);
  console.log(Value2);
  console.log(Value3);
  console.log(Value4);
  console.log(Value5);
  const arithmeticAverage = 5 / (Value1 + Value2 + Value3 + Value4 + Value5);
  console.log("arithmeticAverage: " + arithmeticAverage);
  return arithmeticAverage;
}

function getInput_1() {
  const input1_1 = document.querySelector("#input1_1").value;
  const input2_1 = document.querySelector("#input2_1").value;
  const input3_1 = document.querySelector("#input3_1").value;
  const input4_1 = document.querySelector("#input4_1").value;
  const input5_1 = document.querySelector("#input5_1").value;
  const x = arithmeticAverage(input1_1, input2_1, input3_1, input4_1, input5_1);
  console.log("x: " + x);

  return x;
}

function getInput_2() {
  const input1_2 = document.querySelector("#input1_2").value;
  const input2_2 = document.querySelector("#input2_2").value;
  const input3_2 = document.querySelector("#input3_2").value;
  const input4_2 = document.querySelector("#input4_2").value;
  const input5_2 = document.querySelector("#input5_2").value;
  const y = arithmeticAverage(input1_2, input2_2, input3_2, input4_2, input5_2);
  console.log("y: " + y);

  return y;
}

function calculateCalibration() {
  const time10 = 10.0; //10 Second
  const time1 = 1.0; //1 Second
  let mass1 = getInput_1(); //1 second mass
  let mass10 = getInput_2(); //10 second mass

  const timeDifference = time10 - time1;
  const massDifference = mass10 - mass1;
  const massDividedTime = massDifference / timeDifference;
  const difference = mass1 - massDividedTime;
  const resultTime = (-1 / massDividedTime) * difference; //time difference in second
  const calibrationValue = resultTime * 1000; //time calculate to millisecond

  console.log(
    "Der Kalibrierungswert beträgt: " + calibrationValue.toFixed(2) + " ms"
  );
}

/*
tk=(t10-t1/m10-m1)*(m1-0)-t1
(10 - 1 / 496 - 51) *(51-0)-1

To-do:
Eingabe von 1 Sekunden (variable einstellbar)
Eingabe von 10 Sekunden (variable einstellbar)

*/
