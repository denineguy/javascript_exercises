/* W3Resource.com: Write a JavaScript program to convert temperatures to and from
celsius, fahrenheit.[ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f =
temperature in fahrenheit ] Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C */


function temperature(rawTemp, scale) { 
  var newTemp; 
  if (scale === 'celsius') { 
    newTemp =  (rawTemp * 9/5) + 32; 
    return newTemp + '\xB0C' 
  } else { 
    newTemp =  (rawTemp - 32) * 5/9; 
    return newTemp + '\xB0F' 
  } 
 
}

temperature(60, 'celsius');
temperature(45, 'fahrenheit');





