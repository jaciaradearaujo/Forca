function vitoria() {
  pincel.beginPath()
  pincel.fillStyle = 'green'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Parabéns,', 405, 100)
  pincel.fillText('Você venceu!', 405, 150)
}

function derrota() {
  pincel.beginPath()
  pincel.fillStyle = 'red'
  pincel.font = "bold 40px 'Inter'"
  pincel.fillText('Game Over!', 405, 100)
  pincel.fillText('Você  perdeu!', 405, 150)
}
