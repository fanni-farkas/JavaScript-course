// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmlitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmlitude(temperatures);
calcTempAmlitude(amplitude);

//MERGE 2 ARRAYS

const calcTempAmlitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmlitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C FIX
    //value: Number(prompt('degrees celsius: '))
    value: 10,
  };

  //B FIND
  //console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//A IDENTIFY
console.log(measureKelvin());

//USING A DEBUGGER
const calcTempAmlitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmlitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
 */

const array = [17, 21, 23, 33]

const printForecast = function (array){
    let forecast = '';
    for (const i of array){
        const position = array.indexOf(i) + 1
        forecast += (`${i} degrees in ${position} days...`)
        }
        console.log(forecast);
}

printForecast(array)