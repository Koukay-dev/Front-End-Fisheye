class LightBox {
    constructor() {
        this._mediaList = []
        this._modal = document.getElementById('lightbox-modal')
        this._closeButton = document.getElementById('lightbox-close-button')
        this._mainMedia = document.getElementById('lightbox-picture')
        this._pictureTitle = document.getElementById('lightbox-picture-title')
        this._nextArrow = document.getElementById('right-arrow')
        this._previousArrow = document.getElementById('left-arrow')

        this._eventInit = null
    }

    init() {
        this.lenMediaList = this._mediaList.length

        this._mediaList.forEach((media) => {
            // à réinitialiser à chaque tri étant donné que le DOM est supprimmé
            const card = document.querySelector(`[data-id="${media.id}"]`)
            const cardMedia = card.querySelector('img, video')
            if (cardMedia) {
                cardMedia.addEventListener('click', () => {
                    this.openLightbox(media)
                })
                cardMedia.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        this.openLightbox(media)
                    }
                })
            }
        })

        if (this._eventInit === null) {
            this._closeButton.addEventListener('click', () =>
                this.closeLightbox()
            )
            this._nextArrow.addEventListener('click', () => this.nextPicture())
            this._previousArrow.addEventListener('click', () =>
                this.previousPicture()
            )
            document.addEventListener('keydown', (event) => {
                //evenement au clavier
                switch (event.key) {
                    case 'ArrowLeft':
                        this.previousPicture()
                        break
                    case 'ArrowRight':
                        this.nextPicture()
                        break
                    case 'Escape':
                        this.closeLightbox()
                        break
                }
            })
            this._eventInit = true
        }
    }

    addMedia(media) {
        this._mediaList.push(media)
    }

    resetMedia() {
        this._mediaList = []
    }

    openLightbox(media) {
        this._updatePicture(media)
        this._modal.style.display = 'block'
    }

    closeLightbox() {
        this._modal.style.display = 'none'
    }

    previousPicture() {
        let actualIndex = this._findIndex()
        let newIndex =
            actualIndex - 1 == -1 ? this.lenMediaList - 1 : actualIndex - 1
        this._updatePicture(this._mediaList[newIndex])
    }

    nextPicture() {
        let actualIndex = this._findIndex()
        let newIndex =
            actualIndex + 1 == this.lenMediaList ? 0 : actualIndex + 1
        this._updatePicture(this._mediaList[newIndex])
    }

    _updatePicture(media) {
        const mediaTagName = this._currentTagName()
        if (media.mediaType == 'video' && mediaTagName == 'img') {
            this._switchMainMediaTo('video', media)
        } else if (media.mediaType == 'image' && mediaTagName == 'video') {
            this._switchMainMediaTo('img', media)
        } else {
            this._mainMedia.src = media.mediaUrl
            this._mainMedia.dataset.id = media.id
        }
        this._pictureTitle.innerText = media.title
        this._mainMedia.setAttribute('aria-label', media.title)
    }

    _findIndex() {
        let actualId = this._mainMedia.dataset.id
        return this._mediaList.findIndex((media) => media.id == actualId)
    }

    _currentTagName() {
        return this._mainMedia.tagName.toLowerCase()
    }

    /**
     * Remplacer le elemName par l'élement qui doit remplacer le media principal
     * ex: 'video'
     * @param {string} elemName
     */
    _switchMainMediaTo(elemName, media) {
        var newElem = document.createElement(elemName)
        newElem.id = this._mainMedia.id
        newElem.src = media.mediaUrl
        newElem.dataset.id = media.id
        if (elemName == 'video') newElem.controls = true
        this._mainMedia.replaceWith(newElem)
        this._mainMedia = document.getElementById('lightbox-picture')
    }
}
