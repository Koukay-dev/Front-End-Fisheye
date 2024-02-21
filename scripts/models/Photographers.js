
class Photographer
{
    constructor(photographer){
        this._name = photographer.name
        this._id = photographer.id
        this._country = photographer.country
        this._portrait = photographer.portrait
        this._city = photographer.city
        this._tagline = photographer.tagline
        this._price = photographer.price
    }
    
    get name(){
        return this._name
    }
    get id(){
        return this._id
    }
    get country(){
        return this._country
    }
    get portrait(){
        return `./assets/photographers/${this._portrait}`;
    }
    get city(){
        return this._city
    }
    get tagline(){
        return this._tagline
    }
    get price(){
        return `${this._price}€/jour`
    }

}