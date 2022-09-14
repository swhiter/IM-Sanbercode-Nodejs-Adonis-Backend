function makeRectangle(panjang,lebar) {
    for(var i = 0; i < lebar; i++) {
        var pagar = "";
        for(var j = 0; j<panjang; j++){
            pagar += "#"
        }
        console.log(pagar);
    }
    
  }
  
  // TEST CASE
  
  makeRectangle(8,4)