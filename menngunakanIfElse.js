var nama = 'ade'
var peran = 'ksatria'

if (nama === '') {
  console.log('nama harus diisi')
} else if (nama !== '' && peran !== '') {
  console.log('selamat datang di dunia Proxytia, ' + nama + '!')
  if (peran === 'ksatria') {
    console.log('Halo, ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu')
  }
  if (peran === 'tabib') {
    console.log('Halo, ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka')
  }
  if (peran === 'penyihir') {
    console.log('Halo, ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu')
  }
} else {
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
}