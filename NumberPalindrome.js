function angkaPalindrome(num) {
    var newnum = ""
    var i = true
    var hasil
  
    while (i) {
      num++;
      newnum = num.toString().split('').reverse().join('')
      if (String(num) === newnum) {
        i = false
        hasil = num
      }
      
    }
    
   return hasil
  }
  
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  