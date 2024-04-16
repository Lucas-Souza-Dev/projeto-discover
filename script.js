function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector('#profile img');

    //substituir imagem
    if(html.classList.contains("light")){
        img.setAttribute("src","./assets/avatar-light.png")
        img.setAttribute("alt", "Foto do mike sorrindo de oculos escuros, usando jaqueta preta com um fundo degrade.")
    }else{
        img.setAttribute("src","./assets/avatar.png")
    }
    

}