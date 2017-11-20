export default function platzom(str) {
  let translation = str;

  // si la palabra termina en "ar", se le quitan esos dos carácteres:
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }

  // si la palabra inicia con "z", se le añade "pe" al final:
  if (str.toLowerCase().startsWith('z')) {
    translation += "pe";
  }

  // si la palabra traducida tiene 10 o más letras se debe partir a la mitad y unir con guión
  const length = translation.length;

  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  // si la palabra original es un palíndromo, ninguna regla cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas
  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true;
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  return translation;
}
