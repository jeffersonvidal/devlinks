function toggleMode() {
  const html = document.documentElement
  /** alternar dark e light mode */
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  /** trocar imagem ao mudar para light mode*/
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "outro texto alternativo para foto no light mode")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "MrVIDAL no dark mode")
  }
}
