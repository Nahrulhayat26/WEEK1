function hitungJumlahKata(kalimat) {
    //   var i = 0
      
    
    //   while (i <= kalimat.split) {
    //     if (kalimat.substring(i,i + 1) == '') {
    //       kalimat++
    //       i++
    //     }
    //      if (kalimat.substring(i,i + 1) == '\n') {
    //       kalimat++
    //       i++
    //   }
    //   i++
    // }
    return kalimat.split(" ").length
    }
    console.log(hitungJumlahKata('I have a dream')); // 4
    console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
    console.log(hitungJumlahKata('A song to sing')); // 4
    console.log(hitungJumlahKata('I')); // 1
    console.log(hitungJumlahKata('I believe I can code')); // 5
    