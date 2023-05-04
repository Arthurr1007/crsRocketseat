function toggleMode() {
   
    //if (html.classList.contais('light')) {
   //   html.classList.remove('light')
   //  }    else {
   //   html.classList.add('light')
   //  }
    const html = document.documentElement
    html.classList.toggle('light')



    //pegar a tag img
    const img = document.querySelector("#profile img")
    //substituir a imagem
    if(html.classList.contains('light')) {
       //se tiver light mode, adicionar a iamgem light
        img.setAttribute('src', './assets/Avatar.png')
        img.setAttribute('alt', 'Carro Branco")
    //se tiver sem light mode, manter a imagem normal
    } else {
        img.setAttribute('src', './assets/Avatar.png')
        img.setAttribute('alt', 'Carro preto')
    }
}