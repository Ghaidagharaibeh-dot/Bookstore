alert('Wlecom to our store')
prompt ('write your name')

var book = prompt('write 1-booka for Action and Adventurbooks 2-write bookb for Classics 3-wite bookc for Historical ')
/* when user book type he/she want it will appear like link*/
if (book === 'booka') {
  document.write('<a href="www.google">Action and Adventure</a>')}
 else if (book === 'bookb') {document.write('<a href="www.google">Classics</a>')}

  else if ( book==='bookc')
  {document.write('<a href="www.google">Historical Fiction</a>')
}

var book = prompt('write your fav book')
function books(){
while(book!== 'booka' && book !=='bookb' && book !== 'bookc'){
  book = prompt('write booka or bookb or bookc !')}
}
books();




  function booknum(){
var count = prompt('how mony book you want see')
 var pic =''
 for (var x=0 ; x < count ; x=x+1){
   if ( book === 'booka'){pic = pic +'<img src="https://www.amazon.com/images/P/B07WYSGGNV.01.LZZZZZZZ.jpg">'}

   else if (book === 'bookb'){ 
    pic = pic + '<img src="https://cdn.shopify.com/s/files/1/0064/5342/8271/products/PCCP5-Penguin_Classics_Cameo_angle_1200_720x.jpg?v=1556052881">'
  }

  else if( book ==='bookc'){
    pic = pic + '<img src="https://marketing.prowritingaid.com/The%20Essential%20Historical%20Fiction%20List.jpg">'
  } 


 }
 
 document.write(pic) 
  }
  booknum();


 

