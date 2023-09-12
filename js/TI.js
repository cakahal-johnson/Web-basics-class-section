let container = document.querySelector('#container')
let title = document.querySelector('#title')
let para = document.querySelector('#para')

pick_img = ["beer.jpg ", "p1.jpg ", "p3.jpg ", " p4.jpg"];
pick_title = ["Beer", "water", " ice", " hills"];
pict_para = ["I to beer on weekend hit me up guy's", "checking ", " yes", " is working"];

check = 0

function myTI(){
    console.log(pick_img[check])
    container.style.backgroundImage = `url("/image/${pick_img[check]}")`

    title.innerHTML = pick_title[check];
    para.innerHTML = pict_para[check]
}

setInterval(function(){
    if (check < pick_img.length){
        myTI()
        check ++
    }else{
        check = 0
        myTI()
        check++

    }
}, 3000)


