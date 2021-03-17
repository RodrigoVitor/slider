let imgs = []
let preImg = document.getElementById('img')
//buscando todas as imagens
function preCarrega()
{
    for(i=1; i < 6; i++)
    {
        imgs[i] = new Image()
        imgs[i].src = "../img/a"+i+".png"
    }
}
//carregando 1 por 1
function carregaImg(img)
{
    preCarrega()
    preImg.src = imgs[img].src
}
//trocando a imagem
function troca()
{
    imgAtual++
    if(imgAtual > imgs.length - 1)
    {
        imgAtual = 1
    } 
    carregaImg(imgAtual)
}
//inicinando o programa
function start()
{
    imgAtual = 1
    carregaImg(imgAtual)
    let tmp = setInterval(troca, 2000)
}
start()







