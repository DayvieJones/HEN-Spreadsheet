//Input Calibration 1 einlesen
//Input Calibration 2 einlesen

function arithmeticAverage(Value1, Value2, Value3, Value4, Value5) {
  const arithmeticAverage = Value1 + Value2 + Value3 + Value4 + Value5;
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
  return x;
}

function getInput_2() {
  const input1_2 = document.querySelector("#input1_2").value;
  const input2_2 = document.querySelector("#input2_2").value;
  const input3_2 = document.querySelector("#input3_2").value;
  const input4_2 = document.querySelector("#input4_2").value;
  const input5_2 = document.querySelector("#input5_2").value;
  const y = arithmeticAverage(input1_2, input2_2, input3_2, input4_2, input5_2);
  return y;
}

function calculateNozzleoffset() {
  const maxTime = 10.0; //10 Second
  const minTime = 1.0; //1 Second
  let minMass = getInput_1(); //1 second mass
  let maxMass = getInput_2(); //10 second mass

  const timeDifference = maxTime - minTime; //time difference calculated maxTime minus minTime
  const massDifference = maxMass - minMass;
  const massDividedTime = massDifference / timeDifference;
  const difference = minMass - massDividedTime;
  const resultTime = (-1 / massDividedTime) * difference; //time difference in second
  const calibrationValue = resultTime * 1000; //time calculate to millisecond
  console.log("The Nozzleoffset is: " + resultTime.toFixed(2) + " s");
  console.log("The Nozzleoffset is: " + calibrationValue.toFixed(2) + " ms");
  writeCalibrationOffset(resultTime, calibrationValue);
}

function writeCalibrationOffset(changeSecond, changeMilliSecond) {
  const contentOutputOffsetSeconds = document.querySelector(
    "#OutputOffsetSeconds"
  );
  const contentOutputOffsetMilliSeconds = document.querySelector(
    "#OutputOffsetMilliSeconds"
  );

  contentOutputOffsetSeconds.innerText = changeSecond.toFixed(2);
  contentOutputOffsetMilliSeconds.innerText = changeMilliSecond.toFixed(2);
}

/*
tk=(t10-t1/m10-m1)*(m1-0)-t1
(10 - 1 / 496 - 51) *(51-0)-1

To-do:
Eingabe von 1 Sekunden (variable einstellbar)
Eingabe von 10 Sekunden (variable einstellbar)

*/
