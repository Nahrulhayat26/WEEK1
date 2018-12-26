class Burung {
    constructor (warna, jeniskelamin, kaki) {
    this.warna = warna
    this.jeniskelamin = jeniskelamin
    this.kaki = kaki
    this.gacor = false
    }
  
    bersuara(){
      return this.gacor = true
    }
  
    tidakbersuara(){
      return this.gacor = false
    }
  }
  
  class Murray extends Burung {
    constructor (warna, jeniskelamin, kaki){
    super (warna, jeniskelamin, kaki)
    this.suaramerdu = false
  }
  
  berkicaumerdu() {
    console.log('Burung murray berkicau merdu')
    return this.suaramerdu = true
  }
  }
  
  class loveBird extends Burung {
    constructor (warna, jeniskelamin, kaki) {
      super (warna, jeniskelamin, kaki)
      this.ngekek = false
    }
  
    ngekekpanjang() {
      console.log('Burung loveBird ngekek durasi panjang')
      return this.ngekek = true
    }
  }
  
  const burungmurray = new Murray ('hitam','jantan', 2)
  const burunglovebird = new loveBird ('hijau','betina', 2)
  
  burungmurray.berkicaumerdu()
  
  burunglovebird.ngekekpanjang()
  
  const burung = new Burung ('merah','jantan', 2)
  console.log(burung.gacor)
  burung.bersuara()
  console.log(burung.gacor)
  burung.tidakbersuara()
  console.log(burung.gacor)