

function handleLike(elem){
    var likesCounter = elem.querySelector('span')
    var nbLike = parseInt(likesCounter.innerText)
    if(elem.dataset.liked == 'true'){
        nbLike -= 1
        elem.dataset.liked = false
    } else {
        nbLike += 1
        elem.dataset.liked = true
    }
    likesCounter.innerText = nbLike
}