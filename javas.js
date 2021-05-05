alert('Wlecom to our store')

alert('write the book type you need')
var book = prompt('write booka for Action and Adventurbooks,bookb for Classics and anything for Historical ')

if (book === 'booka') {
  document.write('<a href="www.google">Action and Adventure</a>')}
 else if (book === 'bookb') {document.write('<a href="www.google">Classics</a>')}

  else {
  document.write('<a href="www.google">Historical Fiction</a>')
}

