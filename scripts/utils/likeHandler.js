

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
    updateTotalLike()
    likesCounter.innerText = nbLike
}


function updateTotalLike(){
    const allLikeElems = document.querySelectorAll('.likes')
    const DOMtotalLike = document.querySelector('#total-like')

    var totalLike = 0
    allLikeElems.forEach((elem) => {
        var likesCounter = elem.querySelector('span')
        totalLike += parseInt(likesCounter.innerText)
    })
    
    DOMtotalLike.innerText = totalLike
}