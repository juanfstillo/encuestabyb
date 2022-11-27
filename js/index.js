var randomlinks=new Array(10)

 randomlinks[0]="https://www.mercadolibre.com.ar/"
 randomlinks[1]="https://www.ebay.com/"
 randomlinks[2]="https://www.amazon.com/"
 randomlinks[3]="https://www.despegar.com.ar/"
 randomlinks[4]="https://www.youtube.com/"
 randomlinks[5]="https://www.netflix.com/ar"
 randomlinks[6]="https://www.infobae.com/"
 randomlinks[7]="https://www.promiedos.com.ar/"
 randomlinks[8]="https://open.spotify.com/"
 randomlinks[9]="https://getbootstrap.com/"
 randomlinks[10]="https://www.php.net/"

 function randomlink(){
    window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
    }