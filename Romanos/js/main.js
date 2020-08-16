document.getElementById('Enviar').addEventListener('click', () => {
  let num = parseInt(document.getElementById('numero').value);

  let resta = converToRoman(num);

  document.getElementById('resultado1').innerText = resta;
})
function converToRoman(numInput) {

  const list = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
  }

  let numRoman = new Array();

  for (const num in list) {
      while (list[num] <= numInput) {
          numInput -= list[num];
          numRoman.push(num);
      }
  }
  return numRoman.join('');

}

console.log(converToRoman(2));