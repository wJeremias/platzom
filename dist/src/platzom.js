"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  // si la palabra termina en "ar", se le quitan esos dos carácteres:
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }

  // si la palabra inicia con "z", se le añade "pe" al final:
  if (str.toLowerCase().startsWith('z')) {
    translation += "pe";
  }

  // si la palabra traducida tiene 10 o más letras se debe partir a la mitad y unir con guión
  var length = translation.length;

  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + "-" + secondHalf;
  }

  // si la palabra original es un palíndromo, ninguna regla cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}