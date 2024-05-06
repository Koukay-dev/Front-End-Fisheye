
class PhotographerCard
{
    constructor(photographer){
        this._photographer = photographer
    }

    get photographer(){
        return this._photographer
    }

    createPhotographerIndexCard(){
        const wrapper = document.createElement('article')

        const photographerCard =`
        <a class='photographer-card' href='./photographer.html?id=${this.photographer.id}' aria-label="${this.photographer.name}">
            ${this.roundPicture()}
            <h2>${this.photographer.name}</h2>
        </a>
        <div class='photographer-index-card-sub-text'>
          <h3>${this.photographer.city}, ${this.photographer.country}</h3>
          <p>${this.photographer.tagline}</p>
          <p class='small-price'>${this.photographer.price}</p>
        </div>
        `
        wrapper.classList.add('photographer-index-card');
        wrapper.innerHTML = photographerCard
 
        return wrapper
    } 

    roundPicture(){
        return `<img class='round-photographer-picture' width=200 height=200  src="${this.photographer.portrait}" alt="${this.photographer.name}">`
    }

    smallRoundPicture(){
        return `<img class='small-picture round-photographer-picture' src="${this.photographer.portrait}" alt="${this.photographer.name}">`
    }

    infoPhotograph(){
        return `
        <div class='photographer-profile'>
            <h2>${this.photographer.name}</h2>
            <h3>${this.photographer.city}, ${this.photographer.country}</h3>
            <p>${this.photographer.tagline}</p>
        </div>
        `
    }

    bannerPhotograph(){
        const wrapper = document.createElement('div')
        wrapper.classList.add('photograph-header')

        const bannerPhotograph = `
            ${this.infoPhotograph()}
            <button class="contact_button" onclick="displayModal()" onkeypress='displayModalKey(event)' tabindex='0' aria-label='Contact Me'>Contactez-moi</button>
            ${this.roundPicture()}
        `
        wrapper.innerHTML = bannerPhotograph
        return wrapper

    }

}