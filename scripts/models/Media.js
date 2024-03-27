
class Media
{
    constructor(media, photographerName, myIndex, MediasList){
        this._photographerName = photographerName
        this._id = media.id
        this._photographerId = media.photographerId
        this._title = media.title

        const factoryMedia = new MediaTypeFactory(media)
        this._mediaType = factoryMedia.type 
        this._mediaUrl = factoryMedia.url 

        this._likes = media.likes
        this._date = media.date
        this._price = media.price

        this._myIndex = myIndex
        this._MediasList = MediasList
    }

    get photographerId(){
        return this._photographerId
    }
    get title(){
        return this._title
    }
    get id(){
        return this._id
    }
    get mediaType(){
        return this._mediaType
    }
    get mediaUrl(){
        return `./assets/photographers/${this._photographerId}-${this._photographerName}/${this._mediaUrl}`;
    }
    get likes(){
        return this._likes
    }
    get date(){
        return this._date
    }
    get price(){
        return `${this._price}€`
    }

}