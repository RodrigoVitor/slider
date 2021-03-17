let imgs = []
let preImg = document.getElementById('img')
function preCarrega()
{
    for(i=1; i < 6; i++)
    {
        imgs[i] = new Image()
        imgs[i].src = "../img/a"+i+".png"
    }
}

function carregaImg(img)
{
    preCarrega()
    preImg.src = imgs[img].src
}

function troca()
{
    imgAtual++
    if(imgAtual > imgs.length - 1)
    {
        imgAtual = 1
    } 
    carregaImg(imgAtual)
}

function start()
{
    imgAtual = 1
    carregaImg(imgAtual)
    let tmp = setInterval(troca, 2000)
}
start()







