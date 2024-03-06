

class MediaCard {

    constructor(media){
        this._media = media
    }

    get media(){
        return this._media;
    }

    createThumbnail(){
        const wrapper = document.createElement('article')

        const pictureCard =`
        ${this._mediaTypeDom()}
        <div class='inline-thumb-info'>
        <h3>${this.media.title}</h3>
        ${this._likesDom()}
        </div>
        `
        wrapper.classList.add('picture-card');
        wrapper.innerHTML = pictureCard
 
        return wrapper
    }

    _mediaTypeDom(){
        var mediaDom = ''

        switch(this._media.mediaType){
            case 'image':
                mediaDom = `<img class='thumb-img' width=350 height=300 src='${this._media.mediaUrl}'>`
                break
            case 'video':
                mediaDom = `
                <video class='thumb-img' width=350 height=300 controls>
                    <source src="${this._media.mediaUrl}" type="video/mp4" />
                </video>`
                break
        }
        return mediaDom
    }

    _likesDom(){
        return `
        <div class='likes'>
            <span>${this._media.likes}</span>
            <img src="assets/icons/like-heart.svg" alt="icone en forme de coeur pour les likes">
        </div>
        `
    }
}
