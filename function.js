function shoutout(){
    return 'halo function'
  }
  
  console.log(shoutout());
  
  
  function calculateMultiply(a, b){
    hasilperkalian = a * b
    return hasilperkalian
  }
  
  var num1 = 5
  var num2 = 6
  var hasilperkalian = calculateMultiply(num1, num2)
  
  console.log(hasilperkalian)
  
  
  function processsentence(){
    return 'Nama saya ' + name + ' Umur saya ' + age + ' Alamat saya di ' + address + ' dan saya punya hobi yaitu ' + hobby
  }
  var name = "Agus"
  var age = 30
  var address = "Jln. Malioboro, Yogjakarta"
  var hobby = "gaming"
  
  var fullSentence = processsentence(name,age,address,hobby)
  console.log(fullSentence)