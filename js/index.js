let acepto = document.getElementById("acepto");

acepto.addEventListener("click", function() {
  if (acepto.checked) {
   document.getElementById('boton').classList.remove('disabled');
} else {
   document.getElementById('boton').classList.add('disabled');
  }
});

var randomlinks=new Array(29)

 randomlinks[0]="https://ugx2zv1j3sq.typeform.com/to/n2jthYmv#aehj=xjh6"
 randomlinks[1]="https://ugx2zv1j3sq.typeform.com/to/bbYKx3Qm#aehj=xjh6"
 randomlinks[2]="https://ugx2zv1j3sq.typeform.com/to/yJYPmL5y#aehj=xjh6"
 randomlinks[3]="https://ugx2zv1j3sq.typeform.com/to/iAd74D2a#aehj=xjh6"
 randomlinks[4]="https://ugx2zv1j3sq.typeform.com/to/MvSuF7Sh#aehj=xjh6"
 randomlinks[5]="https://ugx2zv1j3sq.typeform.com/to/obh684NQ#aehj=xjh6"
 randomlinks[6]="https://ugx2zv1j3sq.typeform.com/to/e5hC2Wfn#aehj=xjh6"
 randomlinks[7]="https://ugx2zv1j3sq.typeform.com/to/isR0pAHx#aehj=xjh6"
 randomlinks[8]="https://ugx2zv1j3sq.typeform.com/to/ieFXDSh6#aehj=xjh6"
 randomlinks[9]="https://ugx2zv1j3sq.typeform.com/to/Vk2fnAHH#aehj=xjh6"
 randomlinks[10]="https://ugx2zv1j3sq.typeform.com/to/jg1BXWwc#aehj=xjh6"
 randomlinks[11]="https://ugx2zv1j3sq.typeform.com/to/KCiUGXqM#aehj=xjh6"
 randomlinks[12]="https://ugx2zv1j3sq.typeform.com/to/dN4Mr7Pv#aehj=xjh6"
 randomlinks[13]="https://ugx2zv1j3sq.typeform.com/to/qxGveRmj#aehj=xjh6"
 randomlinks[14]="https://ugx2zv1j3sq.typeform.com/to/Ano44fFQ#aehj=xjh6"
 randomlinks[15]="https://ugx2zv1j3sq.typeform.com/to/T0sSF3gr#aehj=xjh6"
 randomlinks[16]="https://ugx2zv1j3sq.typeform.com/to/rsptXZ2U#aehj=xjh6"
 randomlinks[17]="https://ugx2zv1j3sq.typeform.com/to/Ob0fI3MN#aehj=xjh6"
 randomlinks[18]="https://ugx2zv1j3sq.typeform.com/to/uQe9yoFW#aehj=xjh6"
 randomlinks[19]="https://ugx2zv1j3sq.typeform.com/to/i2ws3D7B#aehj=xjh6"
 randomlinks[20]="https://ugx2zv1j3sq.typeform.com/to/Lsj4y1zz#aehj=xjh6"
 randomlinks[21]="https://ugx2zv1j3sq.typeform.com/to/c1IJhuJS#aehj=xjh6"
 randomlinks[22]="https://ugx2zv1j3sq.typeform.com/to/T3nTyqy9#aehj=xjh6"
 randomlinks[23]="https://ugx2zv1j3sq.typeform.com/to/YWk5C0lJ#aehj=xjh6"
 randomlinks[24]="https://ugx2zv1j3sq.typeform.com/to/P7chNQva#aehj=xjh6"
 randomlinks[25]="https://ugx2zv1j3sq.typeform.com/to/iQkxqZbC#aehj=xjh6"
 randomlinks[26]="https://ugx2zv1j3sq.typeform.com/to/QelYRfLy#aehj=xjh6"
 randomlinks[27]="https://ugx2zv1j3sq.typeform.com/to/g7L436Pq#aehj=xjh6"
 randomlinks[28]="https://ugx2zv1j3sq.typeform.com/to/GQBmxQq0#aehj=xjh6"
 randomlinks[29]="https://ugx2zv1j3sq.typeform.com/to/o554ABEa#aehj=xjh6"

 function randomlink(){
    window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
    }