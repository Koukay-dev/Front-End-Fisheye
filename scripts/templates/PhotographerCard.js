
class PhotographerCard
{
    constructor(photographer){
        this._photographer = photographer

        this.wrapper = document.createElement('article')
    }

    get photographer(){
        return this._photographer
    }

    createPhotographerIndexCard(){

        const photographerCard =`
        <a class='photographer-card' href='./photographer.html?id=${this.photographer.id}'>
            ${this.roundPicture()}
            <h2>${this.photographer.name}</h2>
        </a>
        <div class='photographer-index-card-sub-text'>
          <h3>${this.photographer.city}, ${this.photographer.country}</h3>
          <p>${this.photographer.tagline}</p>
          <p class='small-price'>${this.photographer.price}</p>
        </div>
        `
        this.wrapper.classList.add('photographer-index-card');
        this.wrapper.innerHTML = photographerCard
 
        return this.wrapper
    } 

    roundPicture(){
        return `<img class='round-photographer-picture' src="${this.photographer.portrait}" alt="Portrait du photographe ${this.photographer.name}">`
    }

    smallRoundPicture(){
        return `<img class='small-picture round-photographer-picture' src="${this.photographer.portrait}" alt="Portrait du photographe ${this.photographer.name}">`
    }

    infoPhotograph(){
        return `
        <div class='big-info-card'>
            <h2>${this.photographer.name}</h2>
            <h3>${this.photographer.city}</h3>
            <p>${this.photographer.tagline}</p>
        </div>
        `
    }

    bannerPhotograph(){
        const bannerPhotograph = `
        <div class="photograph-header">
            ${this.infoPhotograph()}
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            ${this.roundPicture()}
        </div>
        `
        this.wrapper.innerHTML = bannerPhotograph
 
        return this.wrapper

    }

}