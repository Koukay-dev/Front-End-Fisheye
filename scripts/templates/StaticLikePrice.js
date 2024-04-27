class StaticLikePrice {
    constructor(photographerPrice) {
        this._price = photographerPrice
        this._wrapper = document.querySelector('#price-like-total')
        this._likeElem = document.querySelectorAll('.likes')
        this._likeNb = this.countLikes()
    }

    createElem() {
        console.log(this._likeNb)
        const elem = `
            <span class='like-heart-wrapper'><span id='total-like'>${this._likeNb}</span><img src='/assets/icons/like-heart-black.svg'></span>
            <span>${this._price}</span>
        `
        this._wrapper.innerHTML = elem
    }

    countLikes() {
        var totalLike = 0
        this._likeElem.forEach((elem) => {
            var likesCounter = elem.querySelector('span')
            
            totalLike += parseInt(likesCounter.innerText)
        })
        console.log(totalLike)
        return totalLike
    }

    updateLike(){
        const DOMtotalLike = document.querySelector('#total-like')
        this._likeNb = this.countLikes()
        DOMtotalLike.innerText = this._likeNb
    }
    
}
