function pasanganTerbesar(num) {
    var pasanganangka = []
    var newnum = num.toString()
  
    for (var i = 0; i < newnum.length - 1; i++) {
      var baru = newnum[i] + newnum[i + 1]
      var numberbaru = Number(baru)
  
      pasanganangka.push(numberbaru)
    }
  
    pasanganangka.sort()
    var max = pasanganangka[pasanganangka.length - 1]
  
    return max
  }
  
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  