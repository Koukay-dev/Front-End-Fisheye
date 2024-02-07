
class PhotographerCard
{
    constructor(photographer){
        this._photographer = photographer

        this.wrapper = document.createElement('article')
    }

    get photographer(){
        return this._photographer
    }

    createPhotographerCard(){
        const photographerCard =`
        <a href='./photographer.html?id=${this.photographer.id}'>
            <img src="${this.photographer.portrait}" alt="Portrait du photographe ${this.photographer.name}">
            <h2>${this.photographer.name}</h2>
        </a>
        <div>
          <h3>${this.photographer.city}</h3>
          <p>${this.photographer.tagline}</p>
          <p>${this.photographer.price}</p>
        </div>
        `
        this.wrapper.innerHTML = photographerCard
 
        return this.wrapper
    } 

}