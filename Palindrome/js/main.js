
function palindrome(event) { 
  event.preventDefault();

  var str = document.getElementById('input').value;
  var re = /[\W_]/g;
  var lowStr = str.toLowerCase().replace(re, '');
  var splitStr = lowStr.split('').reverse().join('');
  var result = document.getElementById('result');

  if (splitStr === lowStr) {
      result.innerHTML = 'Felicidades, esto es un Palindrome';
  } else {
      result.innerHTML = 'Lo siento, esto no es un Palindrome';
  }

  return false;
}