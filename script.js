//if (html.classList.contains("light")) {
//  html.classList.remove("light")
//} else {
//  html.classList.add("light")
//}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/Mobile/avatar-light.png")
  } else {
    img.setAttribute("src", "assets/Mobile/avatar.png")
  }
}

//Pegar a tag.

/*  substituir a imagem se tiver light mode, */

//adicionar a imagem light se tiver sem light mode, manter a imagem normal//
