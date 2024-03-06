
class MediaTypeFactory{
    constructor(media){
        if(media.image){
            this._type = 'image'
            this._url = media.image
        } else if(media.video){
            this._type = 'video'
            this._url = media.video
        } else {
            this._type = 'null'
            this._url = ''
        }
    }

    get type(){
        return this._type
    }
    get url(){
        return this._url
    }

}