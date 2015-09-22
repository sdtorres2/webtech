var Temperature = {
    toFahrenheit: function (celsiusValue) {
        return (cValue * 9/5) +32;
        //return Celsius to Fahrenheit conversion
    },
    toCelsius: function (fahrenheitValue) {
        return (fValue - 32) * (5/9);
    //return Fahrenheit to Celsius conversion
    }
};



var fValue = 82;
var cValue = Temperature.toCelsius(fValue);

var tempToday;
tempToday = 82;

var tempInCelsius;
tempInCelsius = Math.round(Temperature.toCelsius(tempToday));

var message;

message = "Today's temperature is " + tempToday +"F, which is " + tempInCelsius + "C.";
console.log(message);

