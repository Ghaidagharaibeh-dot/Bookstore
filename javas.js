alert('Wlecom to our store')
prompt ('write your name')

alert('write the book type you need')
var book = prompt('write booka for Action and Adventurbooks,bookb for Classics and anything for Historical ')
/* when user book type he/she want it will appear like link*/
if (book === 'booka') {
  document.write('<a href="www.google">Action and Adventure</a>')}
 else if (book === 'bookb') {document.write('<a href="www.google">Classics</a>')}

  else {
  document.write('<a href="www.google">Historical Fiction</a>')
}

