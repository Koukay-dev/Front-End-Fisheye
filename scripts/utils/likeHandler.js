
/**
 * Gère les likes et leurs affichage
 * @param {Node} elem 
 */
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
    updateTotalLike()
}

// Compatibilité au clavier pour les likes 
function handleLikeKey(elem,event) {
    if (event.key === 'Enter') {
        handleLike(elem);
    }
}



// Gère l'affichage du total de like
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