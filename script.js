function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar imagem p&b
    img.setAttribute('src', './assets/foto-perfil2.png')
  } else {
    // se tiver sem light mode, manter imagem colorida
    img.setAttribute("src", "./assets/foto-perfil.png")
  }
}
